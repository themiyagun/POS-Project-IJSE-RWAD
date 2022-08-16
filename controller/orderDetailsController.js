function addOrderDeatails(orderID,itemName,itemPrice,itemQty,total) {
    var order =new OrderDetails(orderID,itemName,itemPrice,itemQty,total);
    orderDetails.push(order);
}
