document.getElementById('login-submit').addEventListener(
    'click', function () {
        // email vlaue 
        const emailField = document.getElementById('user-email');
        const emailValue = emailField.value;
        // passsword value 
        const passwordField = document.getElementById('user-password');
        const passwordValue = passwordField.value;
        console.log(emailValue, passwordValue);
        // chack html and css
        if(emailValue == 'someOne@gmail.com' & passwordValue == 'password'){
            alert('valid user');
            window.location.href = '/bank.html'
            console.log('valid user');
        }
    }
);

