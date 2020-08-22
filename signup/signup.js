
//elements get by querySelector

const label1 = document.querySelector(".label1");
const input1 = document.querySelector(".inputSelector1");

const label2 = document.querySelector(".label2");
const input2 = document.querySelector(".inputSelector2");

const label3 = document.querySelector(".label3");
const input3 = document.querySelector(".inputSelector3");

const label4 = document.querySelector(".label4");
const input4 = document.querySelector(".inputSelector4");

const label5 = document.querySelector(".label5");
const input5 = document.querySelector(".inputSelector5");

const label6 = document.querySelector(".label6");
const input6 = document.querySelector(".inputSelector6");

const label7 = document.querySelector(".label7");
const input7 = document.querySelector(".inputSelector7");

const label8 = document.querySelector(".label8");
const input8 = document.querySelector('.inputSelector8');

const label9 = document.querySelector(".label9");
const input9 = document.querySelector('.inputSelector9');

const date = document.querySelector('#date');
const dateP = document.querySelector(".dateP");
const date1 = document.querySelector(".date1");

const logButton = document.querySelector('#logButton');

const inputforgot = document.querySelector('.inputforgot');
const labelforgot = document.querySelector('.labelforgot');

//keyup event

input1.addEventListener('keyup', () => { key(label1,input1); } );
input2.addEventListener('keyup', () => { key(label2,input2); } );
input3.addEventListener('keyup', () => { key(label3,input3); } );
input4.addEventListener('keyup', () => { key(label4,input4); } );
input5.addEventListener('keyup', () => { key(label5,input5); } );
input6.addEventListener('keyup', () => { key(label6,input6); } );   
input7.addEventListener('keyup', () => { key(label7,input7); } );
input8.addEventListener('keyup', () => { key(label8,input8); } );
input9.addEventListener('keyup', () => { key(label9,input9); } );

//blur event

input1.addEventListener('blur', () => { inputBlur(label1,input1); } );
input2.addEventListener('blur', () => { inputBlur(label2,input2); } );
input3.addEventListener('blur', () => { inputBlur(label3,input3); } );
input4.addEventListener('blur', () => { inputBlur(label4,input4); } );
input5.addEventListener('blur', () => { inputBlur(label5,input5); } );
input6.addEventListener('blur', () => { inputBlur(label6,input6); } );
input8.addEventListener('blur', () => { inputBlur(label8,input8); } ); 

//focus event

input1.addEventListener('focus',() => { inputFocus(label1); } );
input2.addEventListener('focus',() => { inputFocus(label2); } );
input3.addEventListener('focus',() => { inputFocus(label3); } );
input4.addEventListener('focus',() => { inputFocus(label4); } );
input5.addEventListener('focus',() => { inputFocus(label5); } );
input6.addEventListener('focus',() => { inputFocus(label6); } );
input7.addEventListener('focus',() => { inputFocus(label7); } );
input8.addEventListener('focus',() => { inputFocus(label8); } );
input9.addEventListener('focus',() => { inputFocus(label9); } );

//click event but not used

// input1.addEventListener('click', () => { clicked(label1,input1); } );
// input2.addEventListener('click', () => { clicked(label2); } );
// input3.addEventListener('click', () => { clicked(label3); } );
// input4.addEventListener('click', () => { clicked(label4); } );
// input5.addEventListener('click', () => { clicked(label5); } );
// input6.addEventListener('click', () => { clicked(label6); } );


// keyup function

function key(param,input) {
    
    input = input.value;
    
     input === null ?param.classList.remove('active') : param.classList.add('active');
     
}

//blur function

function inputBlur(blur,input){
    let rePass = /(?=.*\d)(?=.*[\W])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let setPass = input4.value;
   if(input.value === ' '){
       blur.style.color = 'red';
   }
//    if(!rePass.test(setPass)){
//        blur.style.color = "red";
//    }
//    else {
//        blur.style.color = "#fff";
//    }
}

//focus function

function inputFocus(focus) {
    focus.style.color ="#a0b3b0";
   focus.classList.add(".activeClass");
}

//click function

// function clicked(param,input){
//          input = input.value;
//         //    let find = input.getAttribute('type');
//         //    let  is = (find === 'text' || find === " ");
//         let attr = param.classList.contains('active');
//         if(input === null){
//             param.classList.remove('active') 
//         }
//         else {

