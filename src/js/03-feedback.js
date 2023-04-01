import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
  emailInput: document.querySelector('.js-feedback-form input[name="email"]'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('submit', onFormsSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData = { ...formData, [e.target.name]: e.target.value };
  console.log(formData);
});

populateForm();

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormsSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateForm() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    refs.emailInput.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}

// зразок який був на занятті Репети
// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// refs.form.addEventListener('submit', onFormsSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

// populateTextarea();

// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormsSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }
