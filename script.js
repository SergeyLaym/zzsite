document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('booking-form');
  const message = document.getElementById('message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      emailjs.sendForm('service_u4f6apw', 'template_zgn2wwc', form)
        .then(() => {
          message.innerText = 'Спасибо! Ваша заявка отправлена.';
          form.reset();
        }, (error) => {
          message.innerText = 'Ошибка отправки. Попробуйте позже.';
          console.error('EmailJS Error:', error);
        });
    });
  }
});
