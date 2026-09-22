Welcome, nabnab!

I'm here to help you create, learn, and get things done. What would you like to do?

Start a voice chat

Write a message

Get advice

Create an image

Learn something new

Search the web

Pasted text.txt
Document
Pasted text (2).txt
Document
<!DOCTYPE html><html lang="id"><head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>For Dimdim ♡</title> 
 
<link rel="stylesheet" href="style.css"> 
 
</head><body> 
    <!-- ================================================== 
     INTRO TEXT ANIMATION 
================================================== --><div 
    class="intro-screen" 
    id="introScreen" 
    role="button" 
    tabindex="0" 
    aria-label="Ketuk untuk membuka" 
> 
 
    <div class="intro-text" id="introText"> 
        <!-- HURUF DIBUAT OLEH JAVASCRIPT --> 
    </div> 
 
    <p class="intro-tap"> 
        tap anywhere ♡ 
    </p> 
 
</div> 
 
    <!-- MUSIC BUTTON --> 
 
<button 
    id="musicButton" 
    class="music-button" 
    onclick="toggleMusic()" 
    aria-label="Music" 
> 
    ♫ 
</button> 
    <!-- ================================================== 
     MUSIC 
================================================== --><audio id="backgroundMusic" loop> 
    <source src="lagu.mp3" type="audio/mpeg"> 
</audio><!-- ================================================== 
     OPENING 
================================================== --><section class="opening" id="opening"><div class="hearts"> 
    <span>♡</span> 
    <span>♡</span> 
    <span>♡</span> 
    <span>♡</span> 
    <span>♡</span> 
</div> 
 
<div class="opening-content"> 
 
    <p class="small-text"> 
        A little something for you... 
    </p> 
 
    <h1> 
        For My Dimdim ♡ 
    </h1> 
 
    <p class="subtitle"> 
        From your Bibil 
    </p> 
 
    <button onclick="openWebsite()"> 
        Open ♡ 
    </button> 
 
</div> 
 
</section><!-- ================================================== 
     BIRTHDAY 
================================================== --><section class="birthday" id="birthday"><div class="birthday-content"> 
 
    <p class="date"> 
        24 · 09 · 2026 
    </p> 
 
    <h2> 
        Happy 25th Birthday 
    </h2> 
 
    <h3> 
        Dimdim ♡ 
    </h3> 
 
    <p class="birthday-text"> 
        Hari ini adalah hari spesial untuk seseorang 
        yang sangat spesial buat Bibil. 
    </p> 
 
    <a href="#book" class="main-button"> 
        Continue ♡ 
    </a> 
 
</div> 
 
</section><!-- ================================================== 
     BOOK COVER 
================================================== --><section class="book-intro" id="book"><div class="book-cover"> 
 
    <p class="book-small"> 
        A LITTLE BOOK ABOUT US 
    </p> 
 
    <h2> 
        Our Little Story 
    </h2> 
 
    <p class="book-names"> 
        Bibil & Dimdim 
    </p> 
 
    <div class="book-heart"> 
        ♡ 
    </div> 
 
    <p class="book-description"> 
        little moments, little memories, 
        and a story that means everything to me. 
    </p> 
 
    <!-- TIDAK PAKAI JAVASCRIPT --> 
    <a href="#bookPages" class="open-story-button"> 
        Open Our Story ♡ 
    </a> 
 
</div> 
 
</section><!-- ================================================== 
     BOOK PAGES 
================================================== --><section class="book-section" id="bookPages"><div class="book"> 
 
    <div class="book-page" id="bookPage"> 
 
        <!-- ISI BUKU DIBUAT OLEH JAVASCRIPT --> 
 
    </div> 
 
</div> 
 
 
<!-- BOOK NAVIGATION --> 
 
<div class="book-controls"> 
 
    <button onclick="previousPage()"> 
        ← Previous 
    </button> 
 
    <span id="pageNumber"> 
        1 / 10 
    </span> 
 
    <button onclick="nextPage()"> 
        Next → 
    </button> 
 
</div> 
 
</section><!-- ================================================== 
     CLOSING 
================================================== --><section class="closing-section"><div class="closing-content"> 
 
    <p class="closing-label"> 
        THE END... FOR NOW 
    </p> 
 
    <div class="closing-line"></div> 
 
    <h2> 
        TO BE CONTINUED ♡ 
    </h2> 
 
    <p class="closing-text"> 
        Ini mungkin cuma sebuah website kecil,<br> 
        tapi di dalamnya ada banyak cerita yang berarti buat Bibil. 
    </p> 
 
    <p class="closing-text"> 
        Dari awal kita kenal,<br> 
        sampai semua hal kecil yang sekarang jadi kenangan. 
    </p> 
 
    <p class="closing-text"> 
        Dan kalau semua yang ada di sini adalah bagian dari cerita kita,<br> 
        Bibil masih mau menulis banyak halaman lagi sama Dimdim. 
    </p> 
 
    <div class="closing-list"> 
 
        <span> 
            lebih banyak tempat untuk didatangi 
        </span> 
 
        <span> 
            lebih banyak makanan untuk dimakan 
        </span> 
 
        <span> 
            lebih banyak foto untuk disimpan 
        </span> 
 
        <span> 
            lebih banyak video untuk ditertawakan 
        </span> 
 
        <span> 
            dan lebih banyak cerita yang belum kita punya 
        </span> 
 
    </div> 
 
    <p class="closing-final"> 
        Jadi... 
    </p> 
 
    <p class="closing-message"> 
        sampai jumpa di halaman berikutnya, Dimdim. ♡ 
    </p> 
 
    <div class="closing-heart"> 
        ♡ 
    </div> 
 
    <p class="closing-from"> 
        — Bibil 
    </p> 
 
    <div class="closing-date"> 
 
        <span>24</span> 
        <span>·</span> 
        <span>09</span> 
        <span>·</span> 
        <span>2026</span> 
 
    </div> 
 
    <p class="closing-birthday"> 
        Happy 25th Birthday, Dimdim ♡ 
    </p> 
 
