"use strict";

const form = document.forms[0];

form.addEventListener("submit", event => {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];

    let name = values[0], email = values[1];

    // name validation
    const REGEXP_ONLY_SYMBOLS = /^[a-zа-яё-]+$/i

    if (!REGEXP_ONLY_SYMBOLS.test(name)) {
        Swal.fire({
            title: 'Ошибка!',
            text: 'Имя содержит недопустимые символы или является пустой строкой',
            icon: 'error',
            confirmButtonText: 'Понятно'
        });
        return;
    }

    // name's first symbol case validation
    const REGEXP_FIRST_SYMBOL_CASE = /^[А-ЯA-Z]/

    if (!REGEXP_FIRST_SYMBOL_CASE.test(name)) {
        Swal.fire({
            title: 'Ошибка!',
            text: 'Имя должно начинаться с заглавной буквы',
            icon: 'error',
            confirmButtonText: 'Понятно'
        });
        return;
    }

    // email validation. see: https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php
    const REGEXP_EMAIL = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

    if (!REGEXP_EMAIL.test(email)) {
        Swal.fire({
            title: 'Ошибка!',
            text: 'Некорректно указан адрес электронной почты',
            icon: 'error',
            confirmButtonText: 'Понятно'
        });
        return;
    }

    Swal.fire({
        title: 'Готово!',
        text: 'Я свяжусь с Вами, отправив письмо на указанный email',
        icon: 'success',
        confirmButtonText: 'Супер'
    });
});
