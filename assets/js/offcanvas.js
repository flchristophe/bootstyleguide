$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});
$(document).ready(function () {
  $('[data-toggle=offcanvas-left]').click(function () {
    $('.header-offcanvas-left').toggleClass('active')
  });
});
$(document).ready(function () {
  $('[data-toggle=offcanvas-center]').click(function () {
    $('.header-offcanvas-center').toggleClass('active')
  });
});
$(document).ready(function () {
  $('[data-toggle=offcanvas-right]').click(function () {
    $('.header-offcanvas-right').toggleClass('active')
  });
});