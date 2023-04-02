import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

form.addEventListener('input', event => {
  if (event.target === emailInput || event.target === messageInput) {
    saveState();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  console.log(state);

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem(STORAGE_KEY);
});

// alert
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Будь ласка, заповніть обидва поля.');
    return;
  }

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  console.log(state);

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem(STORAGE_KEY);
});

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
//   emailInput: document.querySelector('.js-feedback-form input[name="email"]'),
// };

// const STORAGE_KEY = 'feedback-form-state';
// let formData = {};

// refs.form.addEventListener('submit', onFormsSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//   formData = { ...formData, [e.target.name]: e.target.value };
//   console.log(formData);
// });

// populateForm();

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormsSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   formData = {};
// }

// function populateForm() {
//   const savedFormData = localStorage.getItem(STORAGE_KEY);
//   if (savedFormData) {
//     formData = JSON.parse(savedFormData);
//     refs.emailInput.value = formData.email || '';
//     refs.textarea.value = formData.message || '';
//   }
// }
