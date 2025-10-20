class Product{
    /**
     * 
     * @param {string} type 
     * @param {string} origin 
     * @param {number} price 
     */
    constructor(type, origin, price){

        if (typeof price !== 'number' || price <0){
            throw new Error('price must be a positive number');
        }
        this.type = type;
        this.origin = origin;
        this.price = price;
        this._isExpensive = price > 1000 ? true : false;
    }

    get isExpensive (){
        return this._isExpensive;
    }


    getInfo (){
        return `this is: ${this.type}, made from: ${this.origin}, price is: ${this.price}`;
    }

    printInfo(){
        console.log(this.getInfo());
    }

    applyDiscount(percent){
        if (typeof percent !== 'number') {
            throw new Error('input must be a number');
        } else if (percent <= 0 || percent > 100){
            throw new Error('discount must be an integer between 0 and 100 inclusive');
        } else {
            this.price = this.price * (1 - percent/100)
            return `${percent} discount applied! updated price is ${this.price}`;
        }
    }
}



p2 = new Product('book', 'china', 100);
p2.printInfo();
p2.applyDiscount(10);
p2.printInfo();

console.log(p2.isExpensive);

p1 = new Product('car', 'US', 10000);
p1.printInfo();
p1.applyDiscount(.5);
p1.printInfo();
console.log(p1.isExpensive);
