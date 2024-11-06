document.addEventListener('DOMContentLoaded', function () {
    const messageOutput = document.querySelector(".message-output");

    // Обработчик клика для кнопки "Свитч офф"
    document.getElementById("buttonAgreeToStay").addEventListener("click", function() {
        messageOutput.innerHTML = `
            <div class="message-block operator">Оператор: "Благодарю вас за ожидание, [Имя клиента]. Я проверил информацию, и, к сожалению, обнаружил, что проблема действительно возникла на нашей стороне. Это технический сбой, и наши специалисты уже работают над его устранением."</div>
            <div class="message-block client">Клиент: [Реакция клиента]</div>
            <div class="message-block operator">Оператор: "Я искренне приношу извинения за неудобства. Мы делаем все возможное, чтобы как можно скорее решить эту проблему. По нашим оценкам, подключение будет восстановлено [указать предполагаемые сроки]. Мы также предоставим вам [упомянуть о компенсации, если таковая предусмотрена политикой компании, например, скидку на следующий платеж]." </div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Еще раз приношу извинения за это неудобство. Если у вас возникнут какие-либо дополнительные вопросы или проблемы, пожалуйста, не стесняйтесь обращаться. Спасибо за ваше терпение и понимание, [Имя клиента]."</div>
        `;
        messageOutput.style.display = "block"; // Отобразите сообщение
    });

    // Обработчик клика для кнопки "Нет электричества с оборудованием"
    document.getElementById("buttonDecideToDisconnect").addEventListener("click", function() {
        messageOutput.innerHTML = `
            <div class="message-block operator">Оператор: "Благодарю вас за ожидание. По данным, которые у меня есть, в вашем районе в данный момент отсутствует электроснабжение, что, скорее всего, является причиной проблем с подключением к интернету. Как правило, в таких случаях подключение восстанавливается автоматически после того, как электроснабжение будет восстановлено."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Я рекомендую следить за сообщениями местных энергетических служб о восстановлении электроснабжения. Если после возвращения электричества подключение к интернету не восстановится, пожалуйста, свяжитесь с нами снова, и мы предпримем дополнительные шаги для решения вашей проблемы."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Если у вас есть еще вопросы или вам нужна дополнительная помощь, пожалуйста, не стесняйтесь обращаться. Спасибо за ваше терпение и понимание в этой ситуации. Желаем вам скорейшего восстановления электроснабжения и стабильного интернет-соединения, [Имя клиента]."</div>
        `;
        messageOutput.style.display = "block"; // Отобразите сообщение
    });
    // Обработчик клика для кнопки "Не плановые работы"
    document.getElementById("buttonUnscheduledWork").addEventListener("click", function() {
        messageOutput.innerHTML = `
            <div class="message-block operator">Оператор: "Благодарю за терпение. Я выяснил, что в вашем районе в настоящий момент проводятся незапланированные работы/возникли сбои в системе, которые могут быть причиной проблемы с интернетом. Наши технические специалисты уже работают над устранением этой проблемы."</div>
            <div class="message-block client">Клиент: [Реакция клиента]</div>
            <div class="message-block operator">Оператор: "Мы приносим свои извинения за любые неудобства, вызванные этой ситуацией. Согласно нашим данным, ожидается, что проблема будет решена примерно [указать ориентировочные сроки, если они известны]. Мы будем держать вас в курсе и сообщим, как только все восстановится. Если у вас возникнут дополнительные вопросы или вам понадобится помощь после восстановления услуг, пожалуйста, свяжитесь с нами."</div>
            <div class="message-block client">Клиент: [Ответ клиента]</div>
            <div class="message-block operator">Оператор: "Еще раз приношу извинения за неудобства, [Имя клиента]. Спасибо за ваше терпение и понимание в этой ситуации. Мы здесь, чтобы помочь вам, так что не стесняйтесь обращаться по любым вопросам. Желаем вам приятного дня и скорейшего восстановления подключения."</div>
        `;
        messageOutput.style.display = "block"; // Отобразите сообщение
    });
});
