export default {
    async homeFunction (req, res) {
        res.status(200).json({ message: 'Hello world!' })
    },
}