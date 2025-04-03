let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) activeOld.classList.remove('active');

    active = (active + 1) % count;
    list[active].classList.add('active');
};

prev.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) activeOld.classList.remove('active');

    active = (active - 1 + count) % count;
    list[active].classList.add('active');
};

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

  const avatarUpload = document.getElementById('avatar-upload');
  const avatarPreview = document.getElementById('avatar-preview');
  const avatarContainer = document.querySelector('.avatar-container');

  avatarContainer.addEventListener('click', () => {
      avatarUpload.click();
  });

  avatarUpload.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              avatarPreview.src = e.target.result;
          }
          reader.readAsDataURL(file);
      }
  });

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    },
});

