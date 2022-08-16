$("#dropdwnorderCusDetails").click(function () {
    $("#dropdwnorderCusDetails option").remove();
    for(var i = 0; i < customerDB.length; i++) {
        $('#dropdwnorderCusDetails').append('<option value='+i+'>'+customerDB[i].getCustomerName()+'</option>');
    }
});

$("#dropdwnorderItemSelect").click(function () {
    $("#dropdwnorderItemSelect option").remove();
    for(var i = 0; i < itemDB.length; i++) {
        $('#dropdwnorderItemSelect').append('<option value='+i+'>'+itemDB[i].getItemName()+'</option>');
    }
});

var oid = orderDb.length;
function orderIdGenerate() {
    oid=oid+1;
    $("#orderID").val(oid);
}
$("window").ready(function () {
    orderIdGenerate();
    alert("dfdd");
});

function addOrder() {
    var orderID = $("#orderID").val().trim();
    var orderDate=$("#orderDate");
    var cusName=$("#dropdwnorderCusDetails").find(":selected").text();
    getorderValues();
    var order= new Order(orderID,orderDate,cusName,orderDetails);
    orderDb.push(order);
    alert("Success");


}
function getorderValues() {
    var orderID = $("#orderID").val().trim();
    var itemName = $("#dropdwnorderItemSelect").find(":selected").text();
    var itemPrice= $("#orderItemPrice").val().trim();
    var iQty=$("#orderItemQty").val().trim();
    var total =$("#total").val().trim();
    addOrderDeatails(orderID,itemName,itemPrice,iQty,total);
}

$("#orderAddBtn").click(function () {
    addOrder();
    }
);

