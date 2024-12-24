const resourcesSection = document.getElementById('resources');
const newResourceButton = document.getElementById('addResourceButton');

newResourceButton.addEventListener('click', () => {
    const newResource = prompt('Введите URL нового ресурса:');
    const newResourceName = prompt('Введите название нового ресурса:');
    
    if (newResource && newResourceName) {
        const newListItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = newResource;
        newLink.target = '_blank';
        newLink.textContent = newResourceName;
        newListItem.appendChild(newLink);
        resourcesSection.querySelector('ul').appendChild(newListItem);
    }
});
const resourceForm = document.getElementById('resourceForm');
const resourceList = document.getElementById('resourceList');

// Функция для проверки URL
function isValidURL(string) {
    const res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
}

resourceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const newResource = document.getElementById('resourceURL').value;
    const newResourceName = document.getElementById('resourceName').value;

    if (isValidURL(newResource)) {
        const newListItem = document.createElement('li');
        newListItem.classList.add('resource-item'); // Добавляем класс для анимации
        const newLink = document.createElement('a');
        newLink.href = newResource;
        newLink.target = '_blank';
        newLink.textContent = newResourceName;
        newListItem.appendChild(newLink);
        resourceList.appendChild(newListItem);

        // Очищаем поля ввода
        document.getElementById('resourceURL').value = '';
        document.getElementById('resourceName').value = '';
    } else {
        alert('Пожалуйста, введите действительный URL.');
    }
});
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Массивы с текстами для карусели
const titles = [
    "Основные риски дезинформации:",
    "Дополнительные риски:",
    "Экономические и социальные последствия:"
];

const texts = [
    "Дезинформация может подрывать доверие к СМИ и институтам, создавая поляризацию в обществе.",
    "Ложные сведения о здоровье могут привести к опасным последствиям, снижая уровень вакцинации.",
    "Ложные новости о компаниях могут вызвать панические продажи акций и другие нестабильности на финансовых рынках."
];

function updateCarousel() {
    const totalItems = carouselItems.length;

    // Убираем активный класс у всех элементов
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active'); // Добавляем активный класс только к текущему элементу
            // Обновляем текст заголовка и параграфа
            document.getElementById(`carousel-title-${currentIndex + 1}`).innerText = titles[currentIndex];
            document.getElementById(`carousel-text-${currentIndex + 1}`).innerText = texts[currentIndex];
        }
    });

    // Обновляем видимость кнопок
    prevBtn.classList.toggle('hidden', currentIndex === 0);
    nextBtn.classList.toggle('hidden', currentIndex === totalItems - 1);
}

prevBtn.addEventListener('click')
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length; // Переход к следующему элементу
        showItem(currentIndex);
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Переход к предыдущему элементу
        showItem(currentIndex);
    });

    showItem(currentIndex);})
    document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
    
        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        }
    
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % items.length; // Переход к следующему элементу
            showItem(currentIndex);
        });
    
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + items.length) % items.length; // Переход к предыдущему элементу
            showItem(currentIndex);
        });
    
        showItem(currentIndex); // Показать первый элемент при загрузке
    }); 