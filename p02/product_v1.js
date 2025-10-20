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
    }

    get isExpensive (){
        return this.price > 1000;
    }


    getInfo (){
        return `this is: ${this.type}, made in: ${this.origin}, price is: ${this.price}`;
    }

    printInfo(){
        console.log(this.getInfo());
    }

    applyDiscount(percent){
        if (typeof percent !== 'number') { // this might not be needed
            throw new Error('input must be a number');
        } else if (percent < 0 || percent > 100) {
            throw new Error('Discount must be between 0 and 100');
        } else{
            this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
            return `${percent} discount applied! updated price is ${this.price}`;
        }
    }
}



const item = new Product('camera', 'Germany', 1200);
console.log(item.isExpensive);
item.applyDiscount(20);
console.log(item.isExpensive);