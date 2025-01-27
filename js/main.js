if (typeof document !== 'undefined') {
  // determine current year
  const currentYear = new Date().getFullYear();
  document.querySelector('.year').textContent = currentYear;

  // yes
  document.querySelector('#js-off')?.remove()
}
