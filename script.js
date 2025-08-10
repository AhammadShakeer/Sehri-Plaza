'use strict';


//------------------ pop ko hide karne ke liye---------------------------------------------
const modal=document.querySelector('[data-modal]');
const modalCloseOverlay=document.querySelector('[data-modal-overlay]');
const modalClosedBtn=document.querySelector('[data-modal-close]');

const modalCloseFunc = function () { modal.classList.add('closed')};

modalCloseOverlay.addEventListener('click',modalCloseFunc);
modalClosedBtn.addEventListener('click',modalCloseFunc);

//----------------------------------------------------------------------------------------



//-----------------------notification-----------------------------------

const notification=document.querySelector('[data-notif]')
const notifclosbtn = document.querySelector('[data-notif-close]')

notifclosbtn.addEventListener('click',()=>
{
    notification.classList.add('closed');
})

//----------------------------------------------------------------- 




