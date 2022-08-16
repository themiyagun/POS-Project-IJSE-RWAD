function addItem(name,price,qty) {
    var tempItem =new Item(name,price,qty);
    itemDB.push(tempItem);
}
function deleteItem(name) {
    for (var i = 0; i < itemDB.length; i++){
        if (itemDB[i].getItemName() == name) {
            itemDB.splice(i, 1);
        }
    }
}
function searchItem(name) {
    for(var i=0; i<itemDB.length;i++){
        if(itemDB[i].getItemName()== name){
            var itemName = itemDB[i].getItemName();
            var itemPrice = itemDB[i].getItemPrice();
            var itemQty = itemDB[i].getItemQty();

            var tempItem = new Item(itemName,itemPrice,itemQty);
            return tempItem;
            }
    }
}
function updateItem(deletename,name,price,qty) {
    for(var i=0;i<itemDB.length;i++){
     if(itemDB[i].getItemName()==deletename){
         itemDB.splice(i,1);
         addItem(name,price,qty);
     }
    }

}
function getAllItems() {
    return itemDB;

}
$('#itemSave').click(function () {
        var itemName=$('#itemName').val();
        var itemPrice=$('#itemPrice').val();
        var itemQty=$('#itemQty').val();

        addItem(itemName,itemPrice,itemQty);
        viewAllItems();
    });

function viewAllItems() {
    var tempItem = getAllItems();
    $('#itemBody').empty();
    for (var i = 0; i < tempItem.length; i++) {
        var itemName = tempItem[i].getItemName();
        var itemPrice = tempItem[i].getItemPrice();
        var itemQty = tempItem[i].getItemQty();
        $("#itemTable").append('<tr><td>'+ itemName + '</td><td>' + itemPrice + '</td><td>' + itemQty + '</td></tr>');
    }
}

$("#itemDelete").click(function () {
    var itemName = $("#itemSearchBar").val().trim();
    deleteItem(itemName);
    viewAllItems();

});

$("#itemSeachBtn").click(function () {
    if(searchItem($("#itemSearchBar").val().trim())) {
        var tempItem = searchItem($("#itemSearchBar").val().trim());
        var itemname = tempItem.getItemName();
        var itemprice = tempItem.getItemPrice();
        var itemqty = tempItem.getItemQty();

        $("#itemNa").text(itemname);
        $("#itemPr").text(itemprice);
        $("#itemQu").text(itemqty);

        $("#itemSearchPanel").css("display", "block");
    }else{
        alert("No Item Included for that Name!!!");
    }
});

$("#itemSearchClose").click(function () {
    $("#itemSearchPanel").css("display","none");

});

$("#itemEdit").click(function () {
    if(searchItem($("#itemSearchBar").val().trim())) {
        var tempItem = searchItem($("#itemSearchBar").val().trim());
        var itemname = tempItem.getItemName();
        var itemprice = tempItem.getItemPrice();
        var itemqty = tempItem.getItemQty();

        $("#itemEditNamelbl").text(itemname);
        $("#itemEditPricelbl").text(itemprice);
        $("#itemEditPricelbl").text(itemqty);

        $("#editItemModal").modal("show");
    }else {
        alert("No Matching Item Name For Update!!!")
    }
});
$("#itemUpdate").click(function () {
    updateItem($("#itemEditNamelbl").text(),$("#itemEditName").val().trim(),$("#itemEditPrice").val().trim(),$("#itemEditQty").val().trim());
    viewAllItems();
    $("#itemEditName").val('');
    $("#itemEditPrice").val('');
    $("#itemEditQty").val('');
    $('#editItemModal').modal('hide');
});