</div> 
 
</section><!-- ================================================== 
     LETTER 
================================================== --><section class="letter" id="letter"><div class="letter-paper"> 
 
    <p class="letter-small"> 
        FOR MY DIMDIM 
    </p> 
 
    <h2> 
        Dear Dimdim ♡ 
    </h2> 
 
    <div class="letter-content"> 
 
        <p> 
            Happy birthday yaa dimdimmm. 
            Selamat ulang tahun yang ke-25. 
        </p> 
 
        <p> 
            Bibil sebenernya bingung mau nulis apa karena 
            rasanya banyak banget yang mau bibil sampaikan, 
            tapi susah buat dirangkai jadi kata-kata. 
        </p> 
 
        <p> 
            Makasih yaa dimdim, udah hadir di hidup bibil. 
            Makasih buat semua waktu, perhatian, cerita, 
            candaan, dan hal-hal kecil yang mungkin menurut 
            dimdim biasa aja, tapi buat bibil berarti. 
        </p> 
 
        <p> 
            Kalau diingat-ingat, lucu juga yaa gimana 
            awalnya kita bisa sampai di titik ini. 
            Dari yang awalnya cuma ngerjain tugas bareng, 
            nonton, jalan, cerita-cerita, sampai akhirnya 
            sekarang kita punya banyak banget kenangan 
            yang bisa kita lihat lagi. 
        </p> 
 
        <p> 
            Bibil seneng banget bisa kenal dimdim sedekat ini. 
            Seneng bisa punya seseorang yang bisa diajak cerita, 
            diajak bercanda, diajak pergi, dan tentunya diajak 
            melewati banyak hal. 
        </p> 
 
        <p> 
            Di umur dimdim yang ke-25 ini, bibil berharap 
            semoga semua hal baik datang ke dimdim. 
            Semoga dimdim selalu sehat, selalu dikelilingi 
            orang-orang yang sayang sama dimdim, dan semoga 
            apa pun yang dimdim usahakan bisa pelan-pelan tercapai. 
        </p> 
 
        <p> 
            Bibil juga berharap kita masih bisa bikin banyak 
            cerita lagi. Masih bisa pergi ke banyak tempat, 
            makan bareng, nonton bareng, main bareng, dan 
            melakukan hal-hal kecil yang nantinya bisa kita 
            ingat lagi sambil bilang, 
            "ingat nggak waktu itu?" 
        </p> 
 
        <p> 
            Mungkin hubungan kita juga nggak selalu sempurna, 
            mungkin ada hari dimana kita sama-sama capek, 
            kesel, atau nggak sependapat. Tapi bibil berharap 
            kita tetap mau saling ngerti, saling sabar, 
            dan tetap memilih satu sama lain. 
        </p> 
 
        <p> 
            Makasih udah jadi bagian dari cerita hidup bibil 
            sampai sekarang. 
        </p> 
 
        <p class="letter-final"> 
            Sekali lagi, happy birthday dimdimmm ♡ 
        </p> 
 
        <p class="letter-final"> 
            Semoga umur 25 ini jadi salah satu tahun 
            yang paling baik buat dimdim. 
        </p> 
 
        <div class="letter-signature"> 
            With love,<br> 
            <strong>Bibil ♡</strong> 
        </div> 
 
    </div> 
<div class="restart-area"> 
 
    <a href="#opening" class="restart-button"> 
        Start Our Story Again ♡ 
    </a> 
 
</div> 
 
</div> 
</section> 
 
<script src="script.js"></script></body> 
</html>  tambahkan kodenya agar pas tulisan pibedeee dimdimnya di ganti happy birthday dimdim terus muncul foto foto

Bisa. Karena foto-foto kamu sudah memakai foto1.jpg sampai foto6.jpg di bagian memory , kita bisa bikin layar paling awal berubah menjadi:

“Happy Birthday Dimdim ♡” → selesai animasi → foto-foto muncul satu per satu → baru bisa tap untuk masuk ke website.

Saat ini teks intro memang dibuat oleh JavaScript dengan const message = "pibesdeee dimdimmm"; .

1. Ganti bagian HTML intro

Cari bagian:

<div class="intro-text" id="introText">
    <!-- HURUF DIBUAT OLEH JAVASCRIPT -->
</div>

<p class="intro-tap">
    tap anywhere ♡
</p>

Ganti menjadi:

<div class="intro-text" id="introText">
    <!-- HURUF DIBUAT OLEH JAVASCRIPT -->
</div>

<div class="intro-photos" id="introPhotos">
    <img src="foto1.jpg" alt="Memory 1">
    <img src="foto2.jpg" alt="Memory 2">
    <img src="foto3.jpg" alt="Memory 3">
    <img src="foto4.jpg" alt="Memory 4">
    <img src="foto5.jpg" alt="Memory 5">
    <img src="foto6.jpg" alt="Memory 6">
