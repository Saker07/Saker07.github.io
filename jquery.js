$(document).ready(function(){
  $(window).scroll(function(){
    $('#header-inner').toggleClass('scrolling', $(window).scrollTop() > $('#header').offset().top);
  });
});