//         }
//          //param.classList.add('active');
//          attr === true && input === ' '? param.classList.remove('active') : param.classList.add('active');    
//         //    console.log(attr);
// }  
  


let setPass; 
setPass = input4.value;

//password hide and show

let show1 = document.querySelector('#show1');
let show2 = document.querySelector('#show2');

show1.addEventListener('click', () => {
      if(input4.type === 'password'){
          input4.type = 'text';
          show1.textContent = "Hide";
      }
      else {
          input4.type = 'password';
          show1.textContent = "Show";
      }
});

show2.addEventListener('click', () => {
    if(input5.type === 'password'){
        input5.type = 'text';
        show2.textContent = "Hide";
    }
    else {
        input5.type = 'password';
        show2.textContent = "Show";
    }
});

show3.addEventListener('click', () => {
    if(input7.type === 'password'){
        input7.type = 'text';
        show3.textContent = "Hide";
    }
    else {
        input7.type = 'password';
        show3.textContent = "Show";
    }
});

//date properties

date.onchange = change;
function change() {
    let dateToday = new Date();
    let valueDateToday = dateToday.getFullYear();
    let value = date.value;
  dateP.textContent = `Your chosen  date is ${value}`;
  date1.style.display ="block";
}

//id's and classess 

let create = document.querySelector(".create");
let confirm = document.querySelector('.confirm');

//style:block while keyup event is fired

input4.addEventListener('keyup',() => {  create.style.display = 'block'; });

//style:block while keyup event is fired

input5.addEventListener('keyup',() => confirm.style.display ='block');


//id's and classess 

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');
let p7 = document.querySelector('.p7');

let userP1 = document.querySelector('.userP1');
let userP2 = document.querySelector('.userP2');
let userP3 = document.querySelector('.userP3');
let userP4 = document.querySelector('.userP4');
let userP5 = document.querySelector('.userP5');

let unicodeRight = "\u2713";
let unicodeFalse = '\u2717';

let create1 = document.querySelector('.create1');
let create2 = document.querySelector('.create2');
let create3 = document.querySelector('.create3');
let create4 = document.querySelector('.create4');
let create5 = document.querySelector('.create5');
let create6 = document.querySelector('.create6');
let create7 = document.querySelector('.create7');

let passTick1 = document.querySelector("#passTick1");
let passTick2 = document.querySelector('#passTick2');
let passTick3 = document.querySelector('#passTick3');
let passTick4 = document.querySelector("#passTick4");
let passTick5 = document.querySelector('#passTick5');
let passTick6 = document.querySelector('#passTick6');
let passTick7 = document.querySelector('#passTick7');

let userCond = document.querySelector('.userCond');
let firstNameDetails = document.querySelector('.firstNameDetails');
let lastNameDetails = document.querySelector('.lastNameDetails');
let EmailAddressDetails = document.querySelector('.EmailAddressDetails');

let firstNameDetails1 = document.querySelector(".firstNameDetails1");
let lastNameDetails1 = document.querySelector(".lastNameDetails1");
let EmailAddressDetails1 = document.querySelector(".EmailAddressDetails1");
let EmailAddressDetails2 = document.querySelector(".EmailAddressDetails2");
let EmailAddressDetails3 = document.querySelector(".EmailAddressDetails3");

let hide = document.querySelector('.hide');
let hide1 = document.querySelector('.hide1');
let hide2 = document.querySelector('.hide2');
let hide3 = document.querySelector('.hide3');
let hide4 = document.querySelector('.hide4');
let hide5 = document.querySelector('.hide5');



let fnamep1 = document.querySelector('.fnameP1');
let lnamep1 = document.querySelector('.lnamep1'); 

let emailP = document.querySelector('.emailP');
let emailP1 = document.querySelector('.emailP1');
let emailP2 = document.querySelector('.emailP2');

let userCond1 = document.querySelector('.userCond1');
let userCond2 = document.querySelector('.userCond2');
let userCond3 = document.querySelector('.userCond3');
let userCond4 = document.querySelector('.userCond4');
let userCond5 = document.querySelector('.userCond5');

create1.textContent = unicodeFalse; create1.style.color = "white";
create2.textContent = unicodeFalse; create2.style.color = "white";
create3.textContent = unicodeFalse; create3.style.color = "white";
create4.textContent = unicodeFalse; create4.style.color = "white";
create5.textContent = unicodeFalse; create5.style.color = "white";
create6.textContent = unicodeFalse; create6.style.color = "white";
create7.textContent = unicodeFalse; create7.style.color = "white";

