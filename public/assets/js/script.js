$(document).on("load", function() {

    function submitBurger(event) {
        event.preventDefault();
        let inputField = $("#newBurger").val().trim();

        if (inputField.length == 0) {
            Swal("Sorry", "Try again friend", "warning");
        } else {
            try {
                $.ajax("/", {
                    type: 'POST',
                    data: {
                        inputField
                    },
                }).then(function(res) {
                    console.log(res);
                    Swal(`${inputField}`, "Thank You", "success");
                });
            } catch (error) {
                throw (error);
            }
        }

        let query = `INSERT INTO ?? (burger_name, devoured) VALUES (${inputField}, false)`;

        connection.query(query, function(err, res) {
        
        })
    }

    $("#submitBTN").on("click", function() {
        submitBurger();
    })
});