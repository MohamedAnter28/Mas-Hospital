const scrollTopButton = document.querySelector('.scrollTop');

const bot = document.querySelector('.bot');

function scrollTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });
}

scrollTop();

function scroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollTopButton.addEventListener("click", scroll);



document.querySelectorAll('.doc').forEach((input) => {
  input.addEventListener('click', (e) => {
    document.querySelector(".doc-page").classList.add("active");
    document.querySelector(".bg").classList.add("active");

    const doctorName = e.target.dataset.name;
    const doctorWork = e.target.dataset.work;
    const imgsrc = e.target.dataset.img;

    document.querySelector('.docimg').src = imgsrc;
    document.querySelector('.name').innerHTML = doctorName;
    document.querySelector('.work').innerHTML = doctorWork;
  });
});

const form = document.querySelector("form")
console.log(form)

function checkValidation(event) {
  event.preventDefault(); // Prevent the default form submission

  const userName = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const text = document.querySelector("#text");

  const usernamePattern = /^[a-zA-Z0-9_ ]{3,20}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const phonePattern = /^\+\d{2}\d{10}$/;

  let hasError = false;

  if (!usernamePattern.test(userName.value) || userName.value.trim() === "") {
    userName.classList.add('error');
    hasError = true;
  } else {
    userName.classList.remove('error');
  }

  if (!emailPattern.test(emailInput.value.trim()) || emailInput.value.trim() === '') {
    emailInput.classList.add('error');
    hasError = true;
  } else {
    emailInput.classList.remove('error');
  }

  if (!phonePattern.test(phoneInput.value.trim()) || phoneInput.value.trim() === "") {
    phoneInput.classList.add('error');
    hasError = true;
  } else {
    phoneInput.classList.remove('error');
  }

  if (text.value.trim() === "") {
    text.classList.add("error");
    hasError = true;
  } else {
    text.classList.remove("error");
  }

  if (!hasError) {
    document.querySelector(".doc-page").classList.remove("active");
    document.querySelector(".bg").classList.remove("active");
    window.location.href = "../pages/bot.html";

    document.querySelectorAll("input, textarea").forEach((input) => {
      input.value = "";
      input.classList.remove("error");
    });
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidation();
});

document.querySelector(".close").addEventListener("click",(e) => {
  e.preventDefault()
  document.querySelector(".doc-page").classList.remove("active");
  document.querySelector(".bg").classList.remove("active");
})


