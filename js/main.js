let global;

let counter=0
function moveFirstTimeMode(){

    global=setInterval(function(){
        let secondHand = document.querySelector('.mode-one .sec');
        let minsHand = document.querySelector('.mode-one .min');
        let hourHand = document.querySelector('.mode-one .hour');
    
        let date = new Date();
    
        let second = date.getSeconds();
        let secondDegrees=(second*6)+90
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
        let min=date.getMinutes()
        let minDegrees=(min*6)+ ((second/60)*6)+90
        minsHand.style.transform = `rotate(${minDegrees}deg)`;
    
    
        let hour=date.getHours()
        let hourDegrees=((+hour > 12 ? hour-12 : hour )* 30)+((min/60)*30)+90
    
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    },1000)


}



function moveSecondTimeMode(){

    global=setInterval(function(){

        let secondHand = document.querySelector('.mode-two .second');
        let minsHand = document.querySelector('.mode-two .min');
        let hourHand = document.querySelector('.mode-two .hour');
    
        let date = new Date();
    
        let second = date.getSeconds();
        let secondDegrees=(second*6)+90
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
        let min=date.getMinutes()
        let minDegrees=(min*6)+ ((second/60)*6)+90
        minsHand.style.transform = `rotate(${minDegrees}deg)`;
    
    
        let hour=date.getHours()
        let hourDegrees=((+hour > 12 ? hour-12 : hour )* 30)+((min/60)*30)+90
    
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    },1000)


}



function moveThirdTimeMode(){

    global=setInterval(function(){

        let secondHand = document.querySelector('.mode-three #sec');
        let minsHand = document.querySelector('.mode-three #min');
        let hourHand = document.querySelector('.mode-three #hour');
    
        let date = new Date();
    
        let ms = date.getMilliseconds();
        let second = date.getSeconds();
        let secondDegrees=(second*6)+ ((ms/1000)*6) 
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    
        let min=date.getMinutes()
        let minDegrees=(min*6)+ ((second/60)*6)
        minsHand.style.transform = `rotate(${minDegrees}deg)`;
    
    
        let hour=date.getHours()
        let hourDegrees=((+hour > 12 ? hour-12 : hour )* 30)+((min/60)*30)
    
    
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    },1)



}




let AllClocks=document.querySelectorAll("body > .main")


document.querySelector(".design").onclick=function(){
    if(counter === 2){
        counter=0
    }
    else{
        counter++;
    }
    removeAllClassActive()
    AllClocks[counter].classList.add("active")
    StartClock(counter)
}


function removeAllClassActive(){
    AllClocks.forEach(element => {
        element.classList.remove("active")
        
    });
}



function StartClock(){

    clearInterval(global)

    if(counter === 0){
        moveFirstTimeMode()
        
    }
    else if(counter === 1){
        moveSecondTimeMode()
    }
    else{
        moveThirdTimeMode()
    }


}

StartClock()


