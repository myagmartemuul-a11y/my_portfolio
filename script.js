// Хэлний өгөгдөл
const translations = {
    mn: {
        nav_home: "Нүүр",
        nav_about: "Тухай",
        nav_projects: "Төслүүд",
        nav_contact: "Холбоо барих",
        hero_title: "Сайн байна уу, Намайг <span>[Нэр]</span> гэдэг",
        hero_desc: "Би бол вэб хөгжүүлэгч юм. Би шинийг санаачлах дуртай.",
        hero_btn: "Миний ажлууд",
        p1_title: "Төслийн нэр 1",
        p1_desc: "Энэ төслийн талаарх товч тайлбар энд байна."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Hello, I am <span>[Name]</span>",
        hero_desc: "I am a Web Developer. I love creating innovative solutions.",
        hero_btn: "View My Work",
        p1_title: "Project Name 1",
        p1_desc: "Brief description of this project goes here."
    }
};

const mnBtn = document.getElementById('lang-mn');
const enBtn = document.getElementById('lang-en');

function changeLanguage(lang) {
    // Товчлуурын идэвхтэй төлөвийг солих
    if (lang === 'mn') {
        mnBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        mnBtn.classList.remove('active');
    }

    // Текстүүдийг солих
    document.getElementById('hero_title').innerHTML = translations[lang].hero_title;
    document.getElementById('hero_desc').innerText = translations[lang].hero_desc;
    document.getElementById('hero_btn').innerText = translations[lang].hero_btn;
    
    // data-key ашиглан олон элементүүдийг солих
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerText = translations[lang][key];
    });
}

mnBtn.addEventListener('click', () => changeLanguage('mn'));
enBtn.addEventListener('click', () => changeLanguage('en'));

// Mobile Menu Toggle (Өмнөх код)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});
