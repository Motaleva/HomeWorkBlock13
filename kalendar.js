// console.dir(document.body)
// const currentDay = new Date(ь);
// const nowdaysData = document.querySelector('.marchcalendar')

// nowdaysData.innerText = currentDay.toString()
// const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
// const currentDay = new Date();
// const monthName = months[currentDay.getMonth()];
// const nowdaysData = document.querySelector('.marchcalendar');
// nowdaysData.innerText = monthName;
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let currentMonth = new Date().getMonth();
const monthElement = document.querySelector('.month');
const prevArrow = document.querySelector('.arrow-prev');
const nextArrow = document.querySelector('.arrow-next');
const daysElement = document.querySelector('.days');

function updateCalendar() {
  const currentDate = new Date();
  currentDate.setMonth(currentMonth);
  const monthName = months[currentMonth];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  monthElement.innerText = monthName;
  daysElement.innerHTML = '';
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.innerText = i;
    daysElement.appendChild(dayElement);
  }
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
  }
  updateCalendar();
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
  }
  updateCalendar();
}

prevArrow.addEventListener('click', prevMonth);
nextArrow.addEventListener('click', nextMonth);

updateCalendar();
