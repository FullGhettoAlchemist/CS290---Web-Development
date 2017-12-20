var recipeDict = {
    '1': 'sausage.html',
    '2': 'poutine.html',
    '3': 'olio.html',
    '4': 'agedashitofu.html',
    '5': 'spamfriedrice.html',
    '6': 'vietnamesenoodles.html',
    '7': 'kimchi.html'
};

$("#recipe-content").load(recipeDict[1]);

(function() {
   // your page initialization code here
   // the DOM will be available

   $('#recipe-menu li').click(function(){
       console.log(this.id);
       recipeFetcher(this.id);
   });
})();

function recipeFetcher(id){
    //console.log(id);
    //$("#recipe-content").load("sausage.html");
    $("#recipe-content").load(recipeDict[id]);
}
