import { PizzaShop } from './PizzaShop';

const myPizzaShop = new PizzaShop();



myPizzaShop.on("order",(size, flavor)=>{
    console.log(`Order details ${size} with the topper ${flavor}`);
    
});

myPizzaShop.order("large", "chilly");
myPizzaShop.displayOrderNumber();