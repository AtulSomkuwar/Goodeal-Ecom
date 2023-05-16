//   // Random
   let price1 = document.querySelector('#price1');
     
   setInterval(function (){
  function getRandomNumber(min,max){
       let step1 = max - min +1;
       let step2 = Math.random() * step1;
       let result = Math.floor(step2)+ min;
       return result;

   };

   price1.innerHTML = getRandomNumber(450,799);

},3000);
/////////////////////////////////////////////////////
let price2 = document.querySelector('#price2');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price2.innerHTML = getRandomNumber(449,999);

},3000);
///////////////////////////////////////////////////////////////// 
let price3 = document.querySelector('#price3');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price3.innerHTML = getRandomNumber(549,1049);

},3000);

/////////////////////////////////////////////
let price4 = document.querySelector('#price4');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price4.innerHTML = getRandomNumber(625,1175);

},3000);

//////////////////////////////////////////
let price5 = document.querySelector('#price5');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price5.innerHTML = getRandomNumber(449,949);

},3000);

/////////////////////////////////////////////
let price6 = document.querySelector('#price6');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price6.innerHTML = getRandomNumber(399,849);

},3000);

////////////////////////////////////////////
let price7 = document.querySelector('#price7');
     
setInterval(function (){
function getRandomNumber(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2)+ min;
    return result;

};

price7.innerHTML = getRandomNumber(485,785);

},3000);

/////////////////////////////////////////////
let price8 = document.querySelector('#price8');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price8.innerHTML = getRandomNumber(399,799);
    
    },3000);
///////////////////////////////////////////////////////////// 

let price9= document.querySelector('#price9');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price9.innerHTML = getRandomNumber(470,899);
    
    },3000);

/////////////////////////////////////////////////////////

let price10 = document.querySelector('#price10');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price10.innerHTML = getRandomNumber(470,999);
    
    },3000);

////////////////////////////////////////////////////

let price11 = document.querySelector('#price11');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price11.innerHTML = getRandomNumber(470,999);
    
    },3000);

////////////////////////////////////////////////////

let price12 = document.querySelector('#price12');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price12.innerHTML = getRandomNumber(470,949);
    
    },3000);

///////////////////////////////////////////////////

let price13 = document.querySelector('#price13');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price13.innerHTML = getRandomNumber(470,775);
    
    },3000);

////////////////////////////////////////////////

let price14 = document.querySelector('#price14');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price14.innerHTML = getRandomNumber(470,775);
    
    },3000);

///////////////////////////////////////////////

let price15 = document.querySelector('#price15');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price15.innerHTML = getRandomNumber(380,680);
    
    },3000);

/////////////////////////////////////////////    

let price16 = document.querySelector('#price16');
     
setInterval(function (){
    function getRandomNumber(min,max){
        let step1 = max - min +1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)+ min;
        return result;
    
    };
    
    price16.innerHTML = getRandomNumber(470,720);
    
    },3000);

/////////////////////////////////////////////////    

{/* <input type="number" name="interest_rate" min="5" max="20" maxlength="2" onclick="box()" id="input2" class="form-control" placeholder="Enter Interest Rate" required> */}

function box(){

var check = parseInt((document.getElementById('price1').value));
var servicePerc1 = parseInt((document.getElementById('servicePerc').value));

if(((check<450) && (check>799)) === servicePerc1){
    // alert("Please enter in range between 5 to 20");
    if (document.getElementById('notify').checked) {
        alert("checked");
        (function(){
         setTimeout(sendEmail,5000);
        })
        ();
    } else {
        alert("Please mark up where you ant notifications");
    }
    }
}
setTimeout(box,4000);
 /// Gmail
 //////////////////////////////////////////////////////

//  <script src="https://smtpjs.com/v3/smtp.js"></script>

  //////////////////////////////////////////////////////
    const form = document.querySelector("#prodetails");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let servicePerc = document.querySelector("#servicePerc").value;
    let Notify = document.querySelector(".Notify").value;
  

    document.querySelector("#prodetails").reset();

    sendEmail(servicePerc,Notify);
  })
  function sendEmail(servicePerc,Notify){
    Email.send({
        
      Host: "smtp.elasticemail.com", 
      Username: "atulsomkuwar2@gmail.com",
      Password: "88C118862CECA6C732C323CB7B0D678D66D9",
      To: "atulsomkuwar2@gmail.com",
      From: "atulsomkuwar2@gmail.com",
      Subject: `${name} Just messaged you from the website form`,
      Body: `Range: ${servicePerc} <br> Email: ${Notify} <br> `,
     Attachments:[
        {
        name:"smtpjs.png",
        data:canvas.toDataUrl()
        }
     ]
    }).then((success) => {
     
      alert("message sent successfully. Please check the spam folder in your mail.");
    }).catch((error) => {
        
      alert("error sending message");
    })
  }
//   setTimeout(sendEmail,5000);

// alert("hello");

//////////////////////////////////////////////////////////////////

// Screenshot
{/* <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script> */}



   
    // function shot(){
    //     html2canvas(document.querySelector("#prodetails")).then(canvas => {
    //     document.body.appendChild(canvas)
    //  });
    // }
    //  setTimeout(shot,6000);

    /*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */

/////////////////////////////////////////////////////

   

function hehe(){
    $(document).ready(function(){
        function hey(){
            domtoimage.toBlob(document.getElementById('prodetails'))
            .then(function(blob){
                window.saveAs(blob,"output.png")
            })
        }
        setTimeout(hey,1000);
    })
}
setTimeout(hehe,1000);
    ///////////////////////////////////////////////