$(document).ready(function () {
    /*remove btn function */   
    $('.btn.remove').on('click', function(event) {
        $(this).closest('div.row').remove();
    });

    


});