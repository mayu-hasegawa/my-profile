$(function() {

  // .topのテキストを1文字ずつフェードイン
  var title = $('.text_animate');
  $(title).contents().each(function (_, node) {
    // 子ノードを一旦DOMツリーから除去
    node.parentNode.removeChild(node);
    // ノードの種類によって条件分岐
    switch (node.nodeType) {
      case Node.TEXT_NODE:
        // テキストノードの文字列を取得
        var text_split = node.textContent.split('');

        function animate() {
          text_split.forEach(function (val) {
            $(title).append("<span>" + val + "</span>");
          });
        }
        animate();
        break;
      // テキストノード以外(HTML要素)ならappendし直す
      default:
        $(title).append(node);
    }
  });

  $(function(){
    $('.text_animate span').each(function (index, element) {
      var new_element = $(element).css({ opacity: 0 });
      $(title).addClass('on');
      new_element.delay(index * 70);
      new_element.animate({ opacity: 1 }, 1100);
    });
  });

  var user_agent = window.navigator.userAgent.toLowerCase();
  if(user_agent.indexOf('msie') != -1 || user_agent.indexOf('trident') != -1) {
    $('for_ie').addClass('shown');
    $('text_animate').addClass('off');
  }

  // カルーセル
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400
  });

  //アニメーション
  var $title_targets = $('.section_title');
  var $skill_targets = $('#skills .block');
  var $work_targets = $('#work .block');
  $(window).on('scroll', function(){
    //コンテンツ内のタイトル
    $title_targets.each(function(index, target){
      if ($(target).hasClass('animated')) return
      if ($(window).scrollTop() + $(window).height() > $(target).offset().top) {
        $(target).find('.title_main').addClass('animated fadeInUp');
        $(target).find('.title_sub').addClass('animated fadeInUp delay-0_3s');
      }
    });
    // profile
    if ($(window).scrollTop() + $(window).height() > $('#about').offset().top) {
        $('#about').find('.circle').addClass('box');
    }
    //#skills
    $skill_targets.each(function(index, target){
      if ($(target).hasClass('animated')) return
      if ($(window).scrollTop() + $(window).height() > $(target).offset().top) {
        $(target).find('.left').addClass('animated fadeIn delay-0_6s');
        $(target).find('.center').addClass('animated fadeIn delay-0_9s');
        $(target).find('.right').addClass('animated fadeIn delay-1_2s');
      }
    });
    //#work
    $work_targets.each(function(index, target){
      if ($(target).hasClass('animated')) return
      if ($(window).scrollTop() + $(window).height() > $(target).offset().top) {
        $(target).find('.left').addClass('animated fadeIn delay-0_6s');
        $(target).find('.right').addClass('animated fadeIn delay-0_9s');
      }
    });
  });

  // SP版・ページトップへ戻る
  $('.js_top_link').on("click", function(){
    $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
  });


});
