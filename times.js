// JavaScript Document
function tick() {
    var years,months,days,hours, minutes, seconds;
    var intYears,intMonths,intDays,intHours, intMinutes, intSeconds;
    var today;
    today = new Date();     //ϵͳ��ǰʱ��
    intYears = today.getFullYear();  //�õ����,getFullYear()��getYear()������
    intMonths = today.getMonth() + 1; //�õ��·ݣ�Ҫ��1
    intDays = today.getDate();   //�õ�����
    intHours = today.getHours();  //�õ�Сʱ 
    intMinutes = today.getMinutes(); //�õ�����
    intSeconds = today.getSeconds(); //�õ�����
    years = intYears + "-";    
        
    if(intMonths < 10 ){
     months = "0" + intMonths +"-";
    } else {
     months = intMonths +"-";
    }
    if(intDays < 10 ){
     days = "0" + intDays +"  ";
    } else {
     days = intDays + "  ";
    }
    if (intHours == 0) {
    hours = "00:";
    } else if (intHours < 10) {
    hours = "0" + intHours+":";
    } else {
    hours = intHours + ":";
    }
    if (intMinutes < 10) {
    minutes = "0"+intMinutes+":";
    } else {
    minutes = intMinutes+":";
    }
    if (intSeconds < 10) {
    seconds = "0"+intSeconds+" ";
    } else {
    seconds = intSeconds+" ";
    }
    timeString = years+months+days+hours+minutes+seconds;
    Clock.innerHTML = timeString;
    window.setTimeout("tick();", 1000);
   }
   window.onload = tick;
   
<!--//--><!--[CDATA[//--><!--
            if (document.images) {
                img1 = new Image();
                img2 = new Image();
                img4 = new Image();
                img5 = new Image();
                img6 = new Image();
                img7 = new Image();
                img8 = new Image();
                img3 = new Image();
                img1.src = "img/11.jpg";
                img2.src = "img/22.jpg";
                img3.src = "img/33.jpg";
                img4.src = "img/44.jpg";
                img5.src = "img/55.jpg";
                img6.src = "img/66.jpg";
                img7.src = "img/77.jpg";
                img7.src = "img/88.jpg";
            }
        //--><!--]]-->