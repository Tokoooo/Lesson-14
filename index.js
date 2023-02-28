const massiveNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const massiveLength = massiveNum.length

let sum = massiveNum.reduce(add, 0);

function add(accumulator, a) {
    return accumulator + a
}

const dimension = sum / massiveLength

console.log(dimension)

const elementObj = [
    {
        name: "tornike",
        age: 19,
    },
    {
        name: "aleksandre",
        age: 21,
    },
    {
        name: "nika",
        age: 31,
    },
    {
        name: "giorgi",
        age: 41,
    },
    {
        name: "Vajiko",
        age: 57,
    },
    {
        name: "Nino",
        age: 61,
    },
];
console.log(elementObj);

// 3

const ProductName = {
    productTitle: "MacBook Pro 2021",
    productDescription: "RAM(32GB)",
    productPrice: 4500,
    shopAddresses: "40, Jiuli Shartava's street",
    productMemoryInGB: '500 SSD',
    productResolution: "1300 x 2400 pixels",
};


console.log('Product name is',ProductName["productTitle"]);
console.log('Product price is',ProductName["productPrice"]);
console.log('Product resolution is',ProductName["productResolution"]);
console.log('And you can buy it, at',ProductName["shopAddresses"]);