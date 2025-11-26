class Product{
    /**
     * 
     * @param {string} type 
     * @param {string} origin 
     * @param {number} price 
     */
    constructor(type, origin, price){

        if (typeof price !== 'number' || price < 0){
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


function getDiscountedExpensiveSummaries(products, discount){
    if (!Array.isArray(products)){
        throw new Error('input must be an array');
    }
    if (typeof discount !== 'number' || discount <0 || discount >100){
        throw new Element('discount must be a number between 0 and 100');
    }

    return products.map(p => {
        const finalPrice = p.isExpensive
        ? Number((p.price * (1 - discount / 100)).toFixed(2))
        : p.price;

        return {type: p.type, origin: p.origin, price: finalPrice, isExpensive: finalPrice > 1000};
    })
}

console.log(getDiscountedExpensiveSummaries(products, 10));

// Edge cases (should throw clear errors)
// getDiscountedExpensiveSummaries(null, 10);        // ❌
// getDiscountedExpensiveSummaries(products, 150);   // ❌
// getDiscountedExpensiveSummaries(products, "10");  // ❌