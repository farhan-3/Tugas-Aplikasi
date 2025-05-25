var tanngal = document.getElementById("tanggal");
var keluhan = document.getElementById("keluhan");
var form = document.getElementById("formSyaraf");
var form_submittion = document.getElementById("form_submittion");

var errTanggal = document.getElementById("errTanggal");
var errJK = document.getElementById("errJK");
var errKeluhan = document.getElementById("errKeluhan");

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (isValidForm()){
        form_submittion.textContent = 'Form Submitted Succesfully.'
        form.reset() 
        return true
    }
});

function isValidForm(){
    form_submittion.textContent = ''
    let ValidDate = isValidDate();
    let ValidGender = isValidGender();
    let ValidateKeluhan = isValidateKeluhan()
    
    return ValidDate && 
    ValidGender && 
    ValidateKeluhan;
}


// For date validation
function isValidDate() {
    if (tanngal.value === '') {
        errTanggal.textContent = 'Select any date!';
        return false;
    }
    // selected date
    const selectedParts = tanngal.value.split('-');
    const selectedYear = parseInt(selectedParts[0]);
    const selectedMonth = parseInt(selectedParts[1]);
    const selectedDay = parseInt(selectedParts[2]);
    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);

    const today = new Date(); // today's date
    today.setHours(0, 0, 0, 0); // remove time

    if (selectedDate <= today) {
        errTanggal.textContent = "Select only future dates. Can't select past or today's date";
        return false;
    }

    errTanggal.textContent = '';
    return true;
}

// For gender selection validation
function isValidGender(){
    const formData = new FormData(form);
    const gender = formData.get("jk");
    if (!gender){
        errJK.textContent = 'Select the gender';
        return false
    }
    errJK.textContent = '';
    return true
}

// For keluhan validatoin
function isValidateKeluhan(){
    if (keluhan.value === ''){
        errKeluhan.textContent = 'Choose any option.'
        return false
    }
    errKeluhan.textContent = ''
    return true
}
