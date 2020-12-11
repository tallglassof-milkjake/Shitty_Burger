$(document).ready( function() {

        $(".form-group").on("click", "#submitBTN", function(event) {
            event.preventDefault();

            const newBurger = $("#newBurger").val().trim();

            console.log(newBurger);

            $.ajax(`/api/burger/${newBurger}`, {
                type: 'POST',
                
            }).then(function() {
                
                location.reload()
                
            });
        });
    
    

    

    
});