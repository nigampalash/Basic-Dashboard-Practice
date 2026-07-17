const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "☀ Light Mode";
    }else{
        btn.innerHTML = "🌙 Dark Mode";
    }
});

// Example: Update Users Count

let users = 1245;

setInterval(() => {
    users += Math.floor(Math.random() * 5);

    document.getElementById("users").innerHTML =
        users.toLocaleString();

},3000);
