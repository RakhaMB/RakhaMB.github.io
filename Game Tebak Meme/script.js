// Daftar gambar dan jawabannya
const gambarList = [
    { src: "img1.jpg", answer: "apel" },
    { src: "img2.jpg", answer: "pisang" },
    { src: "img3.jpg", answer: "jeruk" },
];

let currentImageIndex = 0;
let score = 0;

// Elemen DOM
const gameImage = document.getElementById('game-image');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');

// Menampilkan gambar pertama
function showImage() {
    gameImage.src = gambarList[currentImageIndex].src;
}

// Fungsi untuk memeriksa jawaban
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswer = gambarList[currentImageIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Benar!";
        score++;
        scoreDisplay.textContent = score;
        nextImage();
    } else {
        feedback.textContent = "Salah, coba lagi!";
    }
    answerInput.value = ''; // Reset input
}

// Menampilkan gambar berikutnya
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex < gambarList.length) {
        showImage();
    } else {
        feedback.textContent = "Selamat! Anda telah menyelesaikan semua gambar.";
        submitBtn.disabled = true; // Matikan tombol setelah selesai
    }
}

// Event Listener untuk tombol submit
submitBtn.addEventListener('click', checkAnswer);

// Menampilkan gambar pertama saat halaman dimuat
showImage();
