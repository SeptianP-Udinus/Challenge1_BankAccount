// 1. Membuat file JavaScript dengan nama "bank_account.js"

// 2. Deklarasi variabel "saldo" dengan nilai awal 0.
let saldo = 0;

// //Fungsi menampilkan saldo sekarang

// function tampilkanSaldo(){
//     document.getElementById("saldoSaatIni").textContent = "Saldo Saat Ini: " + saldo;
// }

// 3. Implementasi fungsi tambahSaldo.

function tambahSaldo(){
    // Membuat variabel baru, untuk menyimpan saldo yang akan ditambahkan
    // Tambahan, diubah menjadi Integer, agar bisa ditambahkan dengan saldo awal.
    let total = parseInt(window.prompt("Masukan saldo :"));
    
    // Membuat Kondisi, jika yang dimasukan adalah huruf dan yang dimasukan tidak boleh minus (-) / 0
    if(!isNaN(total) && total > 0) {
        
        alert("Saldo berhasil ditambahkan");
        // Menambahkan [total saldo sekarang] + [inputan saldo yang ingin ditambahkan]
        saldo += total;

        // Menampilkan pop up, jika saldo berhasil di tambahkan
        alert("Jumlah saldo anda saat ini " + saldo);

        // Perbarui tampilan saldo
        // tampilkanSaldo(); 
    } 

    else { 
        // Menampilkan pop up, jika saldo tidak berhasil di tambahkan 
        alert("Tolong masukan angka yang benar");
    }  
}

// 4 Menambahkan fungsi kurangiSaldo()
function kurangiSaldo(){
    // Membuat variabel baru, untuk menyimpan saldo yang akan dikurangi
    let total = parseInt(window.prompt("Masukan saldo :"));
    
    // Membuat Kondisi, jika yang dimasukan adalah huruf dan yang dimasukan tidak boleh minus (-) / 0
    if(!isNaN(total) && total > 0) {

        // Check apakah saldo cukup untuk dikurangi
        if(saldo >= total) {

            // Mengurangi [total saldo sekarang] - [inputan saldo yang ingin dikurangi]
            saldo -= total;
            alert("Saldo berhasil dikurangi");
            alert("Saldo anda sekarang : " + saldo);

            // Perbarui tampilan saldo
            // tampilkanSaldo(); 

        } else {
            // Menampilkan pop up, jika saldo tidak berhasil di kurangi
            alert("pengurangan saldo tidak dapat dilakukan, karena saldo lebih kecil")
        }
    } else { 
        // Menampilkan pop up, jika yang diinputkan salah
        alert("Tolong masukan angka yang benar");
    }
} 

// // Panggil tampilkanSaldo saat halaman dimuat untuk pertama kali
// window.onload = tampilkanSaldo;
