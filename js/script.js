const form = document.getElementById('bookingForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const breed = document.getElementById('breed').value || 'не указана';
    const service = document.getElementById('service').value || 'хочу уточнить';
    const message =
      `Здравствуйте! Хочу записать питомца в Prime Groom.%0A%0A` +
      `Имя: ${encodeURIComponent(name)}%0A` +
      `Телефон: ${encodeURIComponent(phone)}%0A` +
      `Порода: ${encodeURIComponent(breed)}%0A` +
      `Интересует: ${encodeURIComponent(service)}`;
    document.getElementById('success').style.display = 'block';
    window.open('https://wa.me/79377336000?text=' + message, '_blank', 'noopener');
  });
