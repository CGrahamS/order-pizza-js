var Pizza = require('./../js/order-pizza.js').pizzaModule;
var resetFields = require('./../js/order-pizza.js').resetModule;

$(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var availableToppings = ["black olives", "pepperoni", "sausage"];
    var orderName = $("input#customer-name").val();
    var pizzaSize = $("#pizza-size").val();
    var pizzaToppings = $("input:checkbox[name=toppings]:checked");
    var newPizza = new Pizza(orderName, pizzaSize);
    if (orderName) {
      if (pizzaSize) {
        if (pizzaToppings) {
          $.each($(pizzaToppings), function() {
              newPizza.toppings.push($(this).val());
          });
          newPizza.calculatePrice();
          $("#order-name").text(newPizza.name);
          $(".pizza-size-output").text(newPizza.size);
          for(var i = 0; i < newPizza.toppings.length; i++) {
            for(var j = 0; j < availableToppings.length; j++) {
              if (newPizza.toppings[i] === availableToppings[j]) {
                if (i === 0) {
                  console.log("output1");
                  $(".pizza-toppings-output1").text("pizza with " + newPizza.toppings[i]);
                }
                if (i === 1) {
                  if (newPizza.toppings.length <= 2) {
                    $(".pizza-toppings-output2").text(" and " + newPizza.toppings[i]);
                    console.log("and");
                  } else {
                    $(".pizza-toppings-output2").text(" " + newPizza.toppings[i]);
                    console.log("no and");
                  }
                }
                if (i === 2) {
                  console.log("output3");
                  $(".pizza-toppings-output3").text(" and " + newPizza.toppings[i]);
                }
              }
            }
          }
          // if (newPizza.toppings.length === 0) {
          //   $(".pizza-toppings-output1").text("cheese pizza");
          //   $(".pizza-toppings-output2").empty();
          //   $(".pizza-toppings-output3").empty();
          // }
          // if (newPizza.toppings.length === 1) {
          //   $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
          //   $(".pizza-toppings-output2").empty();
          //   $(".pizza-toppings-output3").empty();
          // } else if (newPizza.toppings.length === 2) {
          //   $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
          //   $(".pizza-toppings-output2").text(" " + "and" + " " + newPizza.toppings[1]);
          //   $(".pizza-toppings-output3").empty();
          // } else if (newPizza.toppings.length === 3) {
          //   $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
          //   $(".pizza-toppings-output2").text(" " + "and" + " " + newPizza.toppings[1]);
          //   $(".pizza-toppings-output3").text("," + " " + newPizza.toppings[2]);
          // }
          $(".pizza-price-output").text(newPizza.price);
          $("#output").show();
          $("#size-alert").hide();
          $("#name-alert").hide();
          resetFields();
        }
      } else {
        $("#size-alert").show();
        $("#name-alert").hide();
      }
    } else {
      $("#name-alert").show();
      $("#size-alert").hide();
    }
  });
});
