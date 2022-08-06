const Item = require('../models/Item')

const create = async (req, res, next) => {
    const {body} = req;
    const {
        title,
        description,
        image,
        category
    } = body;

    const item = Item({title, description, image, category})
    item.save();
    res.status(200);
}

const getAllItems = async (req, res, next) => {
    res.send('getAllItems');
}


module.exports = {
    create,
    getAllItems,
}