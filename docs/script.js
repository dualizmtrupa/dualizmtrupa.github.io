const input = document.getElementById("password");
const button = document.getElementById("confirm")

function onClick() {
    let value = input.value;

    if (value === "książka") {
        window.location.replace("");
        return;
    } else if (value === "hubipedia"){
        window.location.replace("natalka/")
    }
}

button.addEventListener("click", onClick)