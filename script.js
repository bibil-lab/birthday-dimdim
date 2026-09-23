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
        image: "images/foto1.jpg",
        text: "pertama kali bibil ngajak ngajak dimdim ngerjain tugas di Socrates Vegan"
    },

    {
        type: "photo",
        number: 2,
        image: "images/foto2.jpg",
        text: "pertama kali kita nontonnn pulang kuliahh terus pulang nonton kitaa mamm"
    },

    {
        type: "photo",
        number: 3,
        image: "images/foto3.jpg",
        text: "bibil ke rumahh dimdim krna mau ke pantee terus dari situu kita makinn dekett"
    },

    {
        type: "photo",
        number: 4,
        image: "images/foto4.jpg",
        text: "kitaa ke pet cafee dan disituu bibil ceritainn kehidupann bibil ke dimdim krna bibil uda percyaa sma dimdim padahl kita belumm pcrann"
    },

    {
        type: "photo",
        number: 5,
        image: "images/foto5.jpg",
        text: "kitaa uda pcarann dann ituu pertama kali kita pigii jauhhh"
    },

    {
        type: "photo",
        number: 6,
        image: "images/foto6.jpg",
        text: "pertama kalinyaa bibil taunn baruan sma cowoo"
    },

    {
        type: "video",
        number: 7,
        video: "videos/video1.mp4",
        text: "kitaa mainn PlayStation, nntonn netflixx dann ituu masi maluu\" krna masi baruu\" pcalann, kalo sekarang sudahh tidaa ada maloe nyaaa"
    },

    {
        type: "video",
        number: 8,
        video: "videos/video2.mp4",
        text: "bibil screen recording dimdim lagi main gitar pass kitaa pecee, sekarang kita uda jarang pece hampir ga pernh punn :((("
    },

    {
        type: "video",
        number: 9,
        video: "videos/video3.mp4",
        text: "kitaa ke tamannn dann pulangnyaa kita nontonnn, ituu pass ulang tahun bibill, makacii yahh bibil sngtt senangg cekalii pada saat ituu"
    },

    {
        type: "video",
        number: 10,
        video: "videos/video4.mp4",
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
RENDER PAGE HTML
Menghasilkan markup satu halaman (foto/video + caption),
dipakai untuk halaman statis maupun kedua sisi lembar
yang membalik
================================================== */

function renderPageHTML(page) {

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


    return `

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

}


/* ==================================================
UPDATE PAGE NUMBER
================================================== */

function updatePageNumber() {

    const pageNumber =
        document.getElementById("pageNumber");

    if (pageNumber) {

        pageNumber.textContent =
            `${currentPage + 1} / ${pages.length}`;

    }

}


/* ==================================================
RENDER STATIC PAGE (tanpa animasi flip)
Dipakai saat halaman pertama kali dimuat / buku dibuka
================================================== */

function renderStaticPage(index) {

    const container =
        document.getElementById("bookPage");

    const page =
        pages[index];

    if (!container || !page) {
        return;
    }

    currentPage = index;

    container.innerHTML =
        renderPageHTML(page);

    updatePageNumber();

}


/* ==================================================
FLIP TO PAGE
Membalik satu lembar penuh dari sisi spine (kiri untuk
maju, kanan untuk mundur), seperti buku sungguhan
================================================== */

let isFlipping = false;

function flipToPage(targetIndex, direction) {

    if (
        isFlipping ||
        targetIndex < 0 ||
        targetIndex >= pages.length
    ) {

        return false;

    }

    const leaf =
        document.getElementById("bookLeaf");

    const leafFront =
        document.getElementById("leafFront");

    const leafBack =
        document.getElementById("leafBack");

    const staticContainer =
        document.getElementById("bookPage");

    if (!leaf || !leafFront || !leafBack || !staticContainer) {

        return false;

    }

    isFlipping = true;


    /* Sisi depan lembar = halaman yang sedang terlihat sekarang */

    leafFront.innerHTML =
        renderPageHTML(pages[currentPage]);


    /* Sisi belakang lembar = halaman tujuan */

    leafBack.innerHTML =
        renderPageHTML(pages[targetIndex]);


    leaf.style.transformOrigin =
        direction === "next" ? "left center" : "right center";

    leaf.classList.remove("flip-next", "flip-prev");

    leaf.style.visibility = "visible";


    /* Paksa reflow supaya reset animasi berlaku bersih */

    void leaf.offsetWidth;


    /* Halaman statis di bawah lembar langsung diperbarui —
       tertutup rapat oleh sisi depan lembar selama animasi
       berjalan, jadi tidak kelihatan berganti tiba-tiba */

    currentPage = targetIndex;

    staticContainer.innerHTML =
        renderPageHTML(pages[currentPage]);

    updatePageNumber();


    leaf.classList.add(
        direction === "next" ? "flip-next" : "flip-prev"
    );


    function handleFlipEnd() {

        leaf.style.visibility = "hidden";

        leaf.classList.remove("flip-next", "flip-prev");

        leafFront.innerHTML = "";
        leafBack.innerHTML = "";

        isFlipping = false;

        leaf.removeEventListener("animationend", handleFlipEnd);

    }

    leaf.addEventListener("animationend", handleFlipEnd);


    /* Jaring pengaman kalau animationend tidak terpicu
       (misal tab tidak aktif) */

    setTimeout(function() {

        if (isFlipping) {

            handleFlipEnd();

        }

    }, 1100);

    return true;

}


/* ==================================================
NEXT
================================================== */

function nextPage() {

    if (isFlipping) {
        return;
    }

    if (currentPage < pages.length - 1) {

        flipToPage(currentPage + 1, "next");

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

    if (isFlipping) {
        return;
    }

    if (currentPage > 0) {

        flipToPage(currentPage - 1, "prev");

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


        renderStaticPage(0);


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
"Happy Birthday Dimdim" muncul huruf demi huruf
di layar paling awal, sebelum situs dibuka.

Setiap KATA dibungkus dalam satu span ".word" (tidak
boleh terpotong di tengah kata saat wrap ke baris baru),
supaya teks tetap rapi, simetris, dan tetap di tengah
tanpa menabrak / menutupi foto-foto di sekitarnya.
================================================== */

function initIntroScreen() {

    const introEl =
        document.getElementById("introScreen");

    const textEl =
        document.getElementById("introText");

    if (!introEl || !textEl) {
        return;
    }

    const message = "Happy Birthday Dimdim";

    const colors = [
        "#95606d",
        "#7d4e5b",
        "#a97885",
        "#704650"
    ];

    const words = message.split(" ");

    let globalIndex = 0;

    words.forEach(function(word, wordIndex) {

        const wordEl =
            document.createElement("span");

        wordEl.className = "word";

        word.split("").forEach(function(char) {

            const letter =
                document.createElement("span");

            letter.className = "letter";

            letter.textContent = char;

            letter.style.setProperty(
                "--d",
                (globalIndex * 0.07) + "s"
            );

            letter.style.setProperty(
                "--c",
                colors[globalIndex % colors.length]
            );

            wordEl.appendChild(letter);

            globalIndex++;

        });

        textEl.appendChild(wordEl);


        /* Spasi di ANTARA kata dibuat sebagai elemen
           terpisah supaya baris boleh membungkus di sini,
           tapi tidak di tengah kata itu sendiri */

        if (wordIndex < words.length - 1) {

            const space =
                document.createElement("span");

            space.className = "letter space";

            space.textContent = "\u00A0";

            space.style.setProperty(
                "--d",
                (globalIndex * 0.07) + "s"
            );

            textEl.appendChild(space);

            globalIndex++;

        }

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

        renderStaticPage(0);


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

                    setTimeout(function() {

                        renderStaticPage(0);

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
