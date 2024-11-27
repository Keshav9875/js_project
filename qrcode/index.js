const qrcodeele=document.querySelector(".qrcode");
const qrinputele=document.querySelector(".qr_input");
const qrbuttonele=document.querySelector("#qrbutton");


console.log(qrcodeele);
console.log(qrinputele);                                                                                      
const inputfunc=()=>{

    if(qrinputele.value.trim()===""){
        qrcodeele.classList.remove("show");
    }
    else{

      const data=qrinputele.value;
       // Generate the QR code as a data URL and set it as the source for the image
     QRCode.toDataURL(data, function (error, url) {
      if (error) {
        console.error("Error generating QR code:", error);
      } else {
        // Set the generated QR code image URL as the source of the <img> element
        qrcodeele.src=url;
      }
        }
      );
         
      qrcodeele.classList.add("show");
      
    }
   

}

qrbuttonele.addEventListener('click',inputfunc);

