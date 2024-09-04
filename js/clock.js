function sat() {

    //formatiranje vremena u sati:minute:sekunde
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    //provjerava je li u pitanju prijepodne ili poslijepodne
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    //provjerava i formatira vrijeme ovisno o tome radi li se o AM ili PM
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("sat").innerText = time;
    document.getElementById("sat").textContent = time;
    
    //okidanje funkcije svake cijele sekunde, upravo to što želimo ako je u pitanju sat sa sekundama
    setTimeout(sat, 1000);
}

sat();