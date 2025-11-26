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



p1 = new Product('cloth', 'China', 200);
p2 = new Product('car', 'Germany', 60000);
p3 = new Product('shoe', 'Cambodia', 200);
p4 = new Product('jacket', 'Italy', 1000);
p5 = new Product('heavy machine', 'China', 2000000);

const products = [p1,p2,p3,p4,p5];
console.log(products);

function getExpensiveProducts(products) {
  return products.filter(p => p.isExpensive);
}
console.log(getExpensiveProducts(products));

function applyDiscountToAllInPlace(products, percent) {
    if (!Array.isArray(products)) {
        throw new Error('Expect input to be an array');
    } else { 
        products.forEach(p => {p.applyDiscount(percent);
    })};
}
// applyDiscountToAllInPlace(products, 10);
// console.log(products);

applyDiscountToAllInPlace(products, 10);

products
  .filter(p => p.isExpensive === true)
  .forEach(p =>p.printInfo());
