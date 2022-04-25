let userData;


function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}


async function createAccount(createdUser){
    let res = await fetch('http://localhost:5229/User/AddUsers', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(createdUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
    console.log(data)
}
async function login(LoginUser){
    let res = await fetch('http://localhost:5229/User/Login', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(LoginUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
  return data;
}

async function GetLoggedInUserData(username){
    let res = await fetch(`http://localhost:5229/User/userbyusername/${username}`)
    let data = await res.json();
    userData = data;
    console.log(userData)
}

function LoggedInData(){
    return userData;
}


async function addBlogItems(blogItems){
    let res = await fetch('http://localhost:5229/blogitem/AddBlogItem', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItems)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
  console.log(data);
}

async function getBlogItems(){
    let res = await fetch('http://localhost:5229/blogitem/GetBlogItems');
    let data = await res.json();
    return data;
}

async function getBlogItemsByUserId(UserID){
    let res = await fetch(`http://localhost:5229/blogitem/GetItemsByUserID/${UserID}`);
    let data = await res.json();
    return data;
}

async function updateBlogItems(blogItems){
    let res = await fetch('http://localhost:5229/blogitem/UpdateBlogItem', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItems)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
  console.log(data);
}

async function getPublishedBlogItem(){
    let res = await fetch('http://localhost:5229/blogitem/GetPublishedItems');
    let data = res.json();
    return data;
}
export {checkToken, createAccount, login, GetLoggedInUserData, LoggedInData, addBlogItems, getBlogItems, getBlogItemsByUserId, updateBlogItems, getPublishedBlogItem};