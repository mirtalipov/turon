document.addEventListener('DOMContentLoaded', function () {
    const messageOutput = document.querySelector(".message-output");

    // Обработчик клика для кнопки "Просит ускорить заявку"
    document.getElementById("buttonAgreeToStay").addEventListener("click", function() {
        messageOutput.innerHTML = `
            <div class="message-block client">Клиент: "Можно ли как-то ускорить обработку моей заявки?"</div>
            <div class="message-block operator">Оператор: "Понимаю ваше желание ускорить процесс, [Имя клиента]. Давайте я посмотрю, что я могу сделать в этом отношении. [Оператор проверяет возможность ускорения обработки заявки]."</div>
            <div class="message-block operator">[В зависимости от политики компании и текущего статуса заявки]</div>
            <div class="message-block operator">Оператор: "Я проверил вашу заявку, в текущих условиях я постараюсь ускорить процесс обработки по мере возможности [указать причину, например, высокой загруженности или специфики заявки]."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Если у вас есть дополнительные вопросы по этой заявке или другие запросы, я всегда готов помочь. Мы ценим ваше обращение и стремимся обеспечить качественное и своевременное обслуживание."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Благодарю вас за понимание, [Имя клиента]. Если возникнут какие-либо вопросы или потребуется дополнительная помощь, пожалуйста, не стесняйтесь обращаться к нам. Желаем вам приятного дня!"</div>
        `;
        messageOutput.style.display = "block"; // Отобразите сообщение
    });

    // Обработчик клика для кнопки "Просит отменить заявку"
    document.getElementById("buttonDecideToDisconnect").addEventListener("click", function() {
        messageOutput.innerHTML = `
            <div class="message-block operator">Оператор: "Добрый день! Спасибо за ваш звонок в [Название компании]. Меня зовут [Имя оператора]. Чем я могу вам помочь сегодня?"</div>
            <div class="message-block client">Клиент: "Я хочу отменить свою заявку."</div>
            <div class="message-block operator">Оператор: "Конечно, [Имя клиента], я могу помочь вам с этим. Могли бы вы, пожалуйста, предоставить номер заявки или другие идентификационные данные, чтобы я мог найти её в нашей системе?"</div>
            <div class="message-block client">Клиент: [Предоставляет информацию о заявке]</div>
            <div class="message-block operator">Оператор: "Спасибо за предоставленную информацию. [Оператор находит заявку в системе]. Я нашел вашу заявку. Прежде чем я продолжу с отменой, хотел бы уточнить, есть ли какая-то конкретная причина отмены, о которой нам следует знать? Мы стремимся улучшать наш сервис, и ваш отзыв может быть для нас очень полезен."</div>
            <div class="message-block client">Клиент: [Объясняет причину или подтверждает желание отмены]</div>
            <div class="message-block operator">Оператор: "Понимаю, спасибо за уточнение. [Если причина отмены связана с проблемой, которую можно решить, предложить возможное решение]."</div>
            <div class="message-block "><h1>Aбонент все равно хочет отменить заявку</h1></div>
            <div class="message-block operator">Теперь я приступлю к отмене вашей заявки. [Оператор осуществляет необходимые действия для отмены заявки]. Ваша заявка успешно отменена. Если у вас есть какие-либо вопросы или потребуется помощь в будущем, пожалуйста, не стесняйтесь обращаться к нам."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Благодарю вас за обращение, [Имя клиента]. Мы ценим ваш выбор и готовы помочь вам в любое время. Желаем вам приятного дня!"</div>
            <div class="message-block "><h1>Aбонента уговорили оставить заявку</h1></div>
            <div class="message-block operator">Оператор: "Я рад, что мы нашли решение, которое устраивает вас, [Имя клиента]. Таким образом, ваша заявка остаётся активной. Давайте я ещё раз уточню детали вашей заявки, чтобы убедиться, что все ваши требования и пожелания учтены."</div>
            <div class="message-block client">Клиент: [Подтверждает детали заявки или предоставляет дополнительную информацию]</div>
            <div class="message-block operator">Оператор: "Отлично, спасибо за уточнение. Ваша заявка [описание текущего статуса заявки и ожидаемых действий]. Мы обязательно учтём все указанные вами пожелания. Вы можете ожидать [указать следующие шаги или ориентировочные сроки выполнения заявки]."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Если у вас возникнут какие-либо вопросы или потребуется дополнительная помощь по этой заявке, пожалуйста, не стесняйтесь обращаться к нам. Мы всегда рады помочь и обеспечить вас лучшим сервисом."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Спасибо за то, что остаётесь с нами и доверяете [Название компании]. Мы ценим ваш выбор и стремимся предложить вам наилучший опыт. Желаем вам приятного дня, [Имя клиента]!"</div>
            `;
        messageOutput.style.display = "block"; // Отобразите сообщение
    });

});