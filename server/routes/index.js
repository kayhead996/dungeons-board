function construct(app) {
    app.post("/host", (req, res) => {
        res.json({message: "Success!"});
    });
    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = construct;
