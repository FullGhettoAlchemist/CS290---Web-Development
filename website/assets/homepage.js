//var poop = document.getElementById('slideshow');
//var pics = $("#slideshow").find("blockquote

//$('#slideshow').hide();

var pics = $('#slideshow').find('.slide');

function displayer(pic_location, delay){
    setTimeout(function(){
        for(var i = 0; i < pics.length; i++){
                $(pics[i]).hide();
        }
        $(pics[pic_location]).show();
    }, delay);

}

function cycle(duration){
    var increment = duration/pics.length;
    var delay = 0;
    for(var i = 0; i < pics.length; i++){
        displayer(i, delay);
        delay = delay+increment;
    }
}

var duration = 60000;

cycle(duration);
setInterval(function(){ cycle(duration); }, duration);
