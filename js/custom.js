/*var sceneEl = document.querySelector("a-scene");
var box = sceneEl.querySelector("#box");
var orb = sceneEl.querySelectorAll('.clickable');

box.addEventListener("click", function () {
    for (var i = 0; i < orb.length; i++) {
        console.log(orb[i]);
        orb[i].setAttribute("material",  {
            color: "#666"
        });
    }              
});*/

var sceneEl = document.querySelector('a-scene');
var cone = sceneEl.querySelector('#cone');

cone.addEventListener('click', function () {
    cone.emit('change');
});