</div>

<p class="intro-tap" id="introTap">
    tap anywhere ♡
</p>
2. Tambahkan CSS untuk foto yang muncul

Di style.css, tambahkan setelah CSS .intro-text .letter.space:

/* ==================================================
   INTRO PHOTO MEMORIES
================================================== */

.intro-photos {
    width: min(850px, 92vw);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    opacity: 0;
    transform: translateY(35px) scale(0.95);

    pointer-events: none;

    transition:
        opacity 1s ease,
        transform 1s cubic-bezier(.34, 1.56, .64, 1);

    max-height: 0;
    overflow: hidden;
}

.intro-photos.show {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 300px;
    pointer-events: auto;
}

.intro-photos img {
    width: 105px;
    height: 130px;

    object-fit: cover;

    background: white;
    padding: 6px;

    box-shadow:
        0 8px 20px rgba(90, 50, 60, 0.18);

    opacity: 0;
    transform: translateY(30px) rotate(0deg);

    animation: none;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.intro-photos.show img {
    animation: introPhotoAppear 0.7s ease forwards;
}

.intro-photos.show img:nth-child(1) {
    animation-delay: 0.05s;
    transform: rotate(-7deg);
}

.intro-photos.show img:nth-child(2) {
    animation-delay: 0.15s;
    transform: rotate(4deg);
}

.intro-photos.show img:nth-child(3) {
    animation-delay: 0.25s;
    transform: rotate(-3deg);
}

.intro-photos.show img:nth-child(4) {
    animation-delay: 0.35s;
    transform: rotate(6deg);
}

.intro-photos.show img:nth-child(5) {
    animation-delay: 0.45s;
    transform: rotate(-5deg);
}

.intro-photos.show img:nth-child(6) {
    animation-delay: 0.55s;
    transform: rotate(3deg);
}

.intro-photos img:hover {
    transform: translateY(-8px) rotate(0deg) scale(1.05) !important;

    box-shadow:
        0 15px 30px rgba(90, 50, 60, 0.25);
}

@keyframes introPhotoAppear {

    0% {
        opacity: 0;
        transform: translateY(40px) scale(0.7) rotate(0deg);
    }

    70% {
        opacity: 1;
        transform: translateY(-6px) scale(1.03) rotate(var(--rotation));
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1) rotate(var(--rotation));
    }

}


/* ==================================================
   INTRO TAP
================================================== */

.intro-tap.hidden {
    opacity: 0;
    pointer-events: none;
}


/* MOBILE */

@media (max-width: 768px) {

    .intro-photos {
        width: 94vw;
        gap: 7px;
    }

    .intro-photos img {
        width: 78px;
        height: 100px;
        padding: 4px;
    }

}
3. Ganti fungsi initIntroScreen() di script.js

Bagian intro kamu sekarang menggunakan:

const message = "pibesdeee dimdimmm";

Supaya alurnya menjadi Happy Birthday → foto muncul, ganti seluruh fungsi initIntroScreen() dengan ini:

/* ==================================================
   INTRO TEXT ANIMATION
   HAPPY BIRTHDAY DIMDIM
   Lalu foto-foto muncul
================================================== */

function initIntroScreen() {

    const introEl =
        document.getElementById("introScreen");

    const textEl =
        document.getElementById("introText");

    const photosEl =
        document.getElementById("introPhotos");

    const tapEl =
        document.getElementById("introTap");

    if (!introEl || !textEl) {
        return;
    }


    /* ==============================================
       TEXT
    ============================================== */

    const message = "Happy Birthday Dimdim ♡";

    const colors = [
        "#95606d",
        "#7d4e5b",
        "#a97885",
        "#704650"
    ];


    message.split("").forEach(function(char, index) {

        const letter =
            document.createElement("span");

        letter.className =
            "letter" + (char === " " ? " space" : "");

        letter.textContent =
            char === " "
                ? "\u00A0"
                : char;

        letter.style.setProperty(
            "--d",
            (index * 0.07) + "s"
        );

        letter.style.setProperty(
            "--c",
            colors[index % colors.length]
        );

        textEl.appendChild(letter);

    });


    /* ==============================================
       KUNCI SCROLL
    ============================================== */

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";


    /* ==============================================
       TUNGGU SAMPAI TULISAN SELESAI
       LALU FOTO MUNCUL
    ============================================== */

    const textDuration =
        message.length * 70 + 1200;


    setTimeout(function() {

        if (photosEl) {

            photosEl.classList.add("show");

        }

        if (tapEl) {

            tapEl.classList.add("hidden");

        }

        /* Ledakan hati */

        burstHearts(introEl, 18);


        /* Setelah foto muncul,
           munculkan tulisan tap */

        setTimeout(function() {

            if (tapEl) {

                tapEl.classList.remove("hidden");

            }

        }, 900);

    }, textDuration);


    /* ==============================================
       TUTUP INTRO
    ============================================== */

    function dismissIntro() {

        burstHearts(introEl, 20);

        introEl.classList.add("intro-hidden");

        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

        setTimeout(function() {

            introEl.remove();

        }, 650);

    }


    /* ==============================================
       CLICK
    ============================================== */

    introEl.addEventListener(
        "click",
        dismissIntro
    );


    /* ==============================================
       KEYBOARD
    ============================================== */

    introEl.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                dismissIntro();

            }

        }
    );

}
Hasil akhirnya

