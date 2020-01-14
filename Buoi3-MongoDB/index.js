const mongoose = require('mongoose');
const dataJSON = require('../Buoi3-MongoDB/data.json');

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

//Create Schema
const cyberSoftSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: Array,
    price: Number,
    date: Date,
    isPublished: Boolean
})
//Create Model
const CyberSoft = mongoose.model('CyberSoft', cyberSoftSchema, "CyberSoft");

//Create Intance
// const cyberSoft_1 = new CyberSoft({
//     name: "FS08",
//     author: "CyberSoft",
//     tags: ["Nodejs", "ReactJs"],
//     date: Date.now(),
//     isPublished: false
// })

// cyberSoft_1.save()
// .then(res => {
//     console.log(res);
// })
// .catch(err => console.log(err))
//Intance được tạo ra từ model, nên intance sẽ có thêm các phương thức của mongo

// const createCyber = async(data) => {
//     await CyberSoft.create(data)
// }
// //For of
// createCybers = async(array) => {
//     for (const element of array) {
//        await createCyber(element);
//     }
// }
// createCybers(dataJSON)

//Promise all
// createCybers = async (array) => {
//     const processes = array.map(element => {
//         createCybers(element)
//     })
//     await Promise.all(processes); //Blue Brid
//     // await Promise.all([
//     //     createCybers(array[0]),
//     //     createCybers(array[1]),
//     //     createCybers(array[2]),
//     // ])
// }
// createCybers(dataJSON)

module.exports = {
    cyberSoftSchema,  CyberSoft
}