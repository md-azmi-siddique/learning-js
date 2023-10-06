// //PUT METHOD
document.getElementById('button').addEventListener('click', function(){
  const titleInput = document.getElementById('title').value
  const bodyInput = document.getElementById('body').value
  //console.log(titleInput, bodyInput)
  const post = {
    title : titleInput,
    body : bodyInput 
  }
  postToServer(post);

  document.getElementById('title').value = ''
  document.getElementById('body').value = ''
})

const postToServer = (postInfo) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    // .then((data) => fetchData()); 
    .then((data) => console.log(data)); 
};

// const fetchData = () =>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) =>  displayUser(data));
// }


// const displayUser = (data) => {
//   console.log(data);
//   const userName = data.map((s) => s.title); //pick only username through map function
//   console.log(userName); //printing map function generated array
//   for (let index = 0; index < userName.length; index++) {
//     //loop through new array
//     const element = userName[index];
//     const li = document.createElement("li"); //create new html element with js
//     li.innerText = element; //inserting new element in the html tag
//     const ul = document.getElementById("userName"); //purasing element from html
//     ul.appendChild(li); //append chile => cheating the child of 'ul' tag
//   }
// };

//========================================================================================//
//========================================================================================//
//========================================================================================//
//========================================================================================//

// GET METHOD
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) =>  displayUser(data));

// const displayUser = (users) => {
//   //console.log(users);
//   const userName = users.map((s) => s.username); //pick only username through map function
//   console.log(userName); //printing map function generated array
//   for (let index = 0; index < userName.length; index++) {
//     //loop through new array
//     const element = userName[index];
//     const li = document.createElement("li"); //create new html element with js
//     li.innerText = element; //inserting new element in the html tag
//     const ul = document.getElementById("userName"); //purasing element from html
//     ul.appendChild(li); //append chile => cheating the child of 'ul' tag
//   }
// };

