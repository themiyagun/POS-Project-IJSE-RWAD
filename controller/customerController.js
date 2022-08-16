

function addCustomer(name,age,id,salary) {
    var temCustomer= new Customer(name,age,id,salary);
    customerDB.push(temCustomer);
}

function deleteCustomer(name) {
       for (var i=0; i<customerDB.length;i++) {
        if (customerDB[i].getCustomerName() == name) {
            customerDB.splice(i, 1);
             return true;
        }
    }
}

function updateCustomer(deletename,name,age,id,salary) {
    for(var i =0; i< customerDB.length;i++){
        if(customerDB[i].getCustomerName()==deletename){
            customerDB.splice(i,1);
            addCustomer(name,age,id,salary);
        }
    }
}


function searchCustomer(name) {
    for (var i=0;i<customerDB.length;i++){
        if(customerDB[i].getCustomerName()==name){
            var cusname = customerDB[i].getCustomerName();
            var cusage = customerDB[i].getCustomerAge();
            var cusid = customerDB[i].getCustomerID();
            var cussal = customerDB[i].getCustomerSalary();
            var cusTemp = new Customer(cusname,cusage,cusid,cussal);
            return cusTemp;
        }
    }
}

function getAllCustomers() {
    return customerDB;
}

$("#btnSave").click(function () {
    var customerName=$('#cusName').val();
    var customerAge=$('#cusAge').val();
    var customerID=$('#cusID').val();
    var customerSalary=$('#cusSalary').val();

    addCustomer(customerName,customerAge,customerID,customerSalary);
    viewAllCus();
});

function viewAllCus() {
    var temp = getAllCustomers();
    $('#custbody').empty();
    for (var i = 0; i < temp.length; i++) {
        var cusname = temp[i].getCustomerName();
        var cusage = temp[i].getCustomerAge();
        var custp = temp[i].getCustomerID();
        var cussal = temp[i].getCustomerSalary();
        $('#custable').append('<tr><td>' + cusname + '</td><td>' + cusage + '</td><td>' + custp + '</td><td>' + cussal + '</td></tr>');
    }
}

$("#btnDelete").click(function () {
    var customerName=$("#cusSearchBar").val().trim();
    deleteCustomer(customerName);
    viewAllCus();
    }
);

$("#cusSearchButton").click(function () {
    if(searchCustomer($("#cusSearchBar").val().trim())) {
        var tempCus = searchCustomer($("#cusSearchBar").val().trim());
        var cusname = tempCus.getCustomerName();
        var cusage = tempCus.getCustomerAge();
        var cusid = tempCus.getCustomerID();
        var cussal = tempCus.getCustomerSalary();

        $("#cusNa").text(cusname);
        $("#cusAg").text(cusage);
        $("#cusTp").text(cusid);
        $("#cusSal").text(cussal);

        Seachwindow();

    }else {
        alert("No customer registered For That Name!!!");
    }
});

function Seachwindow() {
    $("#cusSearchPanel").css("display","block");

}

$("#cusSearchClose").click(function () {
    $("#cusSearchPanel").css("display","none");

});



$("#btnUpdate").click(function () {
    updateCustomer($("#cusEditNamelbl").text(),$("#cusEditName").val().trim(),$("#cusEditAge").val().trim(),$("#cusEditTP").val().trim(),$("#cusEditSalary").val().trim());
    viewAllCus();
    $("#cusEditName").val('');
    $("#cusEditAge").val('');
    $("#cusEditTP").val('');
    $("#cusEditSalary").val('');
    $('#editCustomerModal').modal('hide');

    }
);

$('#btnEdit').click(function () {

    if(searchCustomer($("#cusSearchBar").val().trim())) {
        var tempCus = searchCustomer($("#cusSearchBar").val().trim());
        var cusname = tempCus.getCustomerName();
        var cusage = tempCus.getCustomerAge();
        var cusid = tempCus.getCustomerID();
        var cussal = tempCus.getCustomerSalary();

        $("#cusEditNamelbl").text(cusname);
        $("#cusEditAgelbl").text(cusage);
        $("#cusEditTPlbl").text(cusid);
        $("#cusEditSallbl").text(cussal);

        $("#editCustomerModal").modal();

    }else{
        alert("No MAtching customer For Update!!!");
    }
});


