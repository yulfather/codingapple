// $('.tab-button').eq(0).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');

//   $('.tab-button').eq(0).addClass('active');
//   $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');

//   $('.tab-button').eq(1).addClass('active');
//   $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');

//   $('.tab-button').eq(2).addClass('active');
//   $('.tab-content').eq(2).addClass('show');
// });

let tab_count = $('.tab-button').length;
for (let i = 0; i < tab_count; i++){
  $('.tab-button').eq(i).click(function(){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
});
};