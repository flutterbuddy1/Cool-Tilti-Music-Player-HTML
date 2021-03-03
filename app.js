const plate = document.querySelector('.plate');
const music = document.querySelector('#music');

music.addEventListener("play",function(){
    plate.style.animation = "circle 3s linear infinite";
});
music.addEventListener("pause",function(){
    plate.style.animation = "";
});

$('.opacity').tilt({
    perspective:1000
})