const inputEl = document.getElementById("input");
const infotxtEL = document.getElementById("info-txt");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title")
const meaningEL = document.getElementById("meaning")
const audioEL = document.getElementById("audio")

async function fetchAIP(word) {

    try {
        infotxtEL.style.display = "block";

        infotxtEL.innerText = `Searching for the word "${word}"`
        
        titleEl.innerText = `loading...`
        
        meaningEL.innerText = `loading...`
        
        audioEL.style.display="none";
        
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        
        const result = await fetch(url).then((res) => res.json());
        
        console.log(result);
        
        infotxtEL.style.display = "none";
        
        meaningContainerEl.style.display = "block";
        
        audioEL.style.display="block";
        titleEl.innerText = result[0].word;
        `<br>`
        meaningEL.innerText = result[0].meanings[0].definitions[0].definition;
        
        audioEL.src = result[0].phonetics[0].audio;

    } catch (error) {
        console.log(error)
    }
}


inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAIP(e.target.value);
    }
});