Urutannya nanti:

┌─────────────────────────────────┐
│                                 │
│    H a p p y  B i r t h d a y  │
│            D i m d i m ♡        │
│                                 │
│       ↓ setelah animasi ↓       │
│                                 │
│    📸  📸  📸                   │
│      📸  📸  📸                 │
│                                 │
│         tap anywhere ♡          │
│                                 │
└─────────────────────────────────┘

Foto akan muncul satu per satu seperti polaroid, sedikit miring dan dengan efek naik dari bawah. Setelah itu tinggal tap layar dan masuk ke website seperti sebelumnya.

Catatan: foto yang dipakai adalah foto1.jpg–foto6.jpg, sesuai nama file yang sudah kamu gunakan di memory website.

Kalau yang kamu maksud foto-fotonya muncul tepat setelah tulisan “Happy Birthday Dimdim” selesai, tetapi bukan di layar intro—melainkan langsung transisi ke halaman foto full-screen, itu juga bisa dibuat dan hasilnya bakal lebih cinematic.

kirimkan kodenya dengan lengkap

Bisa. Karena kode HTML/CSS/JS kamu cukup panjang, aku kasih versi lengkap bagian yang perlu diganti supaya alurnya jadi:

“Happy Birthday Dimdim ♡” → foto-foto muncul satu per satu → klik/tap → masuk ke website utama.

1. HTML — ganti bagian intro kamu dengan ini
<div class="intro-screen" id="introScreen" role="button" tabindex="0" aria-label="Ketuk untuk membuka">

    <div class="intro-text" id="introText">
        <!-- Huruf dibuat oleh JavaScript -->
    </div>

    <div class="intro-photos" id="introPhotos">
        <img src="foto1.jpg" alt="Memory 1">
        <img src="foto2.jpg" alt="Memory 2">
        <img src="foto3.jpg" alt="Memory 3">
        <img src="foto4.jpg" alt="Memory 4">
        <img src="foto5.jpg" alt="Memory 5">
        <img src="foto6.jpg" alt="Memory 6">
    </div>

    <p class="intro-tap" id="introTap">
        tap anywhere ♡
    </p>

</div>

Foto harus berada di folder yang sama dengan HTML, misalnya:

index.html
style.css
script.js
foto1.jpg
foto2.jpg
foto3.jpg
foto4.jpg
foto5.jpg
foto6.jpg
2. CSS — tambahkan kode ini

Masukkan di bagian paling bawah CSS kamu supaya tidak bentrok dengan style yang sudah ada.

/* =========================================
   INTRO BIRTHDAY
   ========================================= */

.intro-screen {
    position: fixed;
    inset: 0;
    z-index: 99999;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 20px;

    background:
        radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(255, 245, 250, 0.98) 45%,
            rgba(255, 225, 238, 1) 100%
        );

    overflow: hidden;

    cursor: pointer;

    transition:
        opacity 0.8s ease,
        visibility 0.8s ease;
}


/* Saat intro ditutup */
.intro-screen.hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}


/* =========================================
   TEXT
   ========================================= */

.intro-text {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    max-width: 90vw;

    text-align: center;

    margin-bottom: 25px;
}


.intro-text .letter {
    display: inline-block;

    opacity: 0;

    transform:
        translateY(25px)
        scale(0.7);

    animation: introLetterAppear 0.7s ease forwards;

    font-size: clamp(2rem, 7vw, 5rem);

    font-weight: 800;

    line-height: 1.1;

    letter-spacing: 1px;

    text-shadow:
        0 4px 15px rgba(255, 105, 160, 0.15);

    white-space: pre;
}


