  function animazione() {
    const elemento = document.getElementById("animazione-bottone");
    elemento.classList.add("animate__animated", "animate__backOutDown");

    const img = elemento.getElementsByTagName('img')[0];
    if (img.src.includes("UC-76c1b28e-3f12-4d7a-bcb6-e6b5231fdca6-1.png")) {
        elemento.classList.remove("animate__backInUp");
        elemento.classList.add("animate__animated", "animate__backOutDown");
        setTimeout(() => {
          img.src = "../img/cartella.png";
          img.style.width = '100px';
          img.style.height = '100px';
          img.style.position = 'static'; 
          img.style.zIndex = '0';
          img.style.transform = 'translate(0%, 0%)';
        }, 1000)
        setTimeout(() => {
            elemento.classList.remove("animate__backOutDown");
            elemento.classList.add("animate__animated", "animate__backInUp");
        }, 1000);
    } else {
        elemento.classList.remove("animate__backInUp");
        elemento.classList.add("animate__animated", "animate__backOutDown");
        setTimeout(() => {
          img.src = "../img/UC-76c1b28e-3f12-4d7a-bcb6-e6b5231fdca6-1.png";
          img.style.width = '600px';
          img.style.height = '500px';
          img.style.position = 'absolute';  // Posiziona l'immagine sopra tutto
          img.style.zIndex = '9999';     // Assicura che l'immagine sia sopra tutto
          img.style.left = '50%';        // Centra l'immagine orizzontalmente
          img.style.top = '50%';         // Centra l'immagine verticalmente
          img.style.transform = 'translate(-50%, -50%)'; // Centra l'immagine
                }, 1000)
                setTimeout(() => {
            elemento.classList.remove("animate__backOutDown");
            elemento.classList.add("animate__animated", "animate__backInUp");
                }, 1000);
            }
    }