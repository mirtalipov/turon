const elements = [
    {id: 'contact-center-regulation', text: 'Выбрано: Регламент контакт-центра'},
    {id: 'procedural-questions', text: 'Выбрано: Процедурные вопросы'},
    {id: 'turon-billing', text: 'Выбрано: Turon billing'},
    {id: 'phone-setup', text: 'Выбрано: Настройка телефонии'},
    {id: 'ticket', text: 'Выбрано: Тиккет'},
    {id: 'internet-line-check', text: 'Выбрано: Проверка линии интернет'},
    {id: 'c-tv-billing', text: 'Выбрано: ЦТВ billing'},
    {id: 'public-offer', text: 'Выбрано: Публичная оферта'}
];

elements.forEach(element => {
    const el = document.getElementById(element.id);
    if (el) {
        el.addEventListener('click', function () {
            document.getElementById('selection').innerHTML = element.text;
        });
    }
});
