$(function() {

  var form = $("#apply_form");
  var forms_num = $(".required").length;
  $.validator.addMethod('EmailValidation', function(value, element){
    return value.match(/^([a-z0-9+_-]+)(.[a-z0-9+_-]+)*@([a-z0-9-]+\.)+[a-z]{2,6}$/ig) != null;
  });
  $(form).validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        EmailValidation: true
      },
      "comment": {
        required: true
      }
    },
    messages: {
      "name": {
        required: "入力されていません。"
      },
      "email": {
        required: "入力されていません。",
        email: "正しい書式でご記入ください。",
        EmailValidation: "正しい書式でご記入ください。"
      },
      "comment": {
        required: "入力されていません。"
      }
    },
    errorClass: "error_msg",
    errorElement: "span"
  });

  $('input,textarea').on('keyup blur', function() {
    $(this).valid();
    var submitbtn = $('.input_submit');
    if (form.find('.error_msg').length == 3) {
        submitbtn.prop('disabled', false);
    } else {
        submitbtn.prop('disabled', 'disabled');
    }
  });



});
