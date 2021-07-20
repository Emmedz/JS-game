const WIDTH= 600;
const HEIGH= 400;

let target ={
    x: getRandomnumber(WIDTH),
    y: getRandomnumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function(e) {
    clicks++;
    let distance = getDistance(e, target);
    console.log(distance);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 5) {
        alert(`Found the Treasure in ${clicks} clicks`)
        location.reload();
    }
})