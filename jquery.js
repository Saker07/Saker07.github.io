$(document).ready(function(){
  $(window).scroll(function(){
    $('#header-inner').toggleClass('banner', $(window).scrollTop() > $('#header').offset().top);
  });
});
