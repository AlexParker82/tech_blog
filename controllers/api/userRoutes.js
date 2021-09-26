const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const { password, userName } = req.body;

        if (!password || !userName) res.status(400).send("Need username and password");

        const userData = await User.create({ password, userName });

        req.session.save(() => {
            req.session.userId = userData.id;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
