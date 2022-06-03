// Write your code here


class Breakfast {
    constructor(food, drinks) {
        this.food = food
        this.drink = drinks

    }
}
let bfast = new Breakfast('eggs', 'juice')
class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;

    }
}
let newlunch = new Lunch('side salad', 'brocoli cheddar soup', 'iced tea')

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        let _dessert = dessert

    }
}
let dinner = new Dinner('balsamic salad', 'consomme', 'filet mignon')