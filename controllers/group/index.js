const Group = require('../../models/Group');

const getAllClass = async () => {
    try {
        return await Group.find().lean();
    } catch (e) {
        console.log('getting all classes failed ',e)
    }
};

const createGroup = async (newGroup) => {
    try {
        return await Group.create(newGroup);
    } catch (e) {
        console.log('getting all classes failed ',e)
    }
};


module.exports = getAllClass