CountDownTimer('10/10/2016 12:00 AM', 'countdown');

 function CountDownTimer(dt, id)
 {
     var end = new Date(dt);

     var _second = 1000;
     var _minute = _second * 60;
     var _hour = _minute * 60;
     var _day = _hour * 24;
     var timer;

     function showRemaining() {
         var now = new Date();
         var distance = end - now;
         if (distance < 0) {

             clearInterval(timer);
             document.getElementById(id).innerHTML = 'สิ้นสุดการรับสมัคร!';

             return;
         }
         var days = Math.floor(distance / _day);
         var hours = Math.floor((distance % _day) / _hour);
         var minutes = Math.floor((distance % _hour) / _minute);
         var seconds = Math.floor((distance % _minute) / _second);

         document.getElementById(id).innerHTML = days + ' วัน ';
         document.getElementById(id).innerHTML += hours + ' ชั่วโมง ';
         document.getElementById(id).innerHTML += minutes + ' นาที ';
         document.getElementById(id).innerHTML += seconds + ' วินาที';
     }

     timer = setInterval(showRemaining, 1000);
 }
