// CREDIT: WANZOFC

// NOTE: DONT DELETE CREDIT
// Pilih elemen kartu
const card = document.querySelector('.card');

// Tambahkan event listener ketika kartu disentuh atau diklik
card.addEventListener('mouseenter', () => {
  card.classList.add('active-border'); // Aktifkan glowing border
});

card.addEventListener('mouseleave', () => {
  card.classList.remove('active-border'); // Nonaktifkan glowing border
});


const socialsButtons = document.querySelectorAll('.socials button');
socialsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    setTimeout(() => {
      switch (index) {
        case 0: 
          window.open('https://github.com/wanzbrayy', '_blank');
          break;
        case 1:
          window.open('https://imstagram.com/@wanz_brayy', '_blank');
          break;
        case 2:
          window.open('https://paypal.com', '_blank');
          break;
        case 3: 
          window.open('https://spotify.com', '_blank');
          break;
        case 4:
          window.open('https://wa.me/62895402567224', '_blank');
          break;
        default:
          console.log('Tombol tidak dikenal');
      }
      loading.style.display = 'none';
    }, 1000);
  });
});
// CREDIT: WANZOFC
// NOTE: DONT DELETE CREDIT
