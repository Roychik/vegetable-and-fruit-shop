// import React from "react";
// import { TiShoppingCart } from "react-icons/ti";
// // import { Splide, SplideSlide } from '@splidejs/svelte-splide';

//   export default function Exam() {
//     return (
//       <TiShoppingCart className='busk'/>
      
//     )
//   }

//   var splide = new Splide( '.splide' );
// splide.mount();

//   "use strict";

// const dropdownContent = document.querySelector('.dropdown-content');
// if (dropdownContent) {
//     document.querySelector('.dropdown').style.position = 'fixed';
// }

// const modal = document.querySelector('.modal_window');
// const modalBtn = document.getElementById('modal_btn');

// if (modalBtn) {
//     modalBtn.addEventListener('click', function () {
//         window.onscroll = function () {
//             window.scrollTo(0, 0);
//         };
//         console.log('dwwefe');
//         if (modal) {
//             modal.style.display = 'block';
//         }
//     });
// }

// window.addEventListener('click', function (e) {
//     const modalWindow = document.querySelector('.modal_window');
//     const closeBtn = document.querySelector('.close');

//     if (modalWindow && (e.target === modalWindow || e.target === closeBtn)) {
//         window.onscroll = function () {
//             window.scrollTo(window.scrollX, window.scrollY);
//         };
//         if (modal) {
//             modal.style.display = 'none';
//         }
//     }
// });

// const accordion = document.getElementById('accordion');
// if (accordion) {
//     accordion.classList.add('ui-accordion');
//     const accordionHeaders = accordion.querySelectorAll('.ui-accordion-header');
//     const accordionContents = accordion.querySelectorAll('.ui-accordion-content');

//     accordionHeaders.forEach((header, index) => {
//         header.addEventListener('click', function () {
//             if (accordionContents[index]) {
//                 const display = window.getComputedStyle(accordionContents[index]).getPropertyValue('display');
//                 accordionContents[index].style.display = display === 'none' ? 'block' : 'none';
//             }
//         });
//     });
// }

// const destroyBtn = document.getElementById('destroy');
// if (destroyBtn) {
//     destroyBtn.addEventListener('click', function () {
//         if (accordion) {
//             accordion.classList.remove('ui-accordion');
//         }
//     });
// }

// const enableBtn = document.getElementById('enable');
// if (enableBtn) {
//     enableBtn.addEventListener('click', function () {
//         if (accordion) {
//             accordion.classList.add('ui-accordion');
//         }
//     });
// }

// const slider = document.getElementById('slider');
// if (slider) {
//     // Ініціалізація слайдера (залишити на чистому JavaScript)
// }

// const slider1 = document.getElementById('slider1');
// if (slider1) {
//     // Ініціалізація слайдера (залишити на чистому JavaScript)
// }

// const tit = document.title;
// let c = 0;

// function writetitle() {
//     document.title = tit.substring(0, c);
//     if (c == tit.length) {
//         c = 0;
//         setTimeout(writetitle, 1000);
//     } else {
//         c++;
//         setTimeout(writetitle, 200);
//     }
// }

// writetitle();

// const accordion1 = document.getElementById('accordion1');
// if (accordion1) {
//     // Ініціалізація аккордеона (залишити на чистому JavaScript)
// }

// const buyBtns = document.querySelectorAll('.buy');
// buyBtns.forEach(function (buyBtn) {
//     buyBtn.addEventListener('click', function () {
//         const busket = document.querySelector('.busket');
//         if (busket) {
//             let current = busket.textContent || '';
//             busket.innerHTML = current.slice(0, -1) + (+current[current.length - 1] + 1);
//         }
//     });
// });

// const feedbackBtn = document.querySelector('.feedback-btn');
// const feedbackModal = document.querySelector('.feedback-modal');
// const closeBtn = document.querySelector('.close-btn');
// const sendBtn = document.querySelector('.send-btn');

// if (feedbackBtn && feedbackModal && closeBtn && sendBtn) {
//     feedbackBtn.addEventListener('click', function () {
//         if (feedbackModal) {
//             feedbackModal.style.display = 'flex';
//         }
//     });

//     if (closeBtn) {
//         closeBtn.addEventListener('click', function () {
//             if (feedbackModal) {
//                 feedbackModal.style.display = 'none';
//             }
//         });
//     }

//     if (sendBtn) {
//         sendBtn.addEventListener('click', function () {
//             const feedbackTextarea = document.querySelector('.feedback-textarea');
//             if (feedbackTextarea) {
//                 const feedback = feedbackTextarea.value.trim();

//                 if (feedback !== '') {
//                     console.log(feedback);
//                     feedbackTextarea.value = '';
//                     if (feedbackModal) {
//                         feedbackModal.style.display = 'none';
//                     }
//                 }
//             }
//         });
//     }
// }
