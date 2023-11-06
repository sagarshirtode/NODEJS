const express = require('express');
const router = express.Router();
const Course = require('../modals/course');

// GET ALL
router.get('/',async (req, resp) => {
    try {
        const allCourse = await Course.find();
        resp.json(allCourse);
    } catch (e) {
        console.log(e);
    }
})

// GET SINGLE
router.get("/:CourseId", async (req, resp) => {
    try {
        const oneCourse = await Course.findById(req.params.CourseId);
        resp.json(oneCourse);
    } catch (e) {
        console.log(e);
    }
})

// POST
router.post('/', async (req, resp) => {
    try {
        console.log(req.body);
        const c = await Course.create(req.body);
        resp.json(c);
    } catch (e) {
        console.log(e);
    }
})
// UPDATE

// DELETE
router.delete("/:CourseId", async (req, resp) => {
    console.log(req.params.CourseId);
   const d = await Course.deleteOne({_id:req.params.CourseId})
   resp.json(d);
})

module.exports = router;
