
     
 $(document).ready(function () {

    $('#mailForm').on('submit', function (e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get real message
        var message = $("#message").val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url: 'https://formspree.io/jasmina982@hotmail.com',
            method: 'POST',
            data: {
                name: name,
                email: email,
                message: message,
            },
            dataType: "json",
            success: function () {
                alert("Message sent");
                var form = document.getElementById("mailForm")[0];
                form.reset();
                return false;
            }

        });

    });

});