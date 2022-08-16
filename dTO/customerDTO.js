function Customer(name, age, id, salary) {

    var _name = name;
    var _age = age;
    var _id = id;
    var _salary = salary;

    this.getCustomerID = function () {
        return _id;
    }
    this.getCustomerName = function () {
        return _name;
    }
    this.getCustomerAge = function () {
        return _age;
    }
    this.getCustomerSalary = function () {
        return _salary;
    }
    this.setCustomerID = function (id) {
        _id = id;
    }
    this.setCustomerName = function (name) {
        _name = name;
    }
    this.setCustomerAge = function (age) {
        _age = age;
    }
    this.setCustomerSalary = function (salary) {
        _salary = salary;
    }
}