function getInfo(){
    console.log(`type: ${this.type}, made in ${this.country}, price: ${this.price}`);
}

const car = {
    type: 'vehicle',
    country: 'us',
    price: 2599,
    getInfo: getInfo
}

const book = {
    type: 'book',
    country: 'china',
    price: 100,
    getInfo: getInfo
}

car.getInfo();
book.getInfo();

console.log('-------------------------------------------------');
class Product{
    constructor (type, countryOfOrigin, price) {
        this.type = type;
        this.countryOfOrigin = countryOfOrigin;
        this.price = price;
    }

    getInfo(){
        return `this is: ${this.type}, made from: ${this.countryOfOrigin}, price: ${this.price}`;
    }

    printInfo(){
        // console.log(`this is: ${this.type}, made from: ${this.countryOfOrigin}, price: ${this.price}`)
        console.log(this. getInfo())
    }
}

const p1 = new Product('sofa', 'us', 100);
const p2 = new Product('book', 'china', 2);
const p3 = new Product('car', 'us', 10000);

console.log(p1.getInfo());
console.log(p2.getInfo());

p3.printInfo();
