const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const loginModel = require("./models/admin")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://raifashafi:raifashafi@cluster0.tznb7.mongodb.net/rescueDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/adminSignup", (req, res) => {
    let input = req.body
    let hashedpassword = bcrypt.hashSync(input.password, 10)
    input.password = hashedpassword
    console.log(input)
    let result = new loginModel(input)
    result.save()
    res.json({ "status": "success" })

})
// app.post("/adminSignin", (req, res) => {
//     let input = req.body
//     let result = loginModel.find({ username: input.username }).then(
//         (response) => {
//             if (response.length > 0) {
//                 const validator = bcrypt.compareSync(input.password, response[0].password)
//                 if (validator) {
//                     jwt.sign({ email: input.username }, "rescue-app", { expiresIn: "3d" },
//                         (error, token) => {
//                             if (error) {
//                                 res.json({ "status": "Invalid Authentication" })
//                             } else {
//                                 res.json({ "status": "success", "token": token })
//                             }
//                         }
//                     )
//                 } else {
//                     res.json({ "status": "Invalid Password" })
//                 }
//             } else {
//                 res.json({ "status": "Invalid Username" })
//             }
//         }
//     ).catch()
// })


app.listen(5050, () => {
    console.log("server started")
})