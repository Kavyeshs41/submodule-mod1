class HelloMod1 {
    helloModule(req, res, next) {
        return res.status(200).send({"message" : "Hello From Module1"})
    }
}

module.exports = new HelloMod1();