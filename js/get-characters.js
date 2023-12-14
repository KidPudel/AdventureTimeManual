async function getCharacters() {
    document.getElementById("get-characters-btn").style.borderRadius = "30px";

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    await fetch("http://127.0.0.1:8000/at_api/get_characters/", options).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {
        const template = document.getElementById("character-template")
        if ("content" in template) {
            for (const character of json["characters"]) {
                const characterClone = template.content.cloneNode(true);
                const characterSpace = characterClone.querySelector(".character-space");
                const characterImg = characterSpace.querySelector(".character-img");
                const characterInfo = characterSpace.querySelector(".character-info");
                const characterName = characterInfo.querySelector(".character-name");
                const characterDescription = characterInfo.querySelector(".character-description");

                characterImg.src = character["image"];
                characterName.textContent = character["real_name"] != null ? character["name"] + " (" + character["real_name"] + ")" : character["name"];
                characterDescription.textContent = character["short_description"];
                document.getElementById("manual").appendChild(characterClone);
            }
        }
    })
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("get-characters-btn").style.borderRadius = "10px";
}

document.getElementById("get-characters-btn").onclick = getCharacters;