import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './theme/global.scss';
/* import { library, dom } from '@fortawesome/fontawesome-svg-core' */
/* import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' */
import 'bootstrap';
import $ from 'jquery'

/* library.add(fas, far, fab)  */
/* dom.i2svg()  */

Swiper.use([Navigation, Pagination, Autoplay]);

const swipeBrands = new Swiper('.swipeBrands', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3
        },
        970: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 4
        },
        1224: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 5
        },
    }
});

const swipeServicios = new Swiper('.swipeServicios', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    grabCursor: true,
    observer: true,
    observeParents: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination-services'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
            allowTouchMove: false
        },
    }
});

const swipeMultas = new Swiper('.swipeMultas', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    grabCursor: true,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3
        },
    }
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var paneTarget = $(e.target).attr('href');
    var $thePane = $('.tab-pane' + paneTarget);
    var paneIndex = $thePane.index();
    console.log(paneIndex);
    if(paneIndex > 0) {
        $('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);
    } else {
        $('.progress-bar').css('width', '50%').attr('aria-valuenow', 50);
    }
});


(function matchHeight(){
    var getDivs = document.getElementsByClassName('body-box');
    var arrayLength = getDivs.length;
    var heights = [];
    for (var i = 0; i < arrayLength; i++) {
        heights.push(getDivs[i].offsetHeight);
    }
    function getHighest() {
      return Math.max(...heights);
    }
    var tallest = getHighest();
  
    for (var i = 0; i < getDivs.length; i++) {
        getDivs[i].style.height = tallest + "px";
    }
  })();

/*   allowTouchMove: false, */