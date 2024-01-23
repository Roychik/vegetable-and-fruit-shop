

// "use strict"





// if ($('.dropdown-content')){
//     $('.dropdown').css('position', 'fixed')
// }
// const modal = $('.modal_window')
// $('#modal_btn').on('click' , function(){
//     window.onscroll = function(){
//       window.scrollTo(0, 0);
//     }
//     console.log('dwwefe')
//     $(modal).show(100);
// })
// $(window).on('click' , function(e){
//     if (e.target == document.querySelector('.modal_window')|| e.target == document.querySelector('.close')){
//         window.onscroll = function(){
//               window.scrollTo(window.scrollX, window.scrollY)
//         }
//         $(modal).hide(100)  
//     }
// })



// $('#accordion').accordion({
//     active: 0,
//     heightStyle: "content",
//     icons: { "header": " ui-icon-arrowthick-1-n", "activeHeader": " ui-icon-arrowthick-1-s" },
//     collapsible: true,
//     animate:{
//         duration:300,
//         easing: 'swing',

//     } ,
//     classes: {
//         "ui-accordion-header": "highlight"
//       },

// });
// $('#destroy').on('click', function(){
//     $( "#accordion" ).accordion( "disable" );
// })
// $('#enable').on('click', function(){
//     $( "#accordion" ).accordion( "enable" );
// })
// $('#slider').slick({
//     autoplay: true,
//     autoplaySpeed: 1000,
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// $('#slider1').slick({
//   autoplay: true,
//   autoplaySpeed: 1000,
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });




// const tit = document.title;
// const c = 0;
// function writetitle(){
//   document.title = tit.substring(0,c);
//   if(c==tit.length){
//       c = 0;
//       setTimeout("writetitle()",1000)
// } else{
//       c++;
//       setTimeout("writetitle",200)
// }
// writetitle()
// }

// $('#accordion1').accordion({

// })



// $('.buy').on('click', function(e){

//   let current = $('.busket').text()
//   $('.busket').html(current.slice(0, -1) + (+current[current.length - 1] + 1))
// })



// const feedbackBtn = document.querySelector('feedback-btn');
// const feedbackModal = document.querySelector('feedback-modal');
// const closeBtn = document.querySelector('close-btn');
// const sendBtn = document.querySelector('send-btn');

// feedbackBtn.addEventListener('click', () => {
//   feedbackModal.style.display = 'flex';
// });

// closeBtn.addEventListener('click', () => {
//   feedbackModal.style.display = 'none';
// });

// sendBtn.addEventListener('click', () => {
//   const feedbackTextarea = document.querySelector('feedback-textarea');
//   const feedback = feedbackTextarea.value.trim();

//   if (feedback !== '') {
//     console.log(feedback);
//     feedbackTextarea.value = '';
//     feedbackModal.style.display = 'none';
//   }
// });
     


