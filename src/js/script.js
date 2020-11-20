// 'use strict';

function valideForms(form){
    $(form).validate({
        rules: {
            phone: {
                required: true,
                minlength: 10,
            },
        },
        messages: {
            phone: {
                required: "Пожалуйста, введите свой номер телефона",
                minlength: jQuery.validator.format("Введите {0} цифр")
            },
        },
    });
}

valideForms('#promo-form');
valideForms('#ordering-form');

$('input[name=phone').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
    });
    return false;
});
