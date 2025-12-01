const data = ["natalka", "hubi", "słoma", "olaf", "rita", "skurwiałe szczenie"];

const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

function getFilteredResults(value) {
    let lower = value.toLowerCase();
    let filtered = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(lower)) {
            filtered.push(data[i]);
        }
    }

    return filtered;
}

function showSuggestions(filteredList) {
    suggestions.innerHTML = "";

    for (let i = 0; i < filteredList.length; i++) {
        let item = document.createElement("div");
        item.textContent = filteredList[i];

        item.onclick = function () {
            input.value = filteredList[i];
            hideSuggestions();
            // search();
        };

        suggestions.appendChild(item);
    }

    if (filteredList.length > 0) {
        suggestions.style.display = "block";
    } else {
        suggestions.style.display = "none";
    }
}

function hideSuggestions() {
    suggestions.style.display = "none";
}

function onInputChange() {
    let value = input.value;

    if (value === "") {
        hideSuggestions();
        return;
    }

    let filtered = getFilteredResults(value);
    showSuggestions(filtered);
}


input.addEventListener("input", onInputChange)
