function generateColor(){
var letters='0123456789ABCDEF';
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*16)];
}
document.getElementById('colorBox').style.backgroundColor=color;
document.getElementById('colorText').innerHTML=color;
}
function copyColor(){
var colorText=document.getElementById('colorText').innerHTML;
navigator.clipboard.writeText(colorText);
alert('Color code copied: '+colorText);
}
generateColor();