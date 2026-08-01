let passwordInput = document.getElementById('password');
let strengthMessage = document.getElementById('strengthMessage');

passwordInput.addEventListener('input', () => {
    let password = passwordInput.value;
    let strength = checkPasswordStrength(password);
    strengthMessage.textContent = `Password Strength: ${strength}`;
});


function checkPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak';
    } else if (password.length < 8) {
        return 'Moderate';
    } else if(password.length >= 8 && /\d/.test(password)){
        return 'Very Strong';
    }else{
        return 'Strong';
    }
}