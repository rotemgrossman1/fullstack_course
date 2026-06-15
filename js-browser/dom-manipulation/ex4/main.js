const nameValidation = function(name){
    if(name.length<=2){
        return "Name must more than 2 charachters"
    }
    //check if name contains charachters which are not alphabet
    if(!/^[a-zA-Z]+$/.test(name)){
        return "Name must contain only alphabet charachters"
    }
    return null; // No validation errors
}

const salaryValidation = function(salary){
    //check if salary is a number
    if(isNaN(salary)){
        return "Salary must be a number"
    }
    if(salary>16000 || salary<10000){
        return "Salary doesnt fit us"
    }
    else{
        return null
    }
}
const birthdayValidation = function(birthday){
    if(birthday === ""){
        return "Must put in a birthday"
    }
    return null
}
const phoneValidation = function(phone){
    //phone must conain only numbers and must be 10 digits long
    if(!/^[0-9]{10}$/.test(phone)){
        return "Phone must contain only numbers and be 10 digits long"
    }
    return null; // No validation errors
}
const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    let errorsContainer = document.getElementById("error-container");
    errorsContainer.innerHTML = ""; // Clear previous errors
    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;
    const errorMessages = [];

    const nameError = nameValidation(name);
    if (nameError) errorMessages.push(nameError);

    const salaryError = salaryValidation(salary);
    if (salaryError) errorMessages.push(salaryError);
    const birthdayError = birthdayValidation(birthday);
    if (birthdayError) errorMessages.push(birthdayError);
    const phoneError = phoneValidation(phone);
    if (phoneError) errorMessages.push(phoneError);

    // 3. Check if we actually have errors
    if (errorMessages.length > 0) {
        
        errorsContainer.style.color = "red"; // The prompt asked for red errors!
        
        // Join them with a line break so they look nice
        errorsContainer.innerHTML = errorMessages.join("<br>"); 
        
    } else {
        console.log("Form is perfectly valid! Ready to send.");
    }
   
})