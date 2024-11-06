const elements = [
    {id: 'googledoc', text: 'Выбрано: Инструкции'},
    {id: 'ticket', text: 'Выбрано: Турон тиккет'},
    {id: 'turon', text: 'Выбрано: Турон билинг'},
    {id: 'stv1', text: 'Выбрано: ЦТВ Ташкент'},
    {id: 'stv2', text: 'Выбрано: ЦТВ Бухара'},
    {id: 'stv3', text: 'Выбрано: ЦТВ Навои'},
    {id: 'stv4', text: 'Выбрано: ЦТВ Заравшон'},
    {id: 'ktv', text: 'Выбрано: КТВ'},
    {id: 'cinerama', text: 'Выбрано: Синерама админ'},
    {id: 'Turontelecom', text: 'Выбрано: Турон телеком'},
    {id: 'netco', text: 'Выбрано: Нетко телеком'},
    {id: 'cinerama2', text: 'Выбрано: Синерама'},
    {id: 'dialogue', text: 'Выбрано: скрипт'},
    {id: 'Инциденты', text: 'Выбрано: Инциденты'},
    {id: 'График', text: 'Выбрано: График работы'},
    {id: 'допуслугиturon', text: 'Выбрано: Дополнительные услуги Turon'},
    {id: 'допуслугиnetco', text: 'Выбрано: Дополнительные услуги Netco'},
    {id: 'Dinner', text: 'Выбрано: Dinner/Sleep time'},
    {id: 'Обучение', text: 'Выбрано: Обучение'},
    {id: 'офис', text: 'Выбрано: Офисы и Банкоматы'},
    {id: 'акции', text: 'Выбрано: Акции и подлючение по регионам'}
];

elements.forEach(element => {
    const el = document.getElementById(element.id);
    if (el) {
        el.addEventListener('click', function () {
            document.getElementById('selection').innerHTML = element.text;
        });
    }
});

