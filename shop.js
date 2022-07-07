let shop = [{
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"
}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"
}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"
}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 3000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}, {
    "price": 1000000,
    "cost": 2000000,
    "car": "bren",
    "licanse": "กข 1234",
    "model": "DMAX",
    "BRAND": "ISUSU",
    "cstegory": "truck"

}]
let sumCost = 0;
for (let i = 0; i < shop.length; i++) {
    sumCost += shop[i].cost
}
console.log("sumCost: " + sumCost);
let sumPrice = 0;
for (let i = 0; i < shop.length; i++) {
    sumPrice += shop[i].price
}
console.log("sumPrice: " + sumPrice)
console.log("price avg: " + sumPrice / shop.length)
console.log("Cost avg: " + sumCost / shop.length)

for (let i = 0; i < shop.length; i++) {
    console.log((i + 1) + ". Car: " + shop[i].car + " || price sale 10%: " + shop[i].price * 0.9)
}

console.log("first car and  last car: " + (shop[0].price + shop[shop.length - 1].price))