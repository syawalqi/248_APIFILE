async function createKomik(database, komikData) {
    const { title, description, author, imageType, imageName, imageData } = komikData;
    if (!title || !description || !author) {
        throw new Error('Title, description, and author are required fields.');
    }

    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null,
    });
    return newKomik;
}

async function getAllKomiks(database) {
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
}

