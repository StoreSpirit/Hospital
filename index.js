'use strict';

const loginOpen = document.getElementById('login-open');
const loginClose = document.getElementById('login-close');
const logn = document.getElementById('back-drop-login');

function openLogin() {    
    logn.classList.add('opened');
}

function closeLogin() {
    logn.classList.remove('opened');
}

loginClose.onclick = closeLogin;

loginOpen.addEventListener('click', openLogin);
document.addEventListener('click', function(event){
    console.log(event, event.target);
    if (event.target === logn){
        closeLogin()
    }
})

const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('back-drop');

function openModal() {    
    modal.classList.add('opened');
}

function closeModal() {
    modal.classList.remove('opened');
}

modalClose.onclick = closeModal;

modalOpen.addEventListener('click', openModal);
document.addEventListener('click', function(event){
    console.log(event, event.target);
    if (event.target === modal){
        closeModal()
    }
})