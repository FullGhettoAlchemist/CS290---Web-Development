

var body = document.getElementsByTagName('body')[0];
var submit = document.getElementById('getsubmit');
//var submit = document.createElement("button");
// var button_text = document.createTextNode("Submit");
var output_div = document.createElement("div");
// submit.appendChild(button_text);
submit.style.marginTop = "5px";
submit.style.marginBottom = "5px";
//body.appendChild(submit);
body.appendChild(output_div);
submit.onclick = function(){
    var request = new XMLHttpRequest();
    var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";
    //request.open(request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("zip").value + ",us" + "&appid=" + apiKey, false));
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("zip").value + ",us" + "&appid=" + apiKey, false);
    request.send(null);
    console.log(JSON.parse(request.responseText));
    var response = JSON.parse(request.responseText);
    var body = document.getElementsByTagName('body')[0];
    output_div.setAttribute("id","output");
    output_div.style.marginTop = "40px";
    var output_label = document.createTextNode("GET Weather in: " + response.name);
    output_div.style.fontSize = "20px";
    output_div.appendChild(output_label);
    body.appendChild(output_div);
    var temp = response.main.temp;
    temp = Math.round((9/5)*(temp - 273) + 32);
    var humidity = response.main.humidity;
    var temp_out = document.createElement("ul");
    var temp_label = document.createTextNode("Temperature: " + temp + " F");
    var temp_val = document.createTextNode(temp);
    var humidity_out = document.createElement("ul");
    var humidity_label = document.createTextNode("Humidity: "+ humidity + "%");
    temp_out.appendChild(temp_label);
    humidity_out.appendChild(humidity_label);
    var output = document.getElementById("output");
    output.appendChild(temp_out);
    output.appendChild(humidity_out);
};

var post_submit = document.getElementById('postsubmit');
post_submit.style.marginTop = "5px";
post_submit.style.marginBottom = "5px";
post_submit.onclick = function(){
    var req = new XMLHttpRequest();
    var val = document.getElementById('poststring').value;
      req.open("POST", " http://httpbin.org/post", false);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify({"something" : val}));
      postResponse = (JSON.parse(req.responseText));
      console.log(JSON.parse(req.responseText));
      var body = document.getElementsByTagName('body')[0];
      var postDiv = document.createElement("div");
      postDiv.style.marginTop = "40px";
      postDiv.style.fontSize = "20px";
      var postDivLabel = document.createTextNode("POST output: " + postResponse.json["something"]);
      postDiv.appendChild(postDivLabel);
      body.appendChild(postDiv);
}
