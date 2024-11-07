// Скрываем все страницы, кроме главной
const pages = document.querySelectorAll('.page');
pages.forEach(page => page.style.display = 'none');
document.getElementById('home').style.display = 'block';

// Добавляем обработчик клика для ссылок в меню
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Получаем ID страницы
        const pageId = link.getAttribute('href');

        // Скрываем все страницы
        pages.forEach(page => page.style.display = 'none');

        // Отображаем нужную страницу
        document.querySelector(pageId).style.display = 'block';
    });
});

