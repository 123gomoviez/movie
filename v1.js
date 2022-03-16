var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [

"https://ww2.putlockerstv.one/movies/",
"https://us.putlockerstv.one/movies/",
"https://ww1.123gomovies.link/movies/"

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
