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

        $(".card-body").on("click", "#changeState", function(event) {
            event.preventDefault();

            let id = $(this).data("id");
            const newDevoured = $(this).data("newDevoured");
            const newState = {
                devoured: 1
            };

            $.ajax("/api/burger/" + id, {
                type: 'PUT',
                data: newState
            }).then(function() {
                console.log("something is happening", newDevoured);

                location.reload();
            })
        });
    
        // $("#changeState").on("click", function(event) {
        //     event.preventDefault();
            
        //     console.log("please");

        //     let id = $(this).data("id");

        //     let isDevoured = {
        //         devoured: true
        //     }

        //     $.ajax("api/burger/" + id, {
        //         type: 'PUT',
        //         data: isDevoured
        //     }).then(function() {
        //         console.log("something is happening");

        //         location.reload();
        //     })
        // });
    

        // $(".eatenList").on("click", "#eatAgainBTN", function(event) {
        //     event.preventDefault();
            
        //     console.log("please");

        //     let id = $(this).data("id");

        //     let isDevoured = {
        //         devoured: false
        //     }

        //     $.ajax("api/burger/" + id, {
        //         type: 'PUT',
        //         data: isDevoured
        //     }).then(function() {
        //         console.log("something is happening");

        //         location.reload();
        //     })
        // });

    

    
});