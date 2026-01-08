class DishMissingError extends Error { name = "DishNotFoundError"; }
class InvalidOrderError extends Error { name = "InvalidOrderError"; }


class Dish {
    constructor(name, price) {
        if (!name || typeof price !== 'number' || price <= 0) 
            throw new Error("Dish data is incorrect");
        this.name = name;
        this.price = price;
    }
}

class Appetizer extends Dish {}
class Entree extends Dish {}
class Dessert extends Dish {}

class Menu {
    #dishes = new Map(); 

    addDish(dish) { this.#dishes.set(dish.name, dish); }
    removeDish(name) { this.#dishes.delete(name); }
    getDish(name) { return this.#dishes.get(name); }
    viewMenu() { return Array.from(this.#dishes.values()); }

    increasePrice(name, percent) {
        const dish = this.getDish(name);
        if (dish) dish.price += dish.price * (percent / 100);
    }
}

class AppetizersMenu extends Menu {}
class EntreesMenu extends Menu {}
class DessertsMenu extends Menu {}

class Customer {
    constructor(name, contact) {
      
        if (!name) throw new Error("invalid customer data");
        this.name = name;
        this.contactInfo = contact;
        this.orderHistory = [];
    }

    placeOrder(order) {
        this.orderHistory.push(order);
        console.log(`[ORDER PLACED] ${this.name}: Total ${order.getTotal()}֏`);
    }
}

class Order {
    #totalPrice = 0; 

    constructor(customer) {
        this.customer = customer;
        this.dishes = [];
    }

    addDish(dishName, menus) {
        let foundDish = null;
        for (const menu of menus) {
            if (menu.getDish(dishName)) {
                foundDish = menu.getDish(dishName);
                break;
            }
        }

        if (!foundDish) throw new DishMissingError(`${dishName} Dish not found`);
        
        this.dishes.push(foundDish);
        this.#totalPrice += foundDish.price;
    }

    getTotal() { return this.#totalPrice; }
    applyDiscount(amount) { this.#totalPrice -= amount; }
}

function withDiscount(order) {
    const total = order.getTotal();
    if (total > 5000) {
        console.log(">>> 10% discount applied (Total > 5000)");
        order.applyDiscount(total * 0.1);
    }
}

