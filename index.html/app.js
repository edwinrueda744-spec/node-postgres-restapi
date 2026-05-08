fetch("http://127.0.0.1:3000/users")
  .then(response => response.json())
  .then(data => {

    console.log(data);

    const users = document.getElementById("users");

    users.innerHTML = "";

    data.forEach(user => {

      const li = document.createElement("li");

      li.textContent = `${user.name} - ${user.email}`;

      users.appendChild(li);

    });

  })
  .catch(error => console.log(error));