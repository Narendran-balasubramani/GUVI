function getUser() {
    var user = localStorage.getItem('userEmail');
    console.log('Retrieved user data:', user);
    // var data = JSON.parse(user);

    // console.log(data);



    if (user) {
        try {
            // var user = JSON.parse(userData);
            return {
                loggedIn: user !== null
            };
        }
        catch (error) {
            console.error('Error parsing user data as JSON:', error);
        }
    }
    return { loggedIn: false };
}
function saveUser(user) {
    localStorage.setItem('userEmail', JSON.stringify(user));
}
function logoutUser() {
    localStorage.removeItem('userEmail');
}
function updateNavigation(user) {
    var navigation = document.querySelector('.navbar ul');
    if (navigation) {
        if (user.loggedIn) {
            var dashboardItem = document.createElement('li');
            dashboardItem.classList.add("nav-item");
            dashboardItem.innerHTML ='<a id="dash" class="nav-link" href="./profile.html">Profile</a>';
            navigation.appendChild(dashboardItem);

            var logoutItem = document.createElement('li');
            logoutItem.classList.add("nav-item");
            logoutItem.innerHTML = '<a id="logout" class="nav-link" href="./profile.html">Logout</a>';
            navigation.appendChild(logoutItem);
            var logoutButton = document.getElementById('logout');
            if (logoutButton) {
                logoutButton.addEventListener('click', function () {
                    logoutUser();
                    window.alert("Logout Successful");
                    window.location.href = './login.html'; 
                });
            }
        }
        else {
            var dashboardItem = document.querySelector('a[href="./dashboard.html"]');
            if (dashboardItem && dashboardItem.parentElement) {
                dashboardItem.parentElement.remove();``
            }
            var logoutItem = document.querySelector('#logout');
            if (logoutItem && logoutItem.parentElement) {
                logoutItem.parentElement.remove();
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var user = getUser();
    updateNavigation(user);
    // window.location.reload();
});
