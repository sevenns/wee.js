$().ready(function () {
  $('.button').on('click', function () {
    if ($(window).scrollTop() !== 0) {
      console.log($(window).scrollTop())
    } else {
      $(window).scrollTop(100)
    }
  })
});
