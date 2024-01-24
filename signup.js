
    function submitform() {  
      var email = document.getElementById('email').value ;
      var password = document.getElementById('password').value ;
      var confirmPassword = document.getElementById('confirmPassword').value ;

      // Validate Email Format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         document.getElementById('emailError').innerHTML = 'Invalid email format';
         return;
      }

      // Validate password strength
      // For simplicity, this example checks if the password has at least 6 characters
      if (password.length < 8) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters';
        return;
      }
      
      // Check for the presence of at least one uppercase letter
      if (!/[A-Z]/.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password must have at least 1 Uppercase Character';
        return;
      }

      // Check for the presence of at least one lowercase letter
      if (!/[a-z]/.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password must have at least 1 lowercase Character';
        return;
      }
      // Check for the presence of at least one digit
    if (!/\d/.test(password)) {
      document.getElementById('passwordError').innerHTML = 'Password must have at least 1 digit';
        return;
    }

    // Check for the presence of at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      document.getElementById('passwordError') = alert('Password must have at least 1 special Character');
        return;
    }
    // Validate password and confirm password match
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        return;
    }
    document.getElementById('confirmed').innerHTML = 'submitted';
      return;
    
    }
