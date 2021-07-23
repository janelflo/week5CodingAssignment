//Class of Customer and their Order
class Customer {
	constructor(name, order) {
		this.name = name;
		this.order = order;
		this.customerOrder = [];
	}

	customersFinalOrder() {
		let finalOrder = this.customerOrder.push(this.name + ", " + this.order);
		return finalOrder;
	}

	describe() {
		return `${this.name} ordered: ${this.order}`;
	}
}

//Creating the menu of options to choose from
class Menu {
	constructor() {
		this.viewOrders = [];
		this.selectedOrder = null;
	}

	//Looping through the Menu Options
	startingPoint() {
		let selection = this.showMainMenuOptions();
		while (selection != 0) {
			switch (selection) {
				case "1":
					this.placeOrder();
					break;
				case "2":
					this.displayOrders();
					break;
				case "3":
					this.modifyOrder();
					break;
				default:
					selection = 0;
			}
			selection = this.showMainMenuOptions();
		}
		alert("Goodbye!");
	}

	//Menu Options on display for user
	showMainMenuOptions() {
		return prompt(`
		Welcome to the Coffee Bar! Please choose from the menu options below:
        0) Exit
        1) Place New Order
        2) View All Orders
        3) Modify an Order
        `);
	}

	//Sub Menu Options for Modifying an Order
	showModifyMenuOptions(orderInfo) {
		return prompt(`
        0) Back
        1) Delete Order
        2) Change Order
        ---------------
        ${orderInfo}
        `);
	}

	//2) View Current Orders - loop through array to display all orders(elements) in our array
	displayOrders() {
		let orderString = "";
		for (let i = 0; i < this.viewOrders.length; i++) {
			//This creates a blank string, iterates through our orders, grab each order, then get the name for that order and then add a new line so each order will show up with an index numbering them
			orderString +=
				i +
				") " +
				this.viewOrders[i].name +
				", " +
				this.viewOrders[i].order +
				"\n";
		}
		alert(orderString);
	}

	//1) Creating the prompt to "Place New Order" which will create an instance of my Customer class
	placeOrder() {
		let name = prompt("What is your name?");
		let order = prompt("What drink would you like to order?");
		this.viewOrders.push(new Customer(name, order));
	}

	//3) Sub menu to modify an Order (Element)
	modifyOrder() {
		let index = prompt("Enter the index of the order you wish to view:");
		//line below is user input validation
		if (index > -1 && index < this.viewOrders.length) {
			this.selectedOrder = this.viewOrders[index];
			let description =
				"Order Details: " +
				this.selectedOrder.name +
				", " +
				this.selectedOrder.order +
				"\n";

			let selection = this.showModifyMenuOptions(description);
			switch (selection) {
				case "1":
					this.deleteOrder();
					break;
				case "2":
					this.changeOrder();
			}
		}
	}
	//Submenu 1) delete Order
	deleteOrder() {
		let index = prompt(
			"Please confirm the index of the order you wish to delete:"
		);
		if (index > -1 && index < this.viewOrders.length) {
			this.viewOrders.splice(index, 1);
		}
	}

	//Submenu 2) Change order
	changeOrder() {
		let index = prompt(
			"Please confirm the index number you wish to modify:"
		);
		let changeOrder = prompt("Please enter the change to your order:");

		if (index > -1 && index < this.viewOrders.length) {
			this.selectedOrder = this.viewOrders[index];
			//I need to specify where in the array we are changing
			this.viewOrders[index].order = changeOrder;
		}
	}
}

//Create an Instance of Menu
let menu = new Menu();
menu.startingPoint();
