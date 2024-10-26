// JavaScript Assignment 06 (Random Password Generator)
 
    let charters = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLPQWERTYUIOZXCVBNM0123456789!@#$%^&*()_+";
    let passwordLength = +prompt("Enter Password lenght",8);
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charters.length);
        password += charters[randomIndex];
    }
alert(`Generated Password:  ${ password}`)