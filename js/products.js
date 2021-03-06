
/* exported productList, clearProductsData */
'use strict';

class Product {
    constructor(name, image) {
        this.name = name;
        this.image = './image/' + image;
        this.views = 0;
        this.clicks = 0;
        this.percentage = 0;
    }
}

const productData = window.localStorage.getItem('productList');

window.onbeforeunload = () => {
    window.localStorage.setItem('productList', JSON.stringify(productList));
};


let productList;
if(productData) {
    productList = JSON.parse(productData);
}
else {
    initializeProducts();
}



function initializeProducts() {
    
    const bag = new Product('R2D2 Rolling Suitcase', 'bag.jpg');
    const banana = new Product('Banana Slicer', 'banana.jpg');
    const bathroom = new Product('Bathroom Tablet Pedestal', 'bathroom.jpg');
    const boots = new Product('Yellow Boots', 'boots.jpg');
    const breakfast = new Product('All-in-One Breakfast Maker', 'breakfast.jpg');
    const bubblegum = new Product('Meatball Bubblegum', 'bubblegum.jpg');
    const chair = new Product('Red Chair', 'chair.jpg');
    const cthulhu = new Product('C\'thulu Figurine', 'cthulhu.jpg');
    const dogDuck = new Product('Duck-shaped Muzzle', 'dog-duck.jpg');
    const dragon = new Product('Dragon Meat', 'dragon.jpg');
    const pen = new Product('Utensil Pen', 'pen.jpg');
    const petSweep = new Product('Pet Sweep', 'pet-sweep.jpg');
    const scissors = new Product('Pizza Scissors', 'scissors.jpg');
    const shark = new Product('Shark Sleeping Bag', 'shark.jpg');
    const sweep = new Product('Baby Sweep', 'sweep.png');
    const tauntaun = new Product('Tauntaun Sleeping Bag', 'tauntaun.jpg');
    const unicorn = new Product('Unicorn Meat', 'unicorn.jpg');
    const usb = new Product('Tentacle USB', 'usb.gif');
    const waterCan = new Product('Self Watering Can', 'water-can.jpg');
    const wineGlass = new Product('Holey Wine Glass', 'wine-glass.jpg');
    
    productList = [
        bag,
        banana,
        bathroom,
        boots,
        breakfast,
        bubblegum,
        chair,
        cthulhu,
        dogDuck,
        dragon,
        pen,
        petSweep,
        scissors,
        shark,
        sweep,
        tauntaun,
        unicorn,
        usb,
        waterCan,
        wineGlass
    ];
}


function clearProductsData() {
    window.localStorage.clear('products');
    initializeProducts();
}