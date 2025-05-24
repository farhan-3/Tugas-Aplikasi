function validasiForm() {
    let valid = true;
  
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const umur = document.getElementById('umur').value;
    const tanggal = document.getElementById('tanggal').value;
    const jk = document.querySelector('input[name="jk"]:checked');
    const keluhan = document.getElementById('keluhan').value;
    const gejala = document.getElementById('gejala').value;
    const kode = document.getElementById('kodePasien').value;
    const setuju = document.getElementById('setuju').checked;
  
    // Validasi Nama
    if (!nama) {
      document.getElementById('errNama').innerHTML = "Nama harus diisi.";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(nama)) {
      document.getElementById('errNama').innerHTML = "Nama hanya boleh huruf dan spasi.";
      valid = false;
    }
  
    // Validasi Email
    if (!email) {
      document.getElementById('errEmail').innerHTML = "Email harus diisi.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('errEmail').innerHTML = "Format email tidak valid.";
      valid = false;
    }
  
    // Validasi Umur
    if (!umur) {
      document.getElementById('errUmur').innerHTML = "Umur harus diisi.";
      valid = false;
    } else if (!/^\d+$/.test(umur)) {
      document.getElementById('errUmur').innerHTML = "Umur harus berupa angka.";
      valid = false;
    } else if (umur.length < 2) {
      document.getElementById('errUmur').innerHTML = "Umur minimal 2 digit.";
      valid = false;
    }
  
    return valid;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSyaraf");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const valid = validasiForm();
    });
  });
  
