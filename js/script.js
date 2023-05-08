// 3-D скролл

let zSpacing =  -1000,
    lastPos = zSpacing / 5
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function() {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals [i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals [i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    }); 
}

window.scrollTo(0, 1)

// Music
let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')

    // Запуск Audio
    audio.paused ? audio.play() : audio.pause()
});


// Выключение при переходе на другую вкладку
window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

// Выключение
window.onblur = function() {
    audio.pause()
}