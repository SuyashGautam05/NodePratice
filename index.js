const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


//Rest Api
app.get('/api/users', (req, res)=>{
    return res.json(users);
})

app.post("/api/users", (req,res)=>{
    //create new user
    return res.json({ status: "pending"})
})


app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
}).patch((req,res)=>{
    //Edit the user with id
    return res.json({status: "pending"});
})
.delete((req,res)=>{
    //delete the user with id
    return res.json({status: "pending"});
});


// app.get('/api/users/:id', (req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id === id);
//     return res.json(user);
// });

// app.patch("/api/users/:id", (req,res)=>{
// //Edit the user with id
// return res.json({ status: "pending"})
// })

// app.delete("/api/users/:id", (req,res)=>{
//     //delete the user with id
//     return res.json({ status: "pending"})
// })


//Routes
app.get('/users', (req,res)=>{
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})




app.listen(PORT, () =>{
    console.log(`Server Started at PORT: ${PORT}`)
})