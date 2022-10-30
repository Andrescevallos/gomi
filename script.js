const 
$days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final');

// fecha a futuro

const countdownDate = new Date('nov 11, 2022 15:50:00').getTime();

let inteval = setInterval(function(){
    // obtener fecha actual y miliseconds
    const now = new Date().getTime();

    
    //obtener las distancias entre ambas fechas

    let distance = countdownDate - now

    // calculo de los milisegundos

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(distance % (1000 * 60  * 60) / (1000 * 60))
    let seconds = Math.floor(distance % (1000 * 60) / (1000))

    // resultados

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ("0" + seconds).slice(-2)

    //cuando llegue a 0

    if (distance < 0) {
        clearInterval(inteval);
        $finalMessage.style.transform = "translateY (0)"
    }

} , 1000);

