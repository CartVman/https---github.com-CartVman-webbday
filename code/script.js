const audio = {
    Map: new Howl({
        src: 'code/audio/you.mp3',
        html5: true,
        volume: 1,
        loop: true
    })
}


let clicked = false

addEventListener('click', ()=> {
    if(!clicked) {
        clicked = true
        audio.Map.play()
    }
})