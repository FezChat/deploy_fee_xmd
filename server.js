const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

app.use('/',async (req, res, next) => {
res.sendFile(__path + '/index.html')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Fr El Ez 🚨

 Server running on http://localhost:` + PORT)
})

module.exports = app