userCond1.textContent = unicodeFalse; userCond1.style.color = "white";
userCond2.textContent = unicodeFalse; userCond2.style.color = "white";
userCond3.textContent = unicodeFalse; userCond3.style.color = "white";
userCond4.textContent = unicodeFalse; userCond4.style.color = "white";
userCond5.textContent = unicodeFalse; userCond5.style.color = "white";

firstNameDetails1.textContent = unicodeFalse; firstNameDetails1.style.color = "white";
lastNameDetails1.textContent = unicodeFalse; lastNameDetails1.style.color = "white";

//check users input correct or not while keyup event is fired

input1.addEventListener('keyup', () => {
    
    firstNameDetails.style.display ="block";
    
    let value = input1.value;
        if((value === value.toUpperCase()) && (value.length !== 0))
          {
              firstNameDetails1.textContent = unicodeRight;
              firstNameDetails1.style.color = "lime";
              passTick4.style.display ="inline";
              passTick4.style.color = "lime";
              fnamep1.style.color = "lime";
              input1.style.borderColor = "lime";
              hide.textContent = `Hooray! ${value}`;
              hide.style.color ="lime";
              hide.style.left = 5+'%';
              
               
            //    input1.onchange = change1;   
               
            //    function change1(e) {
                   
            //     let newDiv = document.createElement('div');
            //     newDiv.id = "div2";
            //     let content = document.createTextNode(` Hooray! ${value}`);
            //     newDiv.appendChild(content);
            //     let currentDiv = document.querySelector('#div1');
            //     let parentDiv  =  currentDiv.parentNode;
            //     parentDiv.insertBefore(newDiv,currentDiv); 

            //     let div2 = document.querySelector('#div2');

            //     div2.style.width =95+'%';
            //     div2.style.height = 20+"%"; 
            //     div2.style.color = "#fff";
            //     div2.style.textAlign = "left";
            //     div2.style.position = "relative";
            //     div2.style.left = 10+'%';
            //     div2.style.marginBottom = 50+'px';

            //    }
                    
            
         
              
          }
          else {
            fnamep1.style.color = "red";
            passTick4.style.display = "none";
            firstNameDetails1.textContent = unicodeFalse;
            firstNameDetails1.style.color = "red";
            input1.style.borderColor = "red";
            hide.textContent =`Sorry cannot process, please type in capital Letters`;
            hide.style.color="red";
            //   input1.onchange = change2;

            //   function change2(e) {
                   

            //         let newDiv = document.createElement('div');
            //         newDiv.id = 'div2';
            //         let content = document.createTextNode(` Sorry First Name must be in capital letters `);
            //         newDiv.appendChild(content);
            //         let currentDiv = document.querySelector('#div1');
            //         let parentDiv = currentDiv.parentNode;

            //         parentDiv.insertBefore(newDiv,currentDiv);

            //         let div2 = document.querySelector('#div2');
            //         div2.style.color = "#fff";
            //         div2.style.width = 95+'%';
            //         div2.style.height = 20+'%';
            //         div2.style.textAlign = "left";
            //         div2.style.marginBottom = 50+'px';
            //         div2.style.position = "relative";
            //         div2.style.left = 10+'%';
            //   }

          }
    
        
});

//check users input correct or not while keyup event is fired

 input2.addEventListener('keyup', () => {
    lastNameDetails.style.display = "block";
    
    let value =  input2.value;
    if((value === value.toUpperCase()) && (value.length !== 0))
    {
        lastNameDetails1.textContent = unicodeRight;
        lastNameDetails1.style.color = "lime";
        passTick5.style.display ="inline";
        passTick5.style.color = "lime";
        lnamep1.style.color = "lime";
        input2.style.borderColor ="lime";
        hide1.textContent = "Good";
        hide1.style.color ="lime";
        hide1.style.left =5+'%';
        
    }
    else {
      lnamep1.style.color = "red";
      passTick5.style.display = "none";
      lastNameDetails1.textContent = unicodeFalse;
      lastNameDetails1.style.color = "red";
      input2.style.borderColor ="red";
      hide1.textContent ="Please make sure it satisfies the conditions below";
      hide1.style.color ="red";
    }

});

//check users input correct or not while keyup event is fired

