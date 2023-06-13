window.addEventListener("DOMContentLoaded", (event)=> {
    /* Task1 Создать массив «Список покупок». Каждый элемент массива
 является объектом, который содержит название продукта, необ-
 ходимое количество и куплен или нет. */
 var ShoppingList = [{
     name: "Milk",
     quantity: 2,
     buy: 'No',
 }, {
     name: "Chocolate 72%",
     quantity: 3,
     buy: 'No',
 }, {
     name: "White Wine",
     quantity: 1,
     buy: 'Yes',
 }, {
     name: "Bread",
     quantity: 4,
     buy: 'No',
 },
 {
     name: "Water",
     quantity: 5,
     buy: 'Yes',
 }, {
     name: "Apple",
     quantity: 10,
     buy: 'Yes',
 },
 ];
 console.log(AllList.call(ShoppingList));
 
//  addProduct.call(ShoppingList, {
//      name: "Chocolate 78%",
//      quantity: 1,
//      buy: 'No'
//  });
//  console.log(ShoppingList);
 
 buyProduct.call(ShoppingList, "Milk");
 console.log(ShoppingList);


});

/*Task 1*/

  /*Task 1.1
  Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.*/
function AllList() {
    let notBought = [];
    let bought = [];
    let result = [];
    this.forEach(function (item) {
        if (item.buy === 'No') {
            notBought.push(item)
        } else if (item.buy === 'Yes') {
            bought.push(item)
        }
    });
    return result.concat(notBought, bought);
};
/*Task 1.2 Добавление покупки в список.*/
function addProduct(options) {
    if (!options) return;
    const trueFalse = this.forEach(element => {
        if (element.name === options.name) return true;
    });
    switch (trueFalse) {
        case undefined:
            this.push(options);
            break;
        default:
            trueFalse.qty++;
    }
}
/*Task 1.3 Покупка продукта. Функция принимает название продукта
и отмечает его как купленный */
function buyProduct(prodName) {
    this.forEach(function (item) {
        if (item.name === prodName) {
            item.buy = 'Yes';
        };
    });
};