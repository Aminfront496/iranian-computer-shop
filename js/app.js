// side menu manager - close and open menu and change icon design
class SideMenuManager {
  constructor(menuIconId, sideMenuId) {
    this.menuIconId = menuIconId;
    this.sideMenuId = sideMenuId;
    document.addEventListener('click', (event) => {
      if (event.target.closest(`#${this.menuIconId}`)) {
        this.toggleMenu();
        this.toggleIcon();
      }
    });
  }
  toggleMenu() {
    const sideMenu = document.getElementById(this.sideMenuId);
    if (sideMenu) {
      sideMenu.classList.toggle('active');
    }
  }
  toggleIcon() {
    const menuIcon = document.getElementById(this.menuIconId);
    if (menuIcon.classList.contains('ri-menu-3-line')) {
      menuIcon.classList.remove('ri-menu-3-line');
      menuIcon.classList.add('ri-close-line');
    } else {
      menuIcon.classList.remove('ri-close-line');
      menuIcon.classList.add('ri-menu-3-line');
    }
  }
}
const menuManager = new SideMenuManager('menu-icon', 'side-menu');

// login popup manager - close and open login popup window
/*class LoginPageManager {
  constructor(openWindowId, loginPopupId, closeWindowId) {
    this.openWindowId = openWindowId;
    this.loginPopupId = loginPopupId;
    this.closeWindowId = closeWindowId;
    document.addEventListener('click', (event) => {
      if (event.target.closest(`#${this.openWindowId}`)) {
        this.openLoginPopup();
      } else if (event.target.closest(`#${this.closeWindowId}`)) {
        this.closeLoginPopup();
      }
    });
  }
  openLoginPopup() {
    const loginPopup = document.getElementById(this.loginPopupId);
    loginPopup.classList.add('active');
  }
  closeLoginPopup() {
    const loginPopup = document.getElementById(this.loginPopupId);
    loginPopup.classList.remove('active');
  }
}
const loginManager = new LoginPageManager('login-option', 'login-popup', 'close-login-popup');*/

// auto type creator
const typed = new Typed('#typed-text', {
  strings: [
    'به فروشگاه ایرانیان کامپیوتر خوش آمدید',
    'مرجع تخصصی تجهیزات دیجیتال و خدمات نرم افزاری',
    'خرید و فروش انواع لپ تاپ و کامپیوتر گیمینگ، دانشجویی، اداری و اقتصادی',
    'با پشتیبانی 24 ساعته، کیفیت برتر، خدمات مطمئن',
    'ایرانیان کامپیوتر، همراه همیشگی شما در مسیر ارتقا...'
  ],
  typeSpeed: 40,   
  backSpeed: 25,    
  backDelay: 2000,  
  loop: true        
});

// advertising banner slider
const bannerAdSlider = new Swiper('.banner-ad-slider', {
  direction: 'horizontal',
  loop: true,
  rtl: true,
  autoplay: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

// memories category slider
const memoriesCategorySlider = new Swiper('.memories-category-slider', {
  direction: 'horizontal',
  rtl: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  freeMode: true,
  speed: 500,
});

// equipment category slider
const equipmentCategorySlider = new Swiper('.equipment-category-slider', {
  direction: 'horizontal',
  rtl: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  freeMode: true,
  speed: 3500,
});

// partners container slider
const partnersContainerSlider = new Swiper('.partners-container-slider', {
  direction: 'horizontal',
  loop: true,
  rtl: true,
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  freeMode: true,
  speed: 3500,
});