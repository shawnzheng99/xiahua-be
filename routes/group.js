const express = require('express')
const getAllClass = require('../controllers/group')
const createGroup = require('../controllers/group')
const groupRoute = express.Router({ mergeParams: true })

groupRoute.get('/all', async (req, res) => {
    try {
        const allGroups = await getAllClass();
        res.render('dashboard', {
            group: allGroups,
        })
    } catch (e) {
        console.log('getting all classes failed: ', e)
        res.sendStatus(500)
    }
})


groupRoute.get('/create', async(req, res) => {
    res.render('createGroup')
});


groupRoute.post('/create', async (req, res) => {
    try {
        const {
            instructor_id,
            start_time,
            name,
            duration,
            students_id,
            location,
            joinable,
            max_ppl,
            description,
            level,
        } = req.body
        const newGroup = {
            instructor_id,
            start_time,
            name,
            duration,
            students_id,
            location,
            joinable,
            max_ppl,
            description,
            level,
        }
    // mock data
        // const newGroup = {
        //     instructor_id: '110',
        //     start_time: new Date(),
        //     name: 'suprior class 1',
        //     duration: 300,
        //     students_id: ['12', '134'],
        //     location: 'cypress',
        //     joinable: true,
        //     max_ppl: 10,
        //     description: 'come and try this new snow class',
        //     level: 0
        // }
        const createdGroup = await createGroup(newGroup);
        res.send({
            success: true,
            data: createdGroup,
        })
    } catch (e) {
        console.log('create new group failed ', e)
        res.send({
            success: false,
            data: e,
        })
    }
})


module.exports = groupRoute
