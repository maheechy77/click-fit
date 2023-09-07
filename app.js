function ajaxCall(){
    let xhr = new XMLHttpRequest();
 
    // Making our connection 
    let url = 'http://numbersapi.com/1/30/date?json';
    xhr.open("GET", url, true);
 
    // function execute after request is successful
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxData").innerHTML = JSON.parse(this.responseText).text;
            document.getElementById("ajaxDataYear").innerHTML = "Year: "+JSON.parse(this.responseText).year;
            document.getElementById("ajaxDataNumber").innerHTML ="Number: "+ JSON.parse(this.responseText).number;
            document.getElementById("ajaxDataFound").innerHTML = "Found: "+JSON.parse(this.responseText).found;
        }
    }
    // Sending our request
    xhr.send();
}

ajaxCall();