function Item(name,price,qty) {
    var _name = name;
    var _price = price;
    var _qty = qty;

    this.getItemName = function(){
        return _name;
    }
    this.getItemPrice = function(){
        return _price;
    }
    this.getItemQty = function(){
        return _qty;
    }
    this.setItemName = function (name) {
        _name=name;
    }
    this.setItemPrice = function (price) {
        _price=price;
    }
    this.setItemQty = function (qty) {
        _qty=qty;
    }
}