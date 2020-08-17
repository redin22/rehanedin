
const typedTextSpan = document.querySelector(".typed-txt");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Columbia '22","Data Scientist","Researcher"];
const typingDelay = 200; //ms it takes to type
const erasingDelay = 100;
const newTextDelay = 2000; //current and next string delay
let textArrayIndex = 0;
let charIndex = 0; //starting from first character. let is for assignment

function type(){
    if(charIndex < textArray[textArrayIndex].length){
       if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{ //erase
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);

    }
}
function erase(){
    if(charIndex >0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded",function(){
    if(textArray.length)
    setTimeout(type, newTextDelay + 250);
});

$(document).ready(function(){
    $('.submit-btn').click(function(event){
       
       // console.log('Clicked button')

        var name = $('uname').val()
        var email = $('mail').val()
        var subject = $('subject').val()
        var message = $('message').val()
       // var error_message = docu

        if(email.length> 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div> Email is valid</div>')
        }else{
            event.preventDefault()
            statusElm.append('<div> Email is not valid</div>')
        }
        if(subject.length>2){
            statusElm.append('<div> Subject is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div> Subject is not valid</div>')
        }
    });
});