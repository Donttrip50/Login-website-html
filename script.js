function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === "" || password === "") {
      alert("Please fill out all fields.");
      return;
  }

  alert(`Login attempt with Username: ${username}`);
}

function register() {
  alert("Registration functionality not implemented yet.");
}
