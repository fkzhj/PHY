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
    years = intYears + "��";    
        
    if(intMonths < 10 ){
     months = "0" + intMonths +"��";
    } else {
     months = intMonths +"��";
    }
    if(intDays < 10 ){
     days = "0" + intDays +"��  ";
    } else {
     days = intDays + "��  ";
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
    seconds = "0"+intSeconds+"<br>";
    } else {
    seconds = intSeconds+"<br>";
    }
    timeString = hours+minutes+seconds+years+months+days;
    Clock.innerHTML = timeString;
    window.setTimeout("tick();", 1000);
//  return timeString;
}
   window.onload = tick;
