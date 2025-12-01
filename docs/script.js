const input = document.getElementById("password");
const button = document.getElementById("confirm")

function onClick() {
    let value = input.value;

    if (value === "książka") {
        window.location.replace("rozdzial/");
        return;
    } else if (value === "hubipedia"){
        window.location.replace("hubipedia/")
    }
}


button.addEventListener("click", onClick)
