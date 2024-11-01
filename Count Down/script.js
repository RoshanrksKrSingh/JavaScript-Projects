const days =document.getElementById('days');
const hours =document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const updateCountDown = (deadline)=>{
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //milisecs

    //caculate days,hours,mins and secs from time difference

    let calSecs = Math.floor(timeDifference/1000)%60;
    let calMins = Math.floor(timeDifference/1000/60)%60;
    let calHours = Math.floor(timeDifference/1000/60/60)%24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);

    const formatTime = (time)=>{
       return time < 10 ? `0${time}` : time;
        }   
    secs.textContent = formatTime(calSecs);  
    mins.textContent = formatTime(calMins);  
    hours.textContent = formatTime(calHours);  
    days.textContent = formatTime(calDays);  
       
    
}

const countDown = (targetDate)=>{
   setInterval(()=> updateCountDown(targetDate),1000)
}

const targetDate = new Date('June 07 2025 07:00');

countDown(targetDate);
