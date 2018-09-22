function myFunction() {
    var a = document.getElementById('your-name').value;
    var b = document.getElementById('age').value;
    var c = document.getElementById('horse').value;
    var d = document.getElementById('select').value;

    if (d == 'Austria') {
        var austria = Number(c) * 100 / (Number(b) + 50);
        document.getElementById('Calculate').innerHTML = a + ", your insurance costs "  + Math.floor(austria) + " €";
    } else if (d == "Sweden") {
        var sweden = Number(c) * 100 / (Number(b) + 100);
        document.getElementById('Calculate').innerHTML = a+ ", your insurance costs " + Math.floor(sweden) + " €";
    } else if (d == "Spain") {
        var spain = Number(c) * 100 / ((Number(b) + 3) + 150);
        document.getElementById('Calculate').innerHTML = a + ", your insurance costs " + Math.floor(spain) + " €";
    }

};
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
};

