const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей
const parts = order.split(";");
console.log(parts);
const orderNumber = parts[0].split("#")[1];
const date = parts[1].split("=")[1];
{
  console.log(`Заказ № ${orderNumber} от ${date}`);
}
