"use strict";



const modal: HTMLElement | null = document.querySelector('.modal_window');
const modalBtn: HTMLButtonElement | null = document.getElementById('modal_btn') as HTMLButtonElement | null;

if (modalBtn) {
    modalBtn.addEventListener('click', () => {
        window.onscroll = () => {
            window.scrollTo(0, 0);
        };
        console.log('dwwefe');
        if (modal) {
            modal.style.display = 'block';
        }
    });
}

window.addEventListener('click', (e: MouseEvent) => {
    const modalWindow: HTMLElement | null = document.querySelector('.modal_window');
    const closeBtn: HTMLElement | null = document.querySelector('.close');

    if (modalWindow && closeBtn) {
        if (e.target === modalWindow || e.target === closeBtn) {
            window.onscroll = () => {
                window.scrollTo(window.scrollX, window.scrollY);
            };
            if (modal) {
                modal.style.display = 'none';
            }
        }
    }
});




const tit = document.title;
let c = 0;

function writetitle() {
    document.title = tit.substring(0, c);
    if (c == tit.length) {
        c = 0;
        setTimeout(writetitle, 1000);
    } else {
        c++;
        setTimeout(writetitle, 200);
    }
}

writetitle();


const buyBtns = document.querySelectorAll('.buy');
buyBtns.forEach((buyBtn) => {
    buyBtn.addEventListener('click', () => {
        const busket = document.querySelector('.busket') as HTMLElement | null;
        if (busket) {
            let current = busket.textContent || '';
            busket.innerHTML = current.slice(0, -1) + (+current[current.length - 1] + 1);
        }
    });
});

const feedbackBtn = document.querySelector('.feedback-btn') as HTMLElement | null;
const feedbackModal = document.querySelector('.feedback-modal') as HTMLElement | null;
const closeBtn = document.querySelector('.close-btn') as HTMLElement | null;
const sendBtn = document.querySelector('.send-btn') as HTMLElement | null;

if (feedbackBtn && feedbackModal && closeBtn && sendBtn) {
    feedbackBtn.addEventListener('click', () => {
        if (feedbackModal) {
            feedbackModal.style.display = 'flex';
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (feedbackModal) {
                feedbackModal.style.display = 'none';
            }
        });
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const feedbackTextarea = document.querySelector('.feedback-textarea') as HTMLTextAreaElement | null;
            if (feedbackTextarea) {
                const feedback = feedbackTextarea.value.trim();

                if (feedback !== '') {
                    console.log(feedback);
                    feedbackTextarea.value = '';
                    if (feedbackModal) {
                        feedbackModal.style.display = 'none';
                    }
                }
            }
        });
    }
}

const buyButton: HTMLButtonElement | null = document.querySelector('.buy') as HTMLButtonElement | null;

if (buyButton) {
    buyButton.addEventListener('click', () => {
        window.location.href = 'redirect.html';
    });
}
// const busketElement: HTMLDivElement | null = document.getElementById('busket') as HTMLDivElement | null;
// const buyButton: HTMLButtonElement | null = document.querySelector('.buy') as HTMLButtonElement | null;

// let bucketCount: number = 0;

// if (buyButton && busketElement) {
//     buyButton.addEventListener('click', () => {
//         bucketCount++;
//         busketElement.innerText = `Bucket: ${bucketCount}`;
//     });
// }
