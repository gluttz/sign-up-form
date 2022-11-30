
document.querySelector('.info3 button').onclick = function(){
    let password = document.querySelector('#password').value;
    let confirmPass = document.querySelector('#confirmPassword').value;
    if(password !== confirmPass){
        alert('Passwords do not match!');
        return false;
    }else{
        return true;
    }
};