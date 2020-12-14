$(document).ready( function() {

        // Function to create a new burger and append it to the un devoured burger list
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

        // Function to move th burger card to the devoured side
        $(".card-body").on("click", "#changeEaten", function(event) {
            event.preventDefault();

            let id = $(this).data("id");
            const newState = {
                devoured: 1
            };

            $.ajax("/api/burger/" + id, {
                type: 'PUT',
                data: newState
            }).then(function() {

                location.reload();
            })
        });

        // Function to move th burger card back to the non devoured side
        $(".card-body").on("click", "#changeNotEaten", function(event) {
            event.preventDefault();

            let id = $(this).data("id");
            const newState = {
                devoured: 0
            };

            $.ajax("/api/burger/" + id, {
                type: 'PUT',
                data: newState
            }).then(function() {
            
                location.reload();
            })
        });
});