const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей
//const parts = order.split(";");
//console.log(parts);
//const orderNumber = parts[0].split("#")[1];
//const date = parts[1].split("=")[1].split(" ")[0].split("-").reverse().join(".");
//const hours = parts[1].split(" ")[2].split(":")[0];
//const minutes = parts[1].split(":")[1];
//const amount = parts[2].split("=")[1];
//const convertstring = "15.3";
//const num = convertstring;
//const rounded = Math.ceil(num);
//{
//  console.log(`Заказ № ${orderNumber} от ${date} ${hours}:${minutes} на сумму ${rounded} рублей`);
//}

const startOrder = order.indexOf("#");
const endOrder = order.indexOf(";");
const orderNumber = order.slice(6, 10);
const startDate = order.indexOf("date=");
const dateNumber = order.slice(17, 27).split("-").reverse().join("/");
const startHours = order.indexOf(" ");
const endHours = order.indexOf(";");
const hoursNumber = order.slice(28, 36);
const startAmount = order.indexOf("amount=");
const endAmount = order.indexOf("3", startAmount);
const amountNumber = order.slice(startAmount + 7);
const convertstring = Number("15.3");
const num = convertstring;
const rounded = Math.ceil(num);
console.log(`Заказ № ${orderNumber} ${dateNumber} ${hoursNumber} ${rounded}`);
