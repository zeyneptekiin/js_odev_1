//İsim bilgileri

let firstName = prompt ("Lütfen Adınızı Giriniz!")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${firstName}`


// Zaman

function showTime(){
    var now = new Date();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var day = now.getDay();
    
    const week = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let dayName = `${week[day]}`

    
    document.getElementById('hours').innerHTML = (hrs<10?"0":"") + hrs;
    document.getElementById('minutes').innerHTML = (min<10?"0":"") + min;
    document.getElementById('seconds').innerHTML = (sec<10?"0":"") + sec;
    document.getElementById('day').innerHTML = dayName;
}

setInterval(showTime, 10);