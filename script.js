// Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen input dan elemen error berdasarkan ID
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var umur = document.getElementById("umur");
    var tanggal = document.getElementById("tanggal");
    var keluhan = document.getElementById("keluhan");
    var kodePasien = document.getElementById("kodePasien");
    var setuju = document.getElementById("setuju");
    // Ambil form utama dan elemen notifikasi submit
    var form = document.getElementById("formSyaraf");
    // var form_submittion = document.getElementById("form_submittion");
    // Ambil elemen penampung error masing-masing input
    var errNama = document.getElementById("errNama");
    var errEmail = document.getElementById("errEmail");
    var errUmur = document.getElementById("errUmur");
    var errTanggal = document.getElementById("errTanggal");
    var errJK = document.getElementById("errJK");
    var errKeluhan = document.getElementById("errKeluhan");
    var errKode = document.getElementById("errKode");
    var errSetuju = document.getElementById("errSetuju");
        // Event listener saat form disubmit
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (isValidForm()){
                form_submittion.textContent = 'Form berhasil dikirim.';
                form.reset(); 
                return true; 
            }
        });
    // Fungsi utama untuk validasi seluruh form
    function isValidForm(){
        if(form_submittion) form_submittion.textContent = '';
        let validNama = isValidNama();
        let validEmail = isValidEmail();
        let validUmur = isValidUmur();
        let validTanggal = isValidDate();
        let validGender = isValidGender();
        let validKeluhan = isValidateKeluhan();
        let validKode = isValidKodePasien();
        let validSetuju = isValidSetuju();

        return validNama && validEmail && validUmur && validTanggal && validGender && validKeluhan && validKode && validSetuju;
        
    }
    // Fungsi validasi nama lengkap
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
    // Fungsi validasi alamat email
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
    // Fungsi validasi umur
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
    // Fungsi validasi tanggal
    function isValidDate() {
        if (tanggal.value === '') {
            errTanggal.textContent = 'Pilih tanggal.';
            return false;
        }
        const selectedParts = tanggal.value.split('-');
        const selectedDate = new Date(
            parseInt(selectedParts[0]),
            parseInt(selectedParts[1]) - 1,
            parseInt(selectedParts[2])
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate <= today) {
            errTanggal.textContent = "Pilih tanggal di masa depan.";
            return false;
        }

        errTanggal.textContent = '';
        return true;
    }
    // Fungsi validasi gender
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
    // Fungsi validasi keluhan
    function isValidateKeluhan(){
        if (keluhan.value === ''){
            errKeluhan.textContent = 'Pilih jenis keluhan.';
            return false;
        }
        errKeluhan.textContent = '';
        return true;
    }
    // Fungsi validasi kode pasien
    function isValidKodePasien() {
        const kode = kodePasien.value;
        const kodePattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6}$/;
        if (kode === '') {
            errKode.textContent = 'Kode pasien wajib diisi.';
            return false;
        }
        if (!kodePattern.test(kode)) {
            errKode.textContent = 'Kode harus 6 karakter alfanumerik.';
            return false;
        }
        errKode.textContent = '';
        return true;
    }
    // Fungsi validasi S&K
    function isValidSetuju() {
        if (!setuju.checked) {
            errSetuju.textContent = 'Anda harus menyetujui syarat & ketentuan.';
            return false;
        }
        errSetuju.textContent = '';
        return true;
    }
});