input3.addEventListener('keyup', () => {
    EmailAddressDetails.style.display = "block";

    
    let value = input3.value;
    let check = value.includes("@");
     
       if(value.length !=0) {
           if(check) {
               if(value === value.toLowerCase()) {
                   passTick6.style.display ="inline";
                   passTick6.style.color ="lime";
                   hide3.textContent = "Good";
                   hide3.style.color ="lime";
                   hide3.style.left =5+"%";
               }
           }
       }
       else {
           passTick6.style.display ="none";
           hide3.textContent = "Please make sure it satisfies the conditions below";
           hide3.style.color ="red";
       }

     if(value.length!= 0 ) {
         EmailAddressDetails3.style.color = "lime";
         EmailAddressDetails3.textContent = unicodeRight;
         emailP2.style.color = "lime";
         input3.style.borderColor = "lime";
     }
     else {
        EmailAddressDetails3.style.color = "red";
        EmailAddressDetails3.textContent = unicodeFalse;
        emailP2.style.color = "red";
        input3.style.borderColor = "red";
     }
        if(!(value === value.toLowerCase())){
            passTick6.style.display = "none";
            passTick6.style.color = "red";
            EmailAddressDetails2.style.color = "red";
            EmailAddressDetails2.textContent = unicodeFalse;
            emailP1.style.color ="red";
            input3.style.borderColor ="red";
        }
    
        else {
           
            input3.style.borderColor = "lime";
            label3.style.color = "#fff";
            EmailAddressDetails2.style.color = "lime";
            EmailAddressDetails2.textContent = unicodeRight;
            emailP1.style.color = "lime";
          }
     
    
   
    if(!check){
        passTick6.style.display = "none";
        passTick6.style.color = "red";
        EmailAddressDetails1.style.color = "red";
        EmailAddressDetails1.textContent = unicodeFalse;
        emailP.style.color ="red";
        input3.style.borderColor ="red";
    }
    else {
       
        input3.style.borderColor = "lime";
        label3.style.color = "#fff";
        EmailAddressDetails1.style.color = "lime";
        EmailAddressDetails1.textContent = unicodeRight;
        emailP.style.color = "lime";
    }


});

//check users input correct or not while keyup event is fired

input4.addEventListener('keyup', () => checkSetPass(input4));

function checkSetPass(input) {
    let rePass = /(?=.*\d)(?=.*[\W])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let reLU = /(?=.*[a-z])(?=.*[A-Z])/;
    let reS = /(?=.*[\W])/;
    let reD = /(?=.*\d)/;
    let setPass = input.value;
    let firstName = input1.value;
    let userName = input8.value;

    console.log(setPass);
      
      if((userName.toUpperCase() === setPass.toUpperCase()) || (firstName.toUpperCase() === setPass.toUpperCase())){
        p7.style.color = "red" 
        create7.style.color = "red";
        create7.textContent = unicodeFalse;
      }
      else {
        p7.style.color = "lime"
        create7.style.color = "lime";
        create7.textContent = unicodeRight;
      }
    

    setPass.length<8 ? p1.style.color = 'red' :  p1.style.color ="lime";
    
    setPass.length === 0 ? p2.style.color ="red" :  p2.style.color = "lime"; 
  
    (!reLU.test(setPass)) ? p3.style.color = "red" : p3.style.color ="lime";
     
    (!reD.test(setPass)) ? p4.style.color = "red" : p4.style.color = "lime";

    (!reS.test(setPass)) ? p5.style.color = "red" : p5.style.color = "lime";

    if(!rePass.test(setPass)) {
        if((userName.toUpperCase() === setPass.toUpperCase()) || (firstName.toUpperCase() !== setPass.toUpperCase())){
            passTick1.style.display ="none";
            input4.style.borderColor = "red";
            hide4.textContent = "Please make sure it satisfies the below condition";
            hide4.style.color="red";
            
        }
        
        
    }
    else {
        passTick1.style.display = "inline";
        passTick1.style.color = "lime";
        input4.style.borderColor = "lime";
        label4.style.color = "#fff";
        hide4.style.color="lime";
        hide4.textContent = "Good";
        createNew();
     }

    if(setPass.length<8) {
        create1.style.color = "red"
        create1.textContent = unicodeFalse;
    }
    else {
        create1.textContent = unicodeRight;
        create1.style.color = "lime";
    }

    if(setPass.length === 0) {
        create2.style.color ="red";
        create2.textContent = unicodeFalse;
    }
    else {
        create2.textContent = unicodeRight;
        create2.style.color ="lime";
    }

    if(!reLU.test(setPass)) {
        create3.style.color = "red";
        create3.textContent = unicodeFalse;
    }
    else {
        create3.textContent = unicodeRight;
        create3.style.color = "lime";
    }
     
     if(!reD.test(setPass)) {
         create4.style.color = "red";
         create4.textContent = unicodeFalse;
     }
     else {
         create4.textContent = unicodeRight;
         create4.style.color = "lime";
     }

     if(!reS.test(setPass)) {
         create5.style.color = "red";
         create5.textContent = unicodeFalse;
     } 
     else {
         create5.textContent = unicodeRight;
         create5.style.color ="lime";
     }

    
}
function createNew(){

}

