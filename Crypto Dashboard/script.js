
let data = [];
let cardCont = document.querySelector(".cardCont");


document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
        .then((res) => res.json())
        .then((res) => {
            data = res;
            // console.log(res);

            for (let i = 0; i < data.length; i++) {
                cardCont.innerHTML += `<div class="card">
            <div class="img">
                <img src="${data[i].image}" alt="image">
            </div>

            <div class="detail">
                <div class="data">
                    <span id="criptoName">${data[i].name}</span>
                    <span id="criptoShortName">${data[i].id}</span>
                </div>
                <div class="data">
                    <span id="price">${data[i].current_price}</span>
                    <span id="percent">${data[i].market_cap_change_percentage_24h}</span>
                </div>
            </div>`;

            }
        });
});

