const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей
const parts = order.split(";");
console.log(parts);
const orderNumber = parts[0].split("#")[1];
const date = parts[1].split("=")[1].split(" ")[0].split("-").reverse().join(".");
const hours = parts[1].split(" ")[2].split(":")[0];
const minutes = parts[1].split(":")[1];
const amount = parts[2].split("=")[1];
const convertstring = "15.3";
const num = convertstring;
const rounded = Math.ceil(num);
{
  console.log(`Заказ № ${orderNumber} от ${date} ${hours}:${minutes} на сумму ${rounded} рублей`);
}
