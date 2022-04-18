import React from "react";

export default function ContactPage() {
  return (
    <section class="top-sales">
      <h2 class="text-center">Контакты</h2>
      <p>
        Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д.
        17, бизнес-центр W Plaza.
      </p>
      <h5 class="text-center">Координаты для связи:</h5>
      <p>
        Телефон: <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>{" "}
        (ежедневно: с 09-00 до 21-00)
      </p>
      <p>
        Email: <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
      </p>
    </section>
  );
}
{
  /* <script>
// TODO: replace it with React!
const searchEl = document.querySelector('[data-id=search-expander]');
const searchFormEl = document.querySelector('[data-id=search-form]');
searchEl.addEventListener('click', () => {
    searchFormEl.classList.toggle('invisible');
    searchFormEl.querySelector('input').focus();
});
</script> */
}