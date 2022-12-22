// 1.
// console.log('$', $)
// console.log('jQuery', jQuery)

// 2.
const $input = $('#inputComment'); // CSS Selector
$(() => {
  // on DOMContentLoaded
});
$('<div>XXX</div>').appendTo($('body')) // HTML

// 3. jQuery Collection
const $liElList = $('li');
// console.log($input)
// console.log($liElList)

// $liElList.css('color', 'red')

// $('.hello').remove()


$input
  .addClass('yyy')
  .css({
    color: 'red',
    backgroundColor: 'green'
  })

$liElList
  .addClass('yyy')
  .css({
    color: 'red',
    backgroundColor: 'green'
  })

// $liElList.fadeOut(2000)
// $liElList.fadeIn(2000)
$liElList.slideDown(2000)
$liElList.slideUp(2000)