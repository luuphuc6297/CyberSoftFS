const mongoose = require('mongoose');
const dataJSON = require('../Buoi3-MongoDB/data.json');
const {CyberSoft} = require('../Buoi3-MongoDB/index')

// mongoose.connect("mongodb+srv://luuphuc:luuphuc@hgbocluster-iirfd.mongodb.net/test?retryWrites=true&w=majority", 
// {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// })
mongoose.connect("mongodb://localhost:27017/CyberSoft", 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("CONNECT_MONGODB_SUCCESSFUL"))
.catch(err => console.log(err))


// CyberSoft
// // .find({price: {$in: [10, 15, 20]}})
// .find()
// .and([{author: "Mosh"}, {price: 10}])
// .select("name price -_id")
// // .limit(5)
// // .countDocuments()
// .then(console.log)
// .catch(console.log)
CyberSoft
// .find({name: /^Node/})
// .find({name: /^node/i}) //i: Không phân biệt hoa thường

.then(console.log())
