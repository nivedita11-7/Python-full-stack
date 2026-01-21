function bookCab() {
    let name = document.getElementById("name").value;
    let distance = document.getElementById("distance").value;
    let cabtype = document.getElementById("cabType").value;
    let rate = cabtype ==="Mini" ? 10 : cabtype ==="sedan"? 15 :2;
    let fare = rate*distance;

    document.getElementById("result").innerHTML ="Booking conformed.Fare: "+ fare;
    return false;


    }