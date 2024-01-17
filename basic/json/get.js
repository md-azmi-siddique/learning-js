async function run() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  displayUser(data);
  console.log(data);
}

run();

//display on the page

const displayUser = (users) => {
  //console.log(users);
  const userName = users.map(s => s.name); //pick only username through map function
  console.log(userName); //printing map function generated array
  for (let index = 0; index < userName.length; index++) { //loop through new array
    const element = userName[index];
    const li = document.createElement("li"); //create new html element with js
    li.innerText = element; //inserting new element in the html tag
    const ul = document.getElementById("userName"); //purasing element from html
    ul.appendChild(li); //append chile => cheating the child of 'ul' tag
  }
};
