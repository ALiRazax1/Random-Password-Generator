// JavaScript Assignment 06 (Random Password Generator)
 
    let charters = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLPQWERTYUIOZXCVBNM0123456789!@#$%^&*()_+";
    let passwordSlider = document.querySelector('#customRange1')
    let passwordLength  = document.querySelector('#password-length')
    passwordSlider.addEventListener("input",()=>{passwordLength.innerText = passwordSlider.value})
    
    function asd(){let password = "";
    for (let i = 0; i <passwordLength.innerText; i++) {
        let randomIndex = Math.floor(Math.random() * charters.length);
        password += charters[randomIndex];
    }
    return password}
    
let passwordGenerator = document.querySelector('#password-generator')
passwordGenerator.addEventListener('click',()=>{;document.querySelector("#password").value =asd()})
 
