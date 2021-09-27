const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        //const blogData = await Post.findAll({
        //    attributes: [title, content, dateCreated],
        //    include: [
        //        {
        //            model: User,
        //            attributes: ["userName"],
        //        },
        //    ],
        //    raw: true,
        //});

        res.render("homepage");

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) => {
    res.render("dashboard");
})

router.get("/login", (req, res) => {

    if (req.session.id) {
        res.redirect('/dashboard');
        return;
    } else res.render('login');

});


module.exports = router;


