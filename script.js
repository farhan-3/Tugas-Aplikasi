document.addEventListener('DOMContentLoaded', function() {
  var nama = document.getElementById("nama");
  var email = document.getElementById("email");
  var umur = document.getElementById("umur");
  var tanggal = document.getElementById("tanggal");
  var keluhan = document.getElementById("keluhan");
  var form = document.getElementById("formSyaraf");
  var form_submittion = document.getElementById("form_submittion");

  var errNama = document.getElementById("errNama");
  var errEmail = document.getElementById("errEmail");
  var errUmur = document.getElementById("errUmur");
  var errTanggal = document.getElementById("errTanggal");
  var errJK = document.getElementById("errJK");
  var errKeluhan = document.getElementById("errKeluhan");

  form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (isValidForm()){
          if(form_submittion) {
            form_submittion.textContent = 'Form Submitted Successfully.';
          }
          form.reset(); 
          return true;
      }
  });

  function isValidForm(){
      if(form_submittion) form_submittion.textContent = '';
      let validNama = isValidNama();
      let validEmail = isValidEmail();
      let validUmur = isValidUmur();
      let validTanggal = isValidDate();
      let validGender = isValidGender();
      let validKeluhan = isValidateKeluhan();
      
      return validNama && validEmail && validUmur && validTanggal && validGender && validKeluhan;
  }

  function isValidNama() {
    if (nama.value === '') {
        errNama.textContent = 'Nama lengkap wajib diisi.';
        return false;
    }
    if (nama.value.length < 3) {
        errNama.textContent = 'Nama lengkap minimal 3 karakter.';
        return false;
    }
    const regexNama = /^[A-Za-z\s]+$/;
    if (!regexNama.test(nama.value)) {
        errNama.textContent = 'Nama hanya boleh berisi huruf dan spasi.';
        return false;
    }
    errNama.textContent = '';
    return true;
  }

  function isValidEmail() {
      const emailValue = email.value;
      if (emailValue === '') {
          errEmail.textContent = 'Email wajib diisi.';
          return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
          errEmail.textContent = 'Format email tidak valid.';
          return false;
      }
      errEmail.textContent = '';
      return true;
  }

  function isValidUmur() {
    const umurValue = umur.value; 
  
    if (!umurValue) {
      errUmur.textContent = "Umur wajib diisi.";
      return false;
    } else if (!/^\d+$/.test(umurValue)) {
      errUmur.textContent = "Umur harus berupa angka.";
      return false;
    } else if (umurValue.length < 2) {
      errUmur.textContent = "Umur minimal 2 digit.";
      return false;
    }
  
    errUmur.textContent = "";
    return true;
  }
// For date validation
  function isValidDate() {
      if (tanggal.value === '') {
          errTanggal.textContent = 'Pilih tanggal';
          return false;
      }
      // selected date
      const selectedParts = tanggal.value.split('-');
      const selectedYear = parseInt(selectedParts[0]);
      const selectedMonth = parseInt(selectedParts[1]);
      const selectedDay = parseInt(selectedParts[2]);
      const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);

      const today = new Date(); // today's date
      today.setHours(0, 0, 0, 0); // remove time

      if (selectedDate <= today) {
          errTanggal.textContent = "Pilih tanggal di masa depan, bukan hari ini atau sebelumnya.";
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
          errJK.textContent = 'Pilih jenis kelamin.';
          return false;
      }
      errJK.textContent = '';
      return true;
  }
// For keluhan validatoin
  function isValidateKeluhan(){
      if (keluhan.value === ''){
          errKeluhan.textContent = 'Pilih jenis keluhan.';
          return false;
      }
      errKeluhan.textContent = '';
      return true;
  }
});

document.getElementById('confirmasi1').checked = true;
document.getElementById('confirmasi2').checked = false;
document.getElementById('confirmasi3').checked = false;
document.getElementById('confirmasi4').checked = false;
document.getElementById('confirmasi5').checked = false;
document.getElementById('confirmasi6').checked = false;
document.getElementById('confirmasi7').checked = false;
document.getElementById('confirmasi8').checked = true;
