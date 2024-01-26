const bottone = document.getElementById('animazione-bottone');

bottone.addEventListener('mouseup', () => {
  bottone.classList.remove('animate__bounceOutDown');
  setTimeout(() => {
    bottone.classList.add('animate__bounceInDown');
  }, 0); // Aggiungi la classe di entrata dopo un breve ritardo
});