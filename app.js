//Functions
function deliverPost(){
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: {
            userid: document.getElementById(`userID`).value,
            id: document.getElementById(`actualID`).value,//Keep getting a 101 value here for some reason. 
            title: document.getElementById(`actualTitle`).value,//Used debugger cant figure out why its returning 101 for "actualID"
            body: document.getElementById(`actualBody`).value//as a value no matter what I input into the corresponding text box
        }
    }).then(dpSuccess).catch(dpFail);
}

function deliverPatch(){
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PATCH",
        data: {
            userid: document.getElementById(`userID`).value,
            id: document.getElementById(`actualID`).value,
            title: document.getElementById(`actualTitle`).value,
            body: document.getElementById(`actualBody`).value
        }
    }).then(patchWin).catch(patchLose);
}

function deliverDelete(){
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "DELETE",
        data: {
            userid: document.getElementById(`userID`).value,
            id: document.getElementById(`actualID`).value,
            title: document.getElementById(`actualTitle`).value,
            body: document.getElementById(`actualBody`).value
        }
    }).then(deleteWin).catch(deleteLose);
}

function deliverGet(){
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
    }).then(getSuccess).catch(getFail);
}

function getSuccess(response){
    let getData = response.data;
    for(get of getData){
        divCrate.insertAdjacentHTML(`beforeend`,`<h1>${get.userId}</h1>`)
        divCrate.insertAdjacentHTML(`beforeend`,`<h1>${get.id}</h1>`)
        divCrate.insertAdjacentHTML(`beforeend`,`<h1>${get.title}</h1>`)
        divCrate.insertAdjacentHTML(`beforeend`,`<h1>${get.body}</h1>`);
    }
}

function getFail(error){
    divCrate.insertAdjacentHTML(`beforebegin`,`<h1>GET FAILED!</h1>`)
    console.log(error);
}


function deleteWin(response){
    let removal = response.data;
    divCrate.insertAdjacentHTML(`beforeend`, `<h1>Deletion successful</h1>`);
    console.log(response.data);
}


function deleteLose(error){
    divCrate.insertAdjacentHTML(`beforeend`,`<h1>DELETE ERROR!</h1>`);
    console.log(error);
}


function patchWin(response){
    let update = response.data;
    divCrate.insertAdjacentHTML(`beforeend`, `<h1>Patch successful</h1>`);
    console.log(response.data);
}


function patchLose(error){
    divCrate.insertAdjacentHTML(`beforeend`,`<h1>PATCH ERROR!</h1>`)
    console.log(error);
}


function dpSuccess(response){
    let delivery = response.data;
    divCrate.insertAdjacentHTML(`beforeend`, `<h1>SUCCESS!!!</h1>`);
    console.log(response.data);
}

function dpFail(error){
    divCrate.insertAdjacentHTML(`beforeend`,`<h1>FAILURE!!</h1>`);
    console.log(error);
}


//Constants
const divCrate = document.getElementById(`divCrate`);

//Event Listeners
document.getElementById(`postButton`).addEventListener(`click`,deliverPost);
document.getElementById(`patchButton`).addEventListener(`click`,deliverPatch);
document.getElementById(`deleteButton`).addEventListener(`click`,deliverDelete);
document.getElementById(`getButton`).addEventListener(`click`,deliverGet);