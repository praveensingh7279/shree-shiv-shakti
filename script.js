const menuData = {
    Burger: {
        image: "images/burger.png",
        description: "Fresh bun with crispy veg patty, fresh vegetables and our special signature sauces.",
        options: [
            "Veg Burger — ₹99",
            "Cheese Burger — ₹129",
            "Paneer Burger — ₹149"
        ]
    },

    Pizza: {
        image: "images/pizza.png",
        description: "Freshly baked pizza loaded with cheese and delicious toppings.",
        options: [
            "Margherita — ₹149",
            "Cheese Pizza — ₹179",
            "Paneer Pizza — ₹199"
        ]
    },

    Sandwich: {
        image: "images/sandwich.png",
        description: "Grilled sandwiches made with fresh vegetables and premium cheese.",
        options: [
            "Veg Sandwich — ₹89",
            "Cheese Sandwich — ₹109",
            "Grilled Sandwich — ₹129"
        ]
    },

    Fries: {
        image: "images/fries.png",
        description: "Hot and crispy fries served with delicious seasonings.",
        options: [
            "Regular Fries — ₹79",
            "Peri Peri Fries — ₹99",
            "Cheese Fries — ₹119"
        ]
    },

    Momos: {
        image: "images/momos.png",
        description: "Fresh steamed and fried momos served with our special spicy chutney.",
        options: [
            "Steamed Momos — ₹99",
            "Fried Momos — ₹119",
            "Cheese Momos — ₹139"
        ]
    }
};

const modal = document.getElementById("menuModal");
const title = document.getElementById("modalTitle");
const image = document.getElementById("modalImage");
const list = document.getElementById("modalList");
const description = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".menu-btn").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const item = this.parentElement.querySelector("h3").innerText;

        const food = menuData[item];

        title.innerText = item;

        image.src = food.image;

        description.innerText = food.description;

        list.innerHTML = "";

        food.options.forEach(option=>{

            const li=document.createElement("li");

            li.innerText="✔ " + option;

            list.appendChild(li);

        });

        modal.style.display="block";

    });

});

closeBtn.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(event){

    if(event.target==modal){

        modal.style.display="none";

    }

}