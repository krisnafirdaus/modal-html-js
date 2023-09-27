// Dapatkan elemen modal
var modal = document.getElementById("myModal");

// Dapatkan elemen tombol yang membuka modal
var btn = document.getElementById("myBtn");

// Dapatkan elemen <span> yang menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika pengguna mengklik tombol, buka modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Ketika pengguna mengklik <span> (x), tutup modal
span.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna mengklik di mana saja di luar modal, tutup itu
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}