function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  var availableToppings = ["black olives", "pepperoni", "sausage"];
  var toppingPrices = [3, 4, 5];
  var sizes = ["small", "medium", "large"];
  var sizePrices = [8, 10, 12];
  for(var i = 0; i < this.toppings.length; i++) {
    for(var j = 0; j < availableToppings.length; j++) {
      if(this.toppings[i] === availableToppings[j]) {
        this.price += toppingPrices[j];
      }
    }
  }
  for(i = 0; i < sizes.length; i ++) {
    if(this.size === sizes[i]) {
      this.price += sizePrices[i];
    }
  }
};

function resetFields() {
  $("input#customer-name").val("")
  $("#pizza-size").val("size");
  $('input[type=checkbox]').each(function() {
        this.checked = false;
  });
}

exports.pizzaModule = Pizza;
exports.resetModule = resetFields;
