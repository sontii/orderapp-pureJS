import { foodData } from "./food.js"



function render(){
    const foodContainer = document.getElementById('food-container')
    let foodHtml = ''

    foodData.forEach(function(food){
        foodHtml += `
            <div>
                <img class="food-img" src="${food.image}" alt="food pic">
                <div class="food-title">
                    <span>
                        <p>${food.type}<p>
                        <p>${food.toppings}<p>
                        <p>$${food.price}<p>
                    </span>
                </div>
                <div class="food-add">
                    +
                </div>
            </div>
            <hr>
        `;

    })

    foodContainer.innerHTML = foodHtml

}


render()