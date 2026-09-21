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
    text: "foto1 pertama kali bibil ngajak ngajak dimdim ngerjain tugas di Socrates Vegan"
},

{
    type: "photo",
    number: 2,
    image: "foto2.jpg",
    text: "foto2 pertama kali kita nontonnn pulang kuliahh terus pulang nonton kitaa mamm"
},

{
    type: "photo",
    number: 3,
    image: "foto3.jpg",
    text: "foto3 bibil ke rumahh dimdim krna mau ke pantee terus dari situu kita makinn dekett"
},

{
    type: "photo",
    number: 4,
    image: "foto4.jpg",
    text: "foto4 kitaa ke pet cafee dan disituu bibil ceritainn kehidupann bibil ke dimdim krna bibil uda percyaa sma dimdim padahl kita belumm pcrann"
},

{
    type: "photo",
    number: 5,
    image: "foto5.jpg",
    text: "foto5 kitaa uda pcarann dann ituu pertama kali kita pigii jauhhh"
},

{
    type: "photo",
    number: 6,
    image: "foto6.jpg",
    text: "foto6 pertama kalinyaa bibil taunn baruan sma cowoo"
},

{
    type: "video",
    number: 7,
    video: "video1.mp4",
    text: "video1 kitaa mainn PlayStation, nntonn netflixx dann ituu masi maluu\" krna masi baruu\" pcalann, kalo sekarang sudahh tidaa ada maloe nyaaa"
},

{
    type: "video",
    number: 8,
    video: "video2.mp4",
    text: "video2 bibil screen recording dimdim lagi main gitar pass kitaa pecee, sekarang kita uda jarang pece hampir ga pernh punn :((("
},

{
    type: "video",
    number: 9,
    video: "video3.mp4",
    text: "video3 kitaa ke tamannn dann pulangnyaa kita nontonnn, ituu pass ulang tahun bibill, makacii yahh bibil sngtt senangg cekalii pada saat ituu"
},

{
    type: "video",
    number: 10,
    video: "video4.mp4",
    text: "video4 bibil ajak dimdim mainn tiktokk dann dimdimm mauuu, tapi sekarang dimdim gamauu lagi bibil ajak tiktokann :(((("
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

    music.play().catch(function() {

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

    }).catch(function() {});

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


/* PHOTO */

if (page.type === "photo") {

    mediaHTML = `

        <div class="book-photo">

            <div class="tape"></div>

            <img
                src="${page.image}"
                alt="Memory ${page.number}"
            >

        </div>

    `;

}


/* VIDEO */

else {

    mediaHTML = `

        <div class="book-video">

            <div class="tape"></div>

            <video
                controls
                playsinline
                preload="metadata"
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

    /*
        Kalau elemen tidak ditemukan,
        tetap buka halaman buku.
    */

    scrollToBook();

    return;

}


/*
    Animasi cover
*/

cover.classList.add(
    "opening-book"
);


/*
    Tunggu animasi selesai
*/

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

                /*
                    Tampilkan lagi halaman pertama
                */

                setTimeout(function() {

                    showPage("next");

                }, 100);

            }
        );

    }


    /*
        Click heart
    */

    document.addEventListener(
        "click",
        function(event) {

            /*
                Jangan muncul hati saat
                menekan tombol musik.
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
        Keyboard
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