@keyframes introLetterAppear {

    0% {
        opacity: 0;

        transform:
            translateY(25px)
            scale(0.7);
    }

    60% {
        opacity: 1;

        transform:
            translateY(-5px)
            scale(1.08);
    }

    100% {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


/* =========================================
   FOTO INTRO
   ========================================= */

.intro-photos {
    width: min(900px, 92vw);

    display: flex;

    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 14px;

    margin-top: 5px;

    opacity: 0;

    max-height: 0;

    overflow: hidden;

    transform: translateY(30px) scale(0.95);

    transition:
        opacity 0.8s ease,
        max-height 1s ease,
        transform 0.8s ease;
}


/* Foto muncul */
.intro-photos.show {
    opacity: 1;

    max-height: 420px;

    transform:
        translateY(0)
        scale(1);
}


/* Foto */
.intro-photos img {
    --rotation: 0deg;

    width: clamp(90px, 13vw, 145px);

    aspect-ratio: 1 / 1;

    object-fit: cover;

    border-radius: 18px;

    padding: 6px;

    background: white;

    box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.15);

    opacity: 0;

    transform:
        translateY(40px)
        scale(0.7)
        rotate(0deg);

    animation: none;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}


/* Saat container sudah muncul */
.intro-photos.show img {
    animation:
        introPhotoAppear 0.8s
        cubic-bezier(.2, .8, .2, 1)
        forwards;
}


/* Rotasi masing-masing foto */

.intro-photos img:nth-child(1) {
    --rotation: -7deg;
    animation-delay: 0.05s;
}

.intro-photos img:nth-child(2) {
    --rotation: 4deg;
    animation-delay: 0.15s;
}

.intro-photos img:nth-child(3) {
    --rotation: -3deg;
    animation-delay: 0.25s;
}

.intro-photos img:nth-child(4) {
    --rotation: 6deg;
    animation-delay: 0.35s;
}

.intro-photos img:nth-child(5) {
    --rotation: -5deg;
    animation-delay: 0.45s;
}

.intro-photos img:nth-child(6) {
    --rotation: 3deg;
    animation-delay: 0.55s;
}


@keyframes introPhotoAppear {

    0% {
        opacity: 0;

        transform:
            translateY(40px)
            scale(0.7)
            rotate(0deg);
    }

    70% {
        opacity: 1;

        transform:
            translateY(-7px)
            scale(1.05)
            rotate(var(--rotation));
    }

    100% {
        opacity: 1;

        transform:
            translateY(0)
            scale(1)
            rotate(var(--rotation));
    }
}


/* Hover foto */

.intro-photos img:hover {
    transform:
        translateY(-10px)
        scale(1.08)
        rotate(0deg) !important;

    box-shadow:
        0 18px 35px rgba(0, 0, 0, 0.2);

    z-index: 5;
}


/* =========================================
   TAP TEXT
   ========================================= */

.intro-tap {
    margin-top: 25px;

    font-size: 0.95rem;

    letter-spacing: 2px;

    color: #a45a78;

    opacity: 0;

    animation: none;

    transition: opacity 0.6s ease;
}


.intro-tap.show {
    opacity: 1;

    animation:
        tapPulse 1.8s
        ease-in-out
        infinite;
}


@keyframes tapPulse {

    0%,
    100% {
        transform: translateY(0);

        opacity: 0.65;
    }

    50% {
        transform: translateY(-4px);

        opacity: 1;
    }
}


/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 600px) {

    .intro-screen {
        padding: 20px 12px;
    }

    .intro-text {
        max-width: 95vw;

        margin-bottom: 20px;
    }

    .intro-text .letter {
        font-size: clamp(
            1.7rem,
            9vw,
            3rem
        );
    }

    .intro-photos {
        width: 95vw;

        gap: 8px;
    }

    .intro-photos img {
        width: calc(33.333% - 8px);

        max-width: 105px;

        border-radius: 14px;

        padding: 4px;
    }

    .intro-photos.show {
        max-height: 400px;
    }

    .intro-tap {
        margin-top: 18px;

        font-size: 0.8rem;
    }
}
3. JavaScript — ganti initIntroScreen() lama

Di file JS kamu, cari:

function initIntroScreen() {

sampai fungsi tersebut selesai.

Hapus fungsi lama dan ganti seluruhnya dengan ini:

function initIntroScreen() {

    const introScreen = document.getElementById("introScreen");
    const introText = document.getElementById("introText");
    const introPhotos = document.getElementById("introPhotos");
    const introTap = document.getElementById("introTap");

    if (!introScreen || !introText) {
        return;
    }


    /* =========================================
       PESAN INTRO
       ========================================= */

    const message = "Happy Birthday Dimdim ♡";


    /* Warna huruf */

    const colors = [
        "#e76f9c",
        "#d95f91",
        "#c95d8f",
        "#b85c8d",
        "#a95686",
        "#9c547f"
    ];


    /* Kosongkan text */

    introText.innerHTML = "";


    /* =========================================
       MEMBUAT HURUF SATU PER SATU
       ========================================= */

    [...message].forEach((char, index) => {

        const span = document.createElement("span");

        span.className = "letter";

        span.textContent = char;

        span.style.color =
            colors[index % colors.length];

        span.style.animationDelay =
            `${index * 70}ms`;

        introText.appendChild(span);

    });


    /* =========================================
       ANIMASI FOTO SETELAH TEKS
       ========================================= */

    const textDuration =
        (message.length * 70) + 700;


    setTimeout(() => {

        if (introPhotos) {

            introPhotos.classList.add("show");

        }


        /* Munculkan tulisan tap */

        setTimeout(() => {

            if (introTap) {
                introTap.classList.add("show");
            }

        }, 900);


        /* Efek hati */

        if (typeof burstHearts === "function") {

            burstHearts();

        }

    }, textDuration);


    /* =========================================
       FUNGSI MEMBUKA WEBSITE
       ========================================= */

    let isOpening = false;


    function openIntro() {

        if (isOpening) {
            return;
        }

        isOpening = true;


        /* Efek hati */

        if (typeof burstHearts === "function") {

            burstHearts();

        }


        /* Hilangkan intro */

        introScreen.classList.add("hide");


        /* Buka scroll */

        document.body.style.overflow = "";


        /* Hapus dari halaman setelah animasi */

        setTimeout(() => {

            introScreen.style.display = "none";

        }, 900);

    }


    /* =========================================
       CLICK / TAP
       ========================================= */

    introScreen.addEventListener(
        "click",
        openIntro
    );


    /* =========================================
       KEYBOARD
       ========================================= */

    introScreen.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openIntro();

            }

        }
    );


    /* =========================================
       LOCK SCROLL SAAT INTRO
       ========================================= */

    document.body.style.overflow = "hidden";

}
4. Pastikan bagian DOMContentLoaded tetap seperti ini

Di bagian paling bawah JS kamu, kamu sudah punya pemanggilan fungsi. Pastikan initIntroScreen() tetap dipanggil:

document.addEventListener("DOMContentLoaded", () => {

    initIntroScreen();

    initScrollReveal();

    initParallaxHearts();

    // fungsi-fungsi lain milik kamu tetap di sini

});

