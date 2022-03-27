// This script was generated and reflects raw data. It is recommended to change this code to your required logic

const swaggerApi = require('./swaggerApi.js')();

swaggerApi.$.getHost = () => {
    return "localhost:8080"
}
swaggerApi.$.getBasePath = () => {
    //return `<enter your code here>`
    return "/"
    throw new Error("Please implement the supplied 'swaggerApi.$.getBasePath()' function.");
}

load.initialize("Initialize", async function () {
    load.WebRequest.defaults.returnBody = true;
    load.WebRequest.defaults.headers = {
            "User-Agent": "DevWeb vuser"
    };    
});

load.action("Action", async function () {
    let T00 = new load.Transaction("getUsers");
    
    let getUsers = swaggerApi.listUsersUsingGET();
    getUsers.extractors = [new load.JsonPathExtractor("users", "$.[*].username", true), new load.JsonPathExtractor("userId", "$.[*].id", true) ]; 
    let list = await getUsers.send();

    load.log(list.duration);

    let uname = `user${load.utils.randomString(20)}`;

    let user = {
        "createAccountInAOS": false,
        "email": `${uname}@my.org`,
        "firstName": "test01",
        "lastName": "DevWeb",
        "password": "Phoenix2022",
        "role": "customer",
        "username": uname
      };


    let createNewUser = swaggerApi.createUserUsingPOST_1(user);
    await createNewUser.send();
   

    let userDetails = swaggerApi.getUserUsingGET(uname);
    let details = await userDetails.send();


    let adminLogin = swaggerApi.loginUserUsingPOST_1({"username": "admin", "password": "demo" });
    adminLogin.extractors = new load.JsonPathExtractor("token","$.token");
    let loginData = await adminLogin.send();

    let deleteUser = swaggerApi.deleteUserUsingDELETE_1(`Bearer ${loginData.extractors['token']}`,uname);

    await deleteUser.send();

    await getUsers.send();

});

load.finalize("Finalize", async function () {
});