//check users input correct or not while keyup event is fired

input5.addEventListener('keyup', () => { 
   
    if(input4.value!== ' '){
       
        checkSame(input4,input5);
    } 
});

//function which checks values are correct or not

function checkSame(input4,input5) {
   
    input5Value = input5.value;
    
    if(input4.value === input5Value){
        create6.textContent = unicodeRight;
        create6.style.color = "lime";
        p6.style.color = "lime";
        passTick2.style.color = "lime";
        passTick2.style.display = "inline";
        input5.style.borderColor ="lime";
        hide5.textContent="Good";
        hide5.style.color="lime";
        hide5.style.left =2+'%';
    }
    else {
        create6.textContent = unicodeFalse;
        create6.style.color = "red";
        p6.style.color = "red";
        hide5.textContent="Please follow instructions";
        hide5.style.color="red";
    }
}

//check users input correct or not while keyup event is fired

input8.addEventListener('keyup',() => checkUser() );

function checkUser() {
   
     userCond.style.display = 'block';

    let input = input8.value;
    let length = input.length;
    let reN = /(?=.*\d)/;
    let reS = /(?=.*[\W])/;
    let re = /(?=.*\d)(?=.*[\W])/;
   
    if((input === input.toLowerCase()) && (input.length !==0) )
    {
          userCond5.style.color = "lime";
          userCond5.textContent = unicodeRight;
          userP5.style.color = "lime";

    }
    else {
        userCond5.style.color = "red";
        userCond5.textContent = unicodeFalse;
        userP5.style.color = "red";
    }

    if((!re.test(input)) && (length === 4)) {
        if(input === input.toLowerCase()){
            passTick3.style.color = "lime";
            passTick3.style.display = "inline";
           input8.style.borderColor = "lime";
           label8.style.color ="#fff";
           hide2.textContent = "Good";
           hide2.style.color="lime";
           hide2.style.left =5+'%';
        }
        
    }
    else {
       hide2.style.color='red';
        hide2.textContent = "Please make sure it satisfies the below condition";
        passTick3.style.display = "none";
    }

        if(length === 4) {
            userP1.style.color = "lime";
            userCond1.style.color ="lime";
            userCond1.textContent = unicodeRight;
        }
        else {
            userP1.style.color = "red";
            userCond1.textContent = unicodeFalse;
            userCond1.style.color = "red";
        }
        if(length !== 0) {
            userP2.style.color = "lime";
            userCond2.style.color = "lime";
            userCond2.textContent = unicodeRight;
        }
            else {
                userP2.style.color = "red";
                userCond2.style.color = "red";
                userCond2.textContent = unicodeFalse;
            }

        if(!reS.test(input)) {
            userP4.style.color = "lime";
            userCond4.style.color = "lime"
            userCond4.textContent = unicodeRight;
        }
        else {
            userP4.style.color = "red";
            userCond4.style.color = "red";
            userCond4.textContent = unicodeFalse;
        }

        if(!reN.test(input)) {
            userP3.style.color = "lime";
            userCond3.style.color ="lime";
            userCond3.textContent = unicodeRight;
        }
        else {
            userP3.style.color = "red";
            userCond3.style.color = "red";
            userCond3.textContent = unicodeFalse;
        }
}

//check users input correct or not while keyup event is fired

input9.addEventListener('keyup' ,() => {
    let value = input9.value;
    let re = /(?=.*\d)/;
  if(re.test(value))
  {
      if(value.length!=0){
          if(value.length === 10){
            passTick7.style.display="inline";
            passTick7.style.color ="lime";
            input9.style.borderColor = "lime";
          }
         
      }
  }
  else {
      input9.style.borderColor = "red";
  }
});