Jangan menghapus fungsi lain yang sudah ada di JS kamu.

Hasil akhirnya

Saat website dibuka:

          Happy Birthday Dimdim ♡

Huruf akan muncul satu per satu.

Kemudian:

       📷  📷  📷
       📷  📷  📷

          tap anywhere ♡

Foto foto1.jpg sampai foto6.jpg muncul satu per satu dengan efek polaroid.

Setelah tap/click, intro menghilang dan website ulang tahun kamu terbuka seperti sebelumnya.

/* ==================================================
OUR LITTLE STORY
Bibil ♡ Dimdim
================================================== */

/* ==================================================
DATA MEMORY
================================================== */

const pages = [

{
    type: "photo",
    number: 1,
    image: "foto1.jpg",
    text: "pertama kali bibil ngajak ngajak dimdim ngerjain tugas di Socrates Vegan"
},

{
    type: "photo",
    number: 2,
    image: "foto2.jpg",
    text: "pertama kali kita nontonnn pulang kuliahh terus pulang nonton kitaa mamm"
},

{
    type: "photo",
    number: 3,
    image: "foto3.jpg",
    text: "bibil ke rumahh dimdim krna mau ke pantee terus dari situu kita makinn dekett"
},

{
    type: "photo",
    number: 4,
    image: "foto4.jpg",
    text: "kitaa ke pet cafee dan disituu bibil ceritainn kehidupann bibil ke dimdim krna bibil uda percyaa sma dimdim padahl kita belumm pcrann"
},

{
    type: "photo",
    number: 5,
    image: "foto5.jpg",
    text: "kitaa uda pcarann dann ituu pertama kali kita pigii jauhhh"
},

{
    type: "photo",
    number: 6,
    image: "foto6.jpg",
    text: "pertama kalinyaa bibil taunn baruan sma cowoo"
},

{
    type: "video",
    number: 7,
    video: "video1.mp4",
    text: "kitaa mainn PlayStation, nntonn netflixx dann ituu masi maluu\" krna masi baruu\" pcalann, kalo sekarang sudahh tidaa ada maloe nyaaa"
},

{
    type: "video",
    number: 8,
    video: "video2.mp4",
    text: "bibil screen recording dimdim lagi main gitar pass kitaa pecee, sekarang kita uda jarang pece hampir ga pernh punn :((("
},

{
    type: "video",
    number: 9,
    video: "video3.mp4",
    text: "kitaa ke tamannn dann pulangnyaa kita nontonnn, ituu pass ulang tahun bibill, makacii yahh bibil sngtt senangg cekalii pada saat ituu"
},

{
    type: "video",
    number: 10,
    video: "video4.mp4",
    text: "bibil ajak dimdim mainn tiktokk dann dimdimm mauuu, tapi sekarang dimdim gamauu lagi bibil ajak tiktokann :(((("
}

];

let currentPage = 0;

/* ==================================================
OPEN WEBSITE
================================================== */

function openWebsite() {

const music =
    document.getElementById("backgroundMusic");

if (music) {

    music.volume = 0.45;

    music.play().then(function() {

        const button = document.getElementById("musicButton");

        if (button) {
            button.classList.add("playing");
        }

    }).catch(function() {

        console.log(
            "Music belum bisa diputar."
        );

    });

}


const birthday =
    document.getElementById("birthday");

if (birthday) {

    birthday.scrollIntoView({
        behavior: "smooth"
    });

}

}

/* ==================================================
MUSIC CONTROL
================================================== */

function toggleMusic() {

const music =
    document.getElementById("backgroundMusic");

const button =
    document.getElementById("musicButton");


if (!music || !button) {
    return;
}


if (music.paused) {

    music.play().then(function() {

        button.classList.add("playing");

        button.innerHTML = "♫";

    }).catch(function() {

        console.log(
            "Musik tidak dapat diputar."
        );

    });

}

else {

    music.pause();

    button.classList.remove("playing");

    button.innerHTML = "🔇";

}

}

/* ==================================================
SHOW MEMORY PAGE
================================================== */

function showPage(animation = "next") {

const container =
    document.getElementById("bookPage");


if (!container) {
    return;
}


const page =
    pages[currentPage];


if (!page) {
    return;
}


let mediaHTML = "";


/* ==================================================
   PHOTO
================================================== */

if (page.type === "photo") {

    mediaHTML = `

        <div class="book-photo">

            <div class="tape"></div>

            <img
                src="${page.image}"
                alt="Memory ${page.number}"
                loading="lazy"
            >

        </div>

    `;

}


/* ==================================================
   VIDEO
================================================== */

else {

    mediaHTML = `

        <div class="book-video">

            <div class="tape"></div>

            <video
                controls
                playsinline
                webkit-playsinline
                preload="metadata"
                controlsList="nodownload"
            >

                <source
                    src="${page.video}"
                    type="video/mp4"
                >

                Browser kamu tidak mendukung video.

            </video>

        </div>

    `;

}


/* ==================================================
   CONTENT
================================================== */

container.innerHTML = `

    <div class="page-left">

        <p class="page-count">
            MEMORY ${page.number}
        </p>

        ${mediaHTML}

    </div>


    <div class="page-right">

        <p class="page-count">
            OUR LITTLE MOMENT
        </p>

        <p class="memory-caption">
            ${page.text}
        </p>

    </div>

`;


/* ==================================================
   ANIMATION
================================================== */

container.classList.remove(
    "page-next",
    "page-prev"
);


void container.offsetWidth;


if (animation === "prev") {

    container.classList.add(
        "page-prev"
    );

}

else {

    container.classList.add(
        "page-next"
    );

}


/* ==================================================
   PAGE NUMBER
================================================== */

const pageNumber =
    document.getElementById(
        "pageNumber"
    );


if (pageNumber) {

    pageNumber.textContent =
        `${currentPage + 1} / ${pages.length}`;

}

}

