const urlBean = "https://localhost:5001/api/beanvariety/";
const urlCoffee = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(urlBean).then(resp => resp.json());
}

const coffeeButton = document.querySelector("#run-coffee");
coffeeButton.addEventListener("click", () => {
    getAllCoffee()
        .then(coffee => {
            console.log(coffee);
        })
});

function getAllCoffee() {
    return fetch(urlCoffee).then(resp => resp.json());
}