//login button and signup button show and hide

let tabActive = document.querySelector('.tab-active');
let tab = document.querySelector('.tab');

let signupKey = document.querySelector('#signupKey');
let signup = document.querySelector('#signup');

let loginKey = document.getElementById('loginKey');
let login = document.querySelector('#login');

let forgot = document.querySelector('#forgot');
let forgotPassword = document.querySelector('.forgotPassword');

tabActive.addEventListener('click', () => {
    tabActive.style.backgroundColor ="#1ab188";
    tab.style.backgroundColor = "#a0b3b0";
    signup.style.display ="block";
    login.style.display = "none";
    forgot.style.display = "none";
});


tab.addEventListener('click', () => {
     login.style.backgroundColor = "#13232f";
     tab.style.backgroundColor = "#1ab188";
     tabActive.style.backgroundColor ="#a0b3b0";
     login.style.display ="block";
     signup.style.display ="none";
     forgot.style.display ="none";
});

forgotPassword.addEventListener('click', () => {
    signup.style.display ="none";
    login.style.display = "none";
    forgot.style.display ="block";
});

let checkbox = document.querySelector('.checkbox');
let checkRobot = document.querySelector(".checkRobot");
let verify = document.querySelector('.verify');
let submit = document.querySelector('.submit');
let verify1 = document.querySelector('.verify1');

checkbox.addEventListener('click', () => {
   let letter = '0123456789ABCDEF';
   let content=" ";
   for(let i=0;i<4;i++){
      content= content + letter[Math.floor(Math.random()*10)];
   }
   checkRobot.textContent = content;
   checkRobot.style.color = "#fff";
   verify.style.display="block";
   verify.style.textAlign ="center";
 
    verify.addEventListener('keyup', () => {
        let value = verify.value;
         
        if(value !== content) {
            verify.style.color = "lime";
            verify.style.borderColor = "lime";
            verify1.style.display ="block";
            
        }
        else {
            verify.style.color = "red";
            verify.style.borderColor = "red";
            verify1.style.display ="none";
        }
    })
   
   
});


//forgot password 

inputforgot.addEventListener('keyup', () => {
    labelforgot.classList.add('active');
});

const button = document.querySelector('#button');
let firstName;
let lastName;
let emailAddress;

let confirmPass; 
let valueInput6; 

firstName = input1.value;
    lastName = input2.value;
    emailAddress = input3.value;
    setPass = input4.value;
    confirmPass = input5.value;
    valueInput6 = input6.value;

button.addEventListener('click', () =>  {
    firstName = input1.value;
    lastName = input2.value;
    emailAddress = input3.value;
    setPass = input4.value;
    confirmPass = input5.value;
    valueInput6 = input6.value;
      checkPassword(setPass,confirmPass);

     alert(`You have successfully submit 
Please go and login`);
console.log(`${firstName} 
${lastName} 
${emailAddress} 
${setPass} 
${confirmPass} 
${valueInput6}`)
});



function checkPassword(setPass,confirmPass) {
    let rePass = /(?=.*\d)(?=.*[\W])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  
  if(setPass.length>=8){
    if(setPass !== ' ' && confirmPass !== " "){
        if(setPass === confirmPass){
            if((rePass.test(setPass)) && (rePass.test(confirmPass))){
                console.log("password is  valid");
            }
            else {
                console.log('Error : Password must contain atleat one Lowercase, one uppercase letter, and numbers and symbols like "@,!,#,$,%,^,&,*,(,)"');
            }
        }
        else {
            console.log('Error: both set Password and confirm Password are not same');
        }
    }
    else {
        console.log('Error : password cannot be null or no value');
    }
  }
  else {
      console.log(' Error : Password must contain 8 character otherwise it is not valid');
  }
    
   
}

const loginConfirm = document.querySelector(".loginConfirm");
let newPage = document.querySelector("#newPage");

logButton.addEventListener('click', () => {
    
    console.log(emailAddress, setPass);
      if((input6.value === emailAddress) && (input7.value === setPass)) {
          loginConfirm.style.display = "none";
         click();
      }
      else {
          loginConfirm.style.display = "block";
      }
});

function click() {
    newPage.textContent =`Welcome ${firstName}`;
    newPage.click();
}