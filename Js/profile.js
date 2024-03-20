document.addEventListener('DOMContentLoaded', function() {
    var userDataJSON = localStorage.getItem('userEmail');
    console.log(userDataJSON)
    var userData = JSON.parse(userDataJSON);
    console.log(userData)
    
    if (userData) {
        document.getElementById('firstname').innerText = 'Firstname: ' + userData.Firstname;
        document.getElementById('lastname').innerText = 'Lastname: ' + userData.Lastname;
        document.getElementById('email').innerText = 'Email: ' + userData.Email;
        document.getElementById('phone').innerText = 'Phone Number: ' + userData['Phone Number'];
    } else {
        console.error("No user data found in local storage.");
    }
});
