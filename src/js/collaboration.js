const URL_APP = "https://script.google.com/macros/s/AKfycbwRRh5TdvpnUGuIIm2YRlk4bmUTFWqcVgVU3SB8JygyJYZ3Ap12gyGixELvH2Iw-p6l/exec"; 
    
const form = document.querySelector(".data_abonent");

form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const ссылка = document.querySelector("[name='ссылка']").value.trim();
    const номер = document.querySelector("[name='номер телефона']").value.trim();
    const choices = document.querySelector("[name='choices']").value;
    const комментария = document.querySelector("[name='комментария']").value.trim();

    // Проверка номера телефона на наличие только цифр
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(номер)) {
        alert("Номер телефона должен содержать только цифры.");
        return; // Прерываем выполнение функции, чтобы не отправлять данные
    }

    let details = {
        ссылка,
        номер,
        choices,
        комментария
    };

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    try {
        const result = await fetch(URL_APP, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formBody
        }).then((res) => res.json());

        if (result.type === "success") {
            alert("Данные успешно отправлены!");
            form.reset();
        } else if (result.type === "error") {
            alert(`Ошибка: ${result.errors}`);
        }
    } catch (err) {
        alert("Ошибка при отправке данных!");
    }
});