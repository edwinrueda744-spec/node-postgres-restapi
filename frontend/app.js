const API = "http://localhost:3000/users";

const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email})
  });

  form.reset();

  getUsers();
});

async function getUsers(){

  const response = await fetch(API);

  const users = await response.json();

  const usersDiv = document.getElementById("users");

  usersDiv.innerHTML = "";

  users.forEach(user => {

    usersDiv.innerHTML += `
      <div class="user">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
}

getUsers();