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
    
        $(".burgerList").on("click", "#devourBTN", function(event) {
            event.preventDefault();
            
            console.log("please");

            let id = $(this).data("id");

            let isDevoured = {
                devoured: true
            }

            $.ajax("api/burger/" + id, {
                type: 'PUT',
                data: isDevoured
            }).then(function() {
                console.log("something is happening");

                location.reload();
            })
        });
    

    

    
});