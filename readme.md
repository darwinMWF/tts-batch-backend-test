instruction
step -1 git clone with URL of repository where you want
step -2 navigate to the folder in the terminal and type npm install
step -3 Type npm start so your backend is ready to run into your local system
step -4 Make react project
step -5 Make a form and log in (method: post) using any email and password
[{
    id: 1,
    name: "mukesh",
    email: "mpprajapat459@gmail.com",
    password: "aty@9898",
  },
  {
    id: 2,
    name: "rajesh",
    email: "npprajapat459@gmail.com",
    password: "aty@9090",
  },
  {
    id: 3,
    name: "harish",
    email: "oklove459@gmail.com",
    password: "aty@1004",
  } ]
API for the above step: "http://localhost:3000/login"
step -6 From the above step you will get a token using that token you need to again call an API 
: "http://localhost:3000/data" {note here token should append to header with Authorization key}
and token should append like this  Authorization: "Bearer token"
step-7: after getting data you need to show your data in the form of a table to route /frontendData in react project


                                    <-- best of luck ---->