/* ==================================================
NEXT
================================================== */

function nextPage() {

if (
    currentPage <
    pages.length - 1
) {

    currentPage++;

    showPage("next");

    scrollToBook();

}

else {

    const closing =
        document.querySelector(
            ".closing-section"
        );


    if (closing) {

        closing.scrollIntoView({
            behavior: "smooth"
        });

    }

}

}

/* ==================================================
PREVIOUS
================================================== */

function previousPage() {

if (currentPage > 0) {

    currentPage--;

    showPage("prev");

    scrollToBook();

}

}

/* ==================================================
SCROLL TO BOOK
================================================== */

function scrollToBook() {

const book =
    document.getElementById(
        "bookPages"
    );


if (book) {

    book.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

}

/* ==================================================
OPEN BOOK
================================================== */

function openStoryBook(event) {

if (event) {

    event.preventDefault();

}


const cover =
    document.querySelector(
        ".book-intro"
    );


const book =
    document.getElementById(
        "bookPages"
    );


if (!cover || !book) {

    scrollToBook();

    return;

}


/* Animasi cover */

cover.classList.add(
    "opening-book"
);


/* Tunggu animasi selesai */

setTimeout(function() {

    cover.classList.add(
        "book-hidden"
    );


    currentPage = 0;

    showPage("next");


    book.scrollIntoView({
        behavior: "smooth"
    });

}, 1000);

}

/* ==================================================
CLICK HEART
================================================== */

function createHeart(x, y) {

const heart =
    document.createElement("span");


heart.className =
    "click-heart";


heart.innerHTML =
    Math.random() > 0.5
        ? "♡"
        : "♥";


heart.style.left =
    x + "px";


heart.style.top =
    y + "px";


heart.style.fontSize =
    (18 + Math.random() * 12) + "px";


document.body.appendChild(
    heart
);


setTimeout(function() {

    heart.remove();

}, 1000);

}

/* ==================================================
BURST HEARTS
(dipakai saat judul ulang tahun muncul di layar)
================================================== */

function burstHearts(container, count = 14) {

if (!container) {
    return;
}

for (let i = 0; i < count; i++) {

    const heart =
        document.createElement("span");

    heart.className = "burst-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "♡" : "♥";

    const angle =
        Math.random() * Math.PI * 2;

    const distance =
        60 + Math.random() * 100;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    heart.style.setProperty("--dx", dx + "px");
    heart.style.setProperty("--dy", dy + "px");

    heart.style.fontSize =
        (14 + Math.random() * 16) + "px";

    heart.style.animationDelay =
        (Math.random() * 0.2) + "s";

    container.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 1500);

}

}

/* ==================================================
INTRO TEXT ANIMATION
"pibesdeee dimdimmm" muncul huruf demi huruf
di layar paling awal, sebelum situs dibuka
================================================== */

function initIntroScreen() {

const introEl =
    document.getElementById("introScreen");

const textEl =
    document.getElementById("introText");

if (!introEl || !textEl) {
    return;
}

const message = "Happy Birthday Dimdimmm";

const colors = [
    "#95606d",
    "#7d4e5b",
    "#a97885",
    "#704650"
];

message.split("").forEach(function(char, index) {

    const letter =
        document.createElement("span");

    letter.className =
        "letter" + (char === " " ? " space" : "");

    letter.textContent =
        char === " " ? "\u00A0" : char;

    letter.style.setProperty(
        "--d",
        (index * 0.07) + "s"
    );

    letter.style.setProperty(
        "--c",
        colors[index % colors.length]
    );

    textEl.appendChild(letter);

});


/* Kunci scroll selama intro tampil */

document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";


function dismissIntro() {

    burstHearts(introEl, 18);

    introEl.classList.add("intro-hidden");

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    setTimeout(function() {

        introEl.remove();

    }, 650);

}

introEl.addEventListener("click", dismissIntro);

introEl.addEventListener("keydown", function(event) {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        dismissIntro();

    }

});

}

/* ==================================================
SCROLL REVEAL
Menambahkan animasi fade + slide-up bertahap
saat elemen masuk ke layar
================================================== */

function initScrollReveal() {

const groups = [
    ".opening-content > *",
    ".birthday-content > *",
    ".book-cover > *",
    ".closing-content > *",
    ".letter-content > p",
    ".letter-signature",
    ".restart-area"
];

const elements =
    document.querySelectorAll(groups.join(", "));

if (!("IntersectionObserver" in window) || elements.length === 0) {

    elements.forEach(function(el) {
        el.classList.add("reveal", "active");
    });

    return;
}

elements.forEach(function(el) {
    el.classList.add("reveal");
});

let birthdayBurstDone = false;

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (!entry.isIntersecting) {
            return;
        }

        const target = entry.target;

        const siblings =
            Array.from(target.parentElement.children)
                .filter(function(el) {
                    return el.classList.contains("reveal");
                });

        const index =
            siblings.indexOf(target);

        target.style.transitionDelay =
            (index * 0.09) + "s";

        target.classList.add("active");

        /* Ledakan hati saat judul ulang tahun kelihatan */

        if (
            !birthdayBurstDone &&
            target.parentElement &&
            target.parentElement.classList.contains("birthday-content") &&
            target.tagName === "H2"
        ) {

            birthdayBurstDone = true;

            setTimeout(function() {

                burstHearts(target.parentElement, 16);

            }, 250);

        }

        observer.unobserve(target);

    });

}, {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px"
});

