
function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Villv' && password === 'imsogoated') {
        window.location.href = 'file:///C:/Users/ggs/Desktop/Amores/index2.html';
        return false;
    } else {
        alert('Mali gagu');
        return false;
    }      
    
}