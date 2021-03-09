$(document).ready(function () {
    var total = 0;

    var sum = function() {
        var prices = $('.item-price');
        var qtys = $('.quantity');
            total = 0;
        
        for (i = 0; i < qtys.length; i++) {
            var price = Number($(prices[i]).text().replace(/\$/,""));
            var subtotal = (Number($(qtys[i]).val())) * price;
            if (subtotal != 0) {
                $($('.item-subtotal')[i]).text("$" + subtotal); 
            } else {
                $($('.item-subtotal')[i]).text("$0.00"); 
            }
            total += subtotal
        }
        $('#total-price').text("$" + total);
        var addspace = "";
        var spaces = total.toString();
            spaces = spaces.length;
            spaces = 12 - spaces;
            for (i = 0; i < spaces; i++) {
                addspace += " ";
            }
        return total;
    }

    var addItem = function(name,cost) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        $('#shopping-cart').prepend('<div class="row">' + 
        '<div class="col-xs-4">' + 
        '<h3 class="item-name">' + name + '<h3>' +
        '</div>' + '<div class="col-xs-4">' + 
        '<h3 class="item-price">' + '$' + cost + '.00' + '</h3>' + 
        '</div>' + 
        '<div class="col-xs-4">' + 
        '<form class="form-inline"><h3>QTY<input type="text" class="form-control quantity" placeholder="0"><button class="btn btn-default remove" type="submit">Remove</button><span class="item-subtotal"> $0.00</span></h3></form>' + 
        '</div>' +
        '</div>');
    }

    $(document).on('click', '#create', function() {
        addItem($('#product').val(), $('#item-cost').val());
    });

    $(document).on('click', '.remove', function() {
        $(this).closest('.row').remove();
        sum();
    });

    $('input').keydown(function(e){
        if (e.which == 13) {
            sum();
        };
    });

    $(document).on('keyup', '.quantity', function(){
        sum();
    });

    $(document).on('keydown', '#item-cost', function(e){
        if (e.which == 13) {
          addItem($('#product').val(), $('#item-cost').val());
        };   
    });

    $(document).on('keydown', '#product', function(e){
        if (e.which == 13) {
          addItem($('#product').val(), $('#item-cost').val());
        };
    });
    
    


    
    





    


   
   
   




});