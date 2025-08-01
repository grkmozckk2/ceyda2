window.onload = () => {
  const blackScreen = document.getElementById('black-screen');
  const introVideo = document.getElementById('intro-video');
  const mainContent = document.getElementById('main-content');
  const heartBtn = document.getElementById('heart-button');
  const heart1 = document.getElementById('heart1-video');
  const heart2 = document.getElementById('heart2-video');

  // Açılış karanlık ekran + intro video
  setTimeout(() => {
    blackScreen.style.opacity = 0;
    introVideo.style.display = 'block';
    introVideo.play();

    introVideo.onended = () => {
      blackScreen.style.opacity = 1;
      setTimeout(() => {
        introVideo.style.display = 'none';
        blackScreen.style.display = 'none'; // ❗ Karartmayı kaldır
        mainContent.style.display = 'block';
      }, 2000);
    };
  }, 2000);

  // ❤️ Kalp butonuna basınca
  heartBtn.onclick = () => {
    mainContent.style.display = 'none';

    heart1.style.display = 'block';
    heart1.currentTime = 0;
    heart1.play();

    heart1.onended = () => {
      heart1.style.display = 'none';

      // 🔁 Ekranı beyaza döndür
      document.body.style.transition = "background 2s";
      document.body.style.background = "white";

      // siyah ekran olmasın
      blackScreen.style.display = 'none';

      heart2.style.display = 'block';
      heart2.currentTime = 0;
      heart2.play();
    };
  };
};
