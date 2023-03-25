function login() {
    const nameEl = document.querySelector("#name");
    const passEl = document.querySelector("#pass");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("passWord", passEl.value);
    window.location.href = "mainpage.html";
  }
  