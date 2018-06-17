$(document).ready(function () {
  console.log($('ul').outerHeight(true))
});

$(window).resize(function () {
  console.log('.resize')
})

$(window).on('resize', function () {
  console.log('on resize')
})

$(window).load(function () {
  console.log('.load')
})

$(window).on('load', function () {
  console.log('on load')
})

$(document).scroll(function () {
  console.log('.scroll')
})

$(document).on('scroll', function () {
  console.log('on scroll')
})
