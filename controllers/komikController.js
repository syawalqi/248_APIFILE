const db = require('../models');
const komikService = require('../services/komikService');

async function createKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }

        const result = await komikService.createKomik(db, komikData);
        res.status(201).json({success: true, data: result});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

async function getAllKomik(req, res) {
    try {
        const komiks = await komikService.getAllKomik(db);
        res.status(200).json({success: true, data: komiks});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

async function getKomikById(req, res) {
    try {
        const {id} = req.params;
        const result = await komikService.getKomikById(db, id);
        res.status(200).json({success: true, data: result});
    } catch (error) { 
        res.status(500).json({success: false, error: error.message}); 
    }
}

async function updateKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }

        const result = await komikService.updateKomik(db, req.params.id, komikData);
        res.json({success: true, data: result});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

async function deleteKomik(req, res) {
    try {
        const {id} = req.params;
        await komikService.deleteKomik(db, id);
        res.json({success: true, message: 'Komik deleted successfully'});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = {
    createKomik,
    getAllKomik,
    getKomikById,
    updateKomik,
    deleteKomik,
};