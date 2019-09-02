Task :1

function buyBurger(burgerName,burgerPrice,burgerToping,burgerDiscount,burgerOffer,burgerFlavour){
    return{
        "name":burgerName,
        "price":burgerPrice,
        "toping":burgerToping,
        "discount":burgerDiscount,
        "offer":burgerOffer,
        "flavour":burgerFlavour,
        get:function(){
            console.log(`Hey!! I got a gift from${this.name}`);
        },
        greet:function(){
            console.log(`There is an amazing offer at ${this.name}`);
        }

    }
};
let mine = buyBurger("King",600,"Mionese","2%","1 box French Fries","Tandoori Chicken");

Task :2


function visitOutlet(outletName, outletBranch, clothesPrint, clothesColor, clothesDiscount) {
    return {
        "name": outletName,
        "branch": outletBranch,
        "print": clothesPrint,
        "color": clothesColor,
        "discount": clothesDiscount,
        get: function () {
            console.log(`Good Prints at ${this.name}`);
        },
        greet: function () {
            console.log(`Summer Offer has Started at ${this.name}`);
        }

    }
};
let fabric = visitOutlet("Sapphire","DHA","Floral","Multi","9%");  

Task : 3

function countWatch(productName,productColor,productPrice,productDiscount){
    return{
        "name":productName,
        "color":productColor,
        "price":productPrice,
        "Discount":productDiscount,
        wear:function(){
            console.log(`Always have a smart watch of ${this.name}`);
        },
        offer:function(){
            console.log(`Buy One Get One Free at ${this.name}`);
        }
    }
};
let timer = countWatch("rado","black","17000","29%");
