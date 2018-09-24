// Your scripts here
var tip = document.getElementById("percent");
var button1 = document.getElementById("calculate");
var button2 = document.getElementById("tipValueUp");
var button3 = document.getElementById("tipValueDown");
var button4 = document.getElementById("peopleValueUp");
var button5 = document.getElementById("peopleValueDown");
var people = document.getElementById("people");
var percent = tip.value/100;


button1.onclick = (e) => {
    var amount = Number(document.getElementById("amount").value);
    document.getElementById("total").innerHTML = amount + (amount * percent);
    document.getElementById("tip").innerHTML = amount * percent;
    document.getElementById("pertip").innerHTML = (amount * percent)/people.value;
    document.getElementById("pertotal").innerHTML = (amount + (amount * percent))/people.value;
}

button2.onclick = (e) => {
    var tipValue = Number(tip.value);
    tip.value = tipValue + 1;
}
button3.onclick = (e) => {
    var tipValue = Number(tip.value);
    tip.value = tipValue - 1;
}
button4.onclick = (e) => {
    var peopleValue = Number(people.value);
    people.value = peopleValue + 1;
}
button5.onclick = (e) => {
    var peopleValue = Number(people.value);
    people.value = peopleValue - 1;
}
