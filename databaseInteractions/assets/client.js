var submit = document.getElementById('submit');

submit.onclick = function(){
    var request = new XMLHttpRequest();
    var Name = document.getElementById('name');
    var Reps = document.getElementById('reps');
    var Weight = document.getElementById('weight');
    var newDate = document.getElementById('date');
    var Unit = document.getElementById('unit');
    request.open("GET", "http://flip1.engr.oregonstate.edu:9001/index?name=" +Name+"&reps="+Reps+"&weight="+Weight+"&date="+newDate+"&unit="+Unit, true);
    console.log('suh');
};

function renderTable(data){
    var json = JSON.parse(data.results);
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement("table");
    var table_contents = document.createElement("tbody");
}
