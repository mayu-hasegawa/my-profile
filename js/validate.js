$(function() {

  $("#apply_form").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        customEmailValidation: true
      },
      "comment": {
        required: true
      }
    },
    messages: {
      "name": {
        required: "お名前は入力されていません。"
      },
      "email": {
        required: "メールアドレスは入力されていません。",
        email: "正しい書式でご記入ください。",
        customEmailValidation: "正しい書式でご記入ください。"
      },
      "comment": {
        required: "お問合せ内容は入力されていません。"
      }
    },
    // errorPlacement: function(error, element) {
    //   var element_content = element[0].id;
    //   if(element.attr("name") === element_content) {
    //     error.insertAfter("#error_msg");
    //     $(".error_msg_bottom").addClass("add_margin");
    //   }else{
    //     error.insertAfter(element);
    //   }
    // }
  });

});
