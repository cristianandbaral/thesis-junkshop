function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginStatus = document.getElementById('login-status');
  
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(() => {
        // User signed in successfully
        loginStatus.innerHTML = 'Login successful. Redirecting...';
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          loginStatus.innerHTML = 'Invalid password. Please try again.';
        } else if (errorCode === 'auth/user-not-found') {
          loginStatus.innerHTML = 'User not found. Please sign up.';
        } else {
          loginStatus.innerHTML = 'Login failed: ' + errorMessage;
        }
      });
  }
  