var submit = document.getElementById('submit');

submit.onclick = function(){
    var request = new XMLHttpRequest();
    var Name = document.getElementById('name').value;
    var Reps = document.getElementById('reps').value;
    var Weight = document.getElementById('weight').value;
    var newDate = document.getElementById('date').value;
    var Unit = document.getElementById('unit').value;
    request.open("GET", "http://flip3.engr.oregonstate.edu:2119/form?name=" +Name+"&reps="+Reps+"&weight="+Weight+"&date="+newDate+"&unit="+Unit, true);
    console.log(Name, Reps, Weight, newDate, Unit);
    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    
};
