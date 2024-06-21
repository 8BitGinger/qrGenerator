let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let generateBtn = document.getElementById('genBtn');

function generateQR() {
  generateBtn.addEventListener('click', function () {
    if (qrText.value === '') {
      alert('Please enter a valid URL');
    } else {
      console.log('working');
      arImage.style.display = 'block';
      qrImage.src =
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
        qrText.value;
    }
  });
}
