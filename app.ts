import * as Tone from 'tone';

document.getElementById('play-button')!.addEventListener('click', () => {
    toggleMetronome();
})

Tone.Transport.bpm.value = 120;
Tone.Transport.start();


const synth = new Tone.Synth({
    
}).toDestination();
let metronomeIsRunning = false;
let loop = new Tone.Loop(time => {
    synth.triggerAttackRelease("C3", "8n", time);
}, "4n")

function toggleMetronome() {
    if(!metronomeIsRunning) {
        loop.start(0)
        metronomeIsRunning = true;
    } else {
        loop.stop()
        metronomeIsRunning = false;
    }
}




