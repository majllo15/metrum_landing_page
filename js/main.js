const 
    daysSpan = document.querySelector('.days'),
    hoursSpan = document.querySelector('.hours'),
    minutesSpan = document.querySelector('.minutes'),
    secondsSpan = document.querySelector('.seconds'),
    startDate = new Date("Mar 30, 2023 20:00:00").getTime();


const countdown = (params) => {
    let nowDate = new Date().getTime(),
        timeLeft = startDate - nowDate;

    const 
        second = 1000,
        minute = second * 60,
        hour = minute *60,
        day = hour * 24;

    let 
        daysLeft = Math.floor(timeLeft / day),
        hoursLeft = Math.floor((timeLeft % day) / hour),
        minutesLeft = Math.floor((timeLeft % hour) / minute),
        secondsLeft = Math.floor((timeLeft % minute) / second);
    
        
        daysSpan.innerText = daysLeft;
        hoursSpan.innerText = hoursLeft;
        minutesSpan.innerText = minutesLeft;
        secondsSpan.innerText = secondsLeft;
        
};

setInterval(countdown, 1000);