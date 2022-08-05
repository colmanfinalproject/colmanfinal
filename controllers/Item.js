const create = async (req, res, next) => {
    res.send('item created');
}

const getAllItems = async (req, res, next) => {
    res.send('getAllItems');
}


module.exports = {
    create,
    getAllItems,
}