
$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        var formData1 = {
            email: $("#email").val(),
            pwd: $("#pwd").val()
        };

        console.log(formData1);

        $.ajax({
            type: 'POST',
            url: '../php/login.php',
            data: formData1,
            success: function(data) {
                console.log(data);
                localStorage.setItem('userEmail',data);

                window.location.reload();
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

