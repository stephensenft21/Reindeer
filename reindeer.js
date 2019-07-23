var hohohoElement = document.getElementById("reindeer");
var colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Hazel",
    "Aquamarine",
    "Periwinkle",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Amber",
    "Amaranth"
];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

for (var i = 0; i < colors.length; i++) {
    for(var j = 0; j < reindeer.length; i++){

        if(colors[i] == reindeer[j]){
            $('div:contains("'+colors[i]+'")').append("<div id='reindeer'>"+colors[i]+" - appended</div>");
        }
    }
    console.log(i); // index
    console.log(colors[i],reindeer[j]); // value
   
}

