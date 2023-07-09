const checkboxes = document.querySelectorAll('.check__input');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const label = checkbox.parentNode;
    if (checkbox.checked) {
      setTimeout(() => {
        label.style.color = '#C283F3'; // изменяем цвет текста на красный с задержкой в 0.3 секунды
      }, 100);
    } else {
      setTimeout(() => {
        label.style.color = '#FFFFFF'; // изменяем цвет текста на белый с задержкой в 0.3 секунды
      }, 100);
    }
  });
});
