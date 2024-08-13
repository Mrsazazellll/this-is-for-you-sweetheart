window.onload = () => {
        document.body.classList.remove("container");
        var audioIndex = document.getElementById("background-audio");
    
        if (audioIndex) {
            audioIndex.currentTime = 33; // Atur ke waktu lirik "Mmm, too young, too dumb to realize"
            audioIndex.play(); // Memulai audio secara otomatis
    
            // Fungsi untuk memeriksa posisi waktu dan melakukan redirect
            var checkLyrics = setInterval(function() {
                // Cek apakah audio telah mencapai waktu tertentu (diambil dari lirik "That I should've bought you flowers")
                if (audioIndex.currentTime >= 43) { // Angka waktu disesuaikan dengan audio
                    clearInterval(checkLyrics); // Hentikan interval
                    window.location.href = 'flower.html'; // Redirect ke flower.html
                }
            }, 100); // Periksa setiap 100ms
        }
    };
    
    $(document).ready(function() {
        var button = $(".button");
        var candle = $("#candle");
    
        // Sembunyikan tombol di awal
        button.hide();
    
        // Atur timeout untuk menghilangkan lilin dan menampilkan tombol setelah 5 detik
        setTimeout(function() {
            $("#flame, .smoke").fadeOut();
            candle.fadeOut(function() {
                button.fadeIn(300); // Tampilkan tombol setelah lilin menghilang
            });
        }, 5000); // 5000 ms = 5 detik
    
        var audioFlower = document.getElementById("background-audio-flower");
        if (audioFlower) {
            // Pastikan audio dimulai dari waktu tertentu jika pengguna dialihkan ke flower.html
            audioFlower.currentTime = 43; // Disesuaikan dengan kebutuhan
            audioFlower.play();
        }
    });