import { foodData } from "./food.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let orderArr = [];
let orderName = ''

const modalWrapper = document.getElementById("modal-wrapper")
const foodWrapper = document.getElementById("food-wrapper")
const order = document.getElementById("order")

document.body.addEventListener('click', function(e){
    if (e.target.dataset.type) {
            if (modalWrapper.style.display === "") {
                createOrder(e.target.dataset.type);
            }
		} else if (e.target.dataset.remove) {
			if (modalWrapper.style.display === "") {
				removeOrder(e.target.dataset.remove);
			}
		} else if (e.target.id === "order-btn") {
			handleOrderClick();
		} else if (e.target.id === "pay-btn") {
			handlePayClick();
		}
})


function handleOrderClick(){

    modalWrapper.style.display = "flex";
    foodWrapper.style.background =
			"linear-gradient(180deg, rgba(247,247,249,1) 0%, rgba(171,171,171,1) 37%)";
    order.style.background =
			"linear-gradient(0deg, rgba(247,247,249,1) 0%, rgba(171,171,171,1) 60%)";
}

function handlePayClick() {
    orderName = document.getElementById("order-name").value;
    order.style.display = "none";
	modalWrapper.style.display = "none";
	foodWrapper.style.background = "white"
	order.style.background = "white"

    document.getElementById("thank-wrapper").style.display = "flex";
    document.getElementById('thank-inner').innerHTML = `Thanks, ${orderName}! Your order is on its way!`

}


function createOrder(foodType) {  
    const selectedFood = foodData.filter(food => food.type === foodType)[0]

    orderArr.push({
			type: selectedFood.type,
			price: selectedFood.price,
			uuid: uuidv4()
		});
    renderOrder()
    
}

function removeOrder(uuid) {
	orderArr = orderArr.filter(food => food.uuid !== uuid);
    renderOrder()
}

function renderOrder(){
    const orderItems = document.getElementById("order-items");
	orderItems.innerHTML = ''	
    let itemsHtml = '';
    let totalPrice = 0

		orderArr.forEach(function(food) {
            totalPrice += food.price
			itemsHtml += `
        <div class="order-item">
            <div class="order-type food food-type">${food.type}</div>
            <div class="order-remove food food-toppings" data-remove="${food.uuid}">remove</div>
            <div class="order-price food food-price">$${food.price}</div>
        </div>
        `;
		})
    
    orderItems.innerHTML = itemsHtml + `
        <hr class="food-total">
        <div class="total food">
        <span>Total price</span>
        <span class="grand-total">$${totalPrice}</span>
        </div>
        `
    
    
    if (orderArr.length > 0) {
		order.style.display = "flex";
	} else if (orderArr.length === 0) {
		order.style.display = "none";
	}
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
            <hr class="food-hr">
        `;

    })

    foodWrapper.innerHTML = foodHtml;

}


render()