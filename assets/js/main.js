/*==================== PLAY MUSIC ====================*/
const bgMusic = document.getElementById('bg-music');
const musicControl = document.getElementById('music-control');
const musicModal = document.getElementById('music-modal');
const musicBtn = document.getElementById('music-modal-btn');
let musicPlayed = false;

function playMusic() {
    if (!musicPlayed) {
        bgMusic.volume = 0.5;
        bgMusic.play().then(() => {
            musicPlayed = true;
            if(musicControl) {
                const icon = musicControl.querySelector('.music-icon');
                if(icon) icon.classList.add('music-spin');
            }
            if (musicModal) {
                musicModal.classList.add('hidden');
                setTimeout(() => {
                    musicModal.style.display = 'none';
                }, 500);
            }
            console.log("Music started");
        }).catch(error => {
            console.log("Music failed:", error);
            if (musicModal) musicModal.classList.add('hidden');
        });
    }
}

if (musicBtn) {
    musicBtn.addEventListener('click', playMusic);
}

if(musicControl) {
    musicControl.addEventListener('click', () => {
        if(bgMusic.paused) {
            bgMusic.play();
            musicControl.querySelector('.music-icon').classList.add('music-spin');
        } else {
            bgMusic.pause();
            musicControl.querySelector('.music-icon').classList.remove('music-spin');
        }
    });
}

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
});

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`, {
    origin: 'right',
    interval: 100,
});
