/*var myAudio = document.createElement("video");
myAudio.setAttribute('controls',true);
var music_div=document.getElementById("music_div")
music_div.appendChild(myAudio)
myAudio.src = "intro_video.mp4";

but.onclick=function() {
    myAudio.play();
}*/
var myAudio
function for_proress(num) {
    
    num-=check_ps.value;
    for (let index = 0; index <= num*10; index++) {
        setTimeout(f,0.5*index)
        function f() {
            check_ps.value+=0.1
        }
    }
}
for_proress(99.8)
setTimeout(d,500)
function d() {
    ws.style.display="none"
    check_ps.style.display="none"
    succsess.style.display="block"
    wss.style.display="block"
    play_1.style.display="block"
}
play_1.onclick=function () {
    succsess.style.display="none"
    wss.style.display=     "none"
    play_1.style.display=  "none"
    myAudio = document.createElement("video");
    myAudio.removeAttribute('controls');
    myAudio.setAttribute('style',"margin-left:100px;");
    var music_div=document.getElementById("music_div")
    music_div.appendChild(myAudio)
    myAudio.src = "intro_video.mp4"
    myAudio.play();
    setTimeout(t,11000)
    function t() {
        play_button.style.display="flex"
    }
}