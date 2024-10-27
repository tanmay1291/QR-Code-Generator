let imgBox = document.getElementById("imgBox");
let QRImage = document.getElementById("QRImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        
        QRImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value;
       
    } 
    else {
        alert("Please enter some text or URL to generate a QR code.");
    }
}