elements.forEach(function(el) {
    observer.observe(el);
});

/* Garis "TO BE CONTINUED" juga ikut reveal */

const closingLine =
    document.querySelector(".closing-line");

if (closingLine) {

    closingLine.classList.add("reveal");

    const lineObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                lineObserver.unobserve(entry.target);

            }

        });

    }, { threshold: 0.4 });

    lineObserver.observe(closingLine);

}

}

/* ==================================================
PARALLAX HEARTS
Hati di halaman pembuka bergerak halus mengikuti
posisi kursor / sentuhan
================================================== */

function initParallaxHearts() {

const hearts =
    document.querySelector(".hearts");

if (!hearts) {
    return;
}

document.addEventListener("mousemove", function(event) {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 34;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 34;

    hearts.style.transform =
        `translate(${x}px, ${y}px)`;

});

}

/* ==================================================
TILT FOTO & VIDEO DI BUKU KENANGAN
================================================== */

function initPhotoTilt() {

const bookPageEl =
    document.getElementById("bookPage");

if (!bookPageEl) {
    return;
}

bookPageEl.addEventListener("mousemove", function(event) {

    const card =
        event.target.closest(".book-photo, .book-video");

    if (!card) {
        return;
    }

    const rect =
        card.getBoundingClientRect();

    const x =
        (event.clientX - rect.left) / rect.width - 0.5;

    const y =
        (event.clientY - rect.top) / rect.height - 0.5;

    const base =
        card.classList.contains("book-photo") ? -2 : 1;

    card.style.transform =
        `rotate(${base}deg) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;

});

bookPageEl.addEventListener("mouseleave", function() {

    document.querySelectorAll(".book-photo, .book-video")
        .forEach(function(card) {

            card.style.transform =
                card.classList.contains("book-photo")
                    ? "rotate(-2deg)"
                    : "rotate(1deg)";

        });

}, true);

}

/* ==================================================
RIPPLE EFFECT PADA TOMBOL
================================================== */

function initButtonRipple() {

document.addEventListener("click", function(event) {

    const button =
        event.target.closest(
            "button, .main-button, .open-story-button, .restart-button"
        );

    if (!button) {
        return;
    }

    const ripple =
        document.createElement("span");

    ripple.className = "ripple";

    const rect =
        button.getBoundingClientRect();

    const size =
        Math.max(rect.width, rect.height);

    ripple.style.width =
        ripple.style.height = size + "px";

    ripple.style.left =
        (event.clientX - rect.left - size / 2) + "px";

    ripple.style.top =
        (event.clientY - rect.top - size / 2) + "px";

    button.appendChild(ripple);

    setTimeout(function() {

        ripple.remove();

    }, 650);

});

}

/* ==================================================
KLIK HATI PENUTUP
Sentuh hati di halaman closing untuk ledakan kecil
================================================== */

function initClosingHeart() {

const heart =
    document.querySelector(".closing-heart");

if (!heart) {
    return;
}

heart.addEventListener("click", function(event) {

    event.stopPropagation();

    burstHearts(heart.parentElement, 10);

});

}

/* ==================================================
PAGE LOADED
================================================== */

document.addEventListener(
"DOMContentLoaded",
function() {

    /*
        Tampilkan memory pertama
    */

    showPage("next");


    /*
        OPEN OUR STORY
    */

    const openButton =
        document.querySelector(
            ".open-story-button"
        );


    if (openButton) {

        openButton.addEventListener(
            "click",
            openStoryBook
        );

    }


    /*
        RESTART
    */

    const restartButton =
        document.querySelector(
            ".restart-button"
        );


    if (restartButton) {

        restartButton.addEventListener(
            "click",
            function() {

                currentPage = 0;


                setTimeout(function() {

                    showPage("next");

                }, 100);

            }
        );

    }


    /*
        CLICK HEART
    */

    document.addEventListener(
        "click",
        function(event) {

            /*
                Jangan muncul hati saat
                menekan tombol musik
            */

            if (
                event.target.closest(
                    ".music-button"
                )
            ) {

                return;

            }


            createHeart(
                event.clientX,
                event.clientY
            );

        }
    );


    /*
        KEYBOARD
    */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                nextPage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousPage();

            }

        }
    );


    /*
        ANIMASI TAMBAHAN
    */

    initIntroScreen();
    initScrollReveal();
    initParallaxHearts();
    initPhotoTilt();
    initButtonRipple();
    initClosingHeart();

}

);

/* ==================================================
STOP OTHER VIDEOS
================================================== */

document.addEventListener(
"play",
function(event) {

    if (
        event.target &&
        event.target.tagName ===
        "VIDEO"
    ) {

        document
            .querySelectorAll("video")
            .forEach(function(video) {

                if (
                    video !==
                    event.target
                ) {

                    video.pause();

                }

            });

    }

},
true

);

Close
