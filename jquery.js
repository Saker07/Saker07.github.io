$(document).ready(function(){
  $(window).scroll(function(){
    $('#home-banner').toggleClass('banner', $(window).scrollTop() > $('#home-banner').offset().top);
  });
});
