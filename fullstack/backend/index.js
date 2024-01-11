import  Express  from "express";
const App = Express();

App.get('/',(req,res)=>{
    res.send("welcome to my website from server side")
})

App.get('/api/jokes',(req,res)=>{
    const jokes = [
      {
        id: 1,
        title: "joke-1",
        description: "this is joke one",
      },
      {
        id: 2,
        title: "joke-2",
        description: "this is joke two",
      },
      {
        id: 3,
        title: "joke-3",
        description: "this is joke three",
      },
      {
        id: 4,
        title: "joke-4",
        description: "this is joke four",
      },
      {
        id: 1,
        title: "joke-5",
        description: "this is joke five",
      },
    ];
    res.send(jokes)
})

App.listen(8080, console.log("Server is Listining"))

