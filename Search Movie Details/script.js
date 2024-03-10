let main = document.querySelector(".main");
let inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
let APIKey = "17f8307a";
// let movieName;

btn.addEventListener("click", () => {
    main.innerHTML=``;
    let movieName = inp.value;
    movieName ? getData(movieName):main.innerHTML=`  <p class="EmptyErr">Enter Valid Movie Name</p>`;
})

const getData = async (movie) => {
    try {
        let data = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`);
        let jsonData = await data.json();
        console.log(jsonData);


        document.querySelector(".main").innerHTML = "";
        inp.value = "";


        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
    <div class="left">
    <img src="${jsonData.Poster} " alt="">
</div>
<div class="right">
    <p class="name">Movie : ${jsonData.Title}</p>
    <p class="Released">Released : ${jsonData.Released}</p>
    <p class="type">Genre : ${jsonData.Genre}</p>
    <p class="actore">Actors : ${jsonData.Actors}</p>
    <p class="description">Director : ${jsonData.Director}</p>
    <p class="Plot">Plot : ${jsonData.Plot}</p>
</div>
    `
        main.appendChild(card);
    } catch (error) {
        main.innerHTML = `
        <p class="EmptyErr">Movie not found! Please try again leter</p>
        `;
    }

}

