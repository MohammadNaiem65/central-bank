const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    const email = document.getElementById("user-email");
    const password = document.getElementById("user-password");
    if (email.value == "rich@guy.com" && password.value == "rich.guy") {
        window.location.href = "home-page.html";
    }
    else {
        alert("Please provide valid user info.")
    }
})