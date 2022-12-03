import { foodData } from "./food.js"

let orderArr = []

document.body.addEventListener('click', function(e){
    if(e.target.dataset.type) {
        createOrder(e.target.dataset.type)
    }
    else if (e.target.dataset.remove){
        removeOrder(e.target.dataset.remove);
    }
})

function createOrder(foodType) {
    orderArr.push(foodData.filter((food) => food.type === foodType)); 
}

function removeOrder(foodType) {
	orderArr.push(foodData.filter((food) => food.type === foodType));
}

function renderOrder(){
    const orderItems = document.getElementById("order-items");
		let items = "";

		orderArr.forEach(function(food) {
			items += `
        <div>
            <span class="food food-type">${food.type}</span>
            <span class="food food-toppings" data-remove="${food.type}">remove</span>
            <span class="food food-price">$${food.price}</span>
        </div>
        `;
		});

    orderItems.innerHTML = items 
}

function render(){
    const foodWrapper = document.getElementById('food-wrapper')
    let foodHtml = ''

    foodData.forEach(function(food){
        foodHtml += `
            <div class="food-container" id=food-container>
                <div class="food-img-wrap">
                    <img class="food-img" src="${food.image}" alt="food pic">
                </div>    
                <div class="food-title">
                        <div class="food food-type">${food.type}</div>
                        <div class="food food-toppings">${food.toppings}</div>
                        <div class="food food-price">$${food.price}</div>  
                </div>
                <div class="food-add" data-type="${food.type}">
                    +
                </div>
            </div>
            <hr>
        `;

    })

    foodWrapper.innerHTML = foodHtml;

}


render()