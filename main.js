const body=document.querySelector('body');
const toggle=document.getElementsByClassName('toggle')[0];
const alamset=document.getElementById('Alam-set');
const btn=document.getElementsByClassName('btn')[0];
const stopbtn=document.getElementById('stop-btn');
const audio=new Audio("warning.mp3");
setInterval(()=>{
   d=new Date();
   htime=d.getHours();
   mtime=d.getMinutes();
   stime=d.getSeconds();
   let h=htime;
   let m=mtime;
   let dur;
   dur=(htime==12)?"Noon":((htime>12)?"PM" : "AM");
   
   if(h>12){
      h=h-12;
   }
   if(h<10){
      h= "0"+h;
       }
   if(mtime<10){
      m= "0"+ m;
   }
   hrotation= (30*htime) +( mtime/2);
   mrotation=6 * mtime;
   srotation=6 * stime;
   document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
   document.getElementById("minutes").style.transform=`rotate(${mrotation}deg)`;
   document.getElementById("seconds").style.transform=`rotate(${srotation}deg)`;
   document.getElementById("time").innerHTML=`${h}:${m} ${dur}`
},1000);
toggle.onclick= function(){
   toggle.classList.toggle('active');
   body.classList.toggle('active');
   alamset.classList.toggle('active'); 
   btn.classList.toggle('active');
   stopbtn.classList.toggle('active');
}  

let setAlarm=()=>{
   setInterval(()=>{
      let alarmhour=document.getElementById('Alarm-Hours').value;
   let alarmmin=document.getElementById('Alarm-Minutes').value;
   let alarmsec=document.getElementById('Alarm-Seconds').value;
   let alarmdur=document.getElementById('Alarm-duration').value;
  const date=new Date();
 const h= date.getHours();
 const m=date.getMinutes()
 const s=date.getSeconds();
   if(alarmdur=='PM'){
         alarmhour =Number.parseInt(alarmhour);
      alarmhour +=12;
   }
   
    if(h==alarmhour && m==alarmmin ){
      audio.play();
    }
    console.log(h);
   console.log(alarmhour);
   console.log(alarmmin);
   console.log(alarmsec);
   console.log(alarmdur);
},1000)
}
const stopAudio=()=>{
   audio.pause();
   alamset.currentTime=0;
   document.getElementById('Alarm-Hours').value=`1`;
   document.getElementById('Alarm-Minutes').value=`1`;
  
}
btn.addEventListener("click",setAlarm);
stopbtn.addEventListener("click",stopAudio);