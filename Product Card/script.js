let data = [];
let container = document.querySelector(".container");

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
        data = res;

        data.forEach((val) => {
            container.innerHTML += `
        <div class="card">
        <img src="${val.image}" alt="Product image" />
        <div class="details">
            <span class="content name">${val.title}</span>
            <span class="content category">${val.category}</span>
            <span class="content price">Price : ${val.price}</span>
        </div>
        <div class="btnCont">
        <button class="btn">Buy</button>
    </div>
      </div>`
        })
    });
