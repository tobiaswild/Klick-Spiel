var points = 0;
var increment = 1;
var shopCount = 10;

const counterEle = document.querySelector('#counter');
const shopCountEle = document.querySelector('#shopCount');

function shop() {
    if (points >= shopCount) {
        increment *= 2;
        points -= shopCount;
        shopCount *= 4;
        counterEle.innerHTML = points;
        shopCountEle.innerHTML = shopCount;
        alert('Upgrade! ' + increment + ' pro Click!');
    } else {
        alert('Nicht genug Punkte!');
    }
}

function test() {
    points += increment;
    counterEle.innerHTML = points;
}