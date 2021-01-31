import * as Tone from 'tone';

Tone.Transport.bpm.value = 80;
Tone.Transport.timeSignature = [3, 4];

const timeOfOneMeasureInSeconds = 60/Tone.Transport.bpm.value*3
const pointer = document.getElementById('pointer') as HTMLDivElement;

console.log(pointer);





document.getElementById('play-button')!.addEventListener('click', () => {
    Tone.start().then(() => {
        toggleMetronome();
    })
})




const synth = new Tone.Synth({
    envelope: {
        release: 0.01,
        sustain: 1,
        attack: 0
    }
}).toDestination();
let metronomeIsRunning = false;
let beatCount = 0;
let loop = new Tone.Loop(time => {



    if (beatCount === 0) {
        synth.triggerAttackRelease("C5", 0.001, time);
    } else {
        synth.triggerAttackRelease("C4", 0.001, time);
    }

    if (beatCount++ == 2) {
        beatCount = 0;
    }


}, "4n")

function toggleMetronome() {
    if (!metronomeIsRunning) {
        pointer.style.animation = `leftToRight ${timeOfOneMeasureInSeconds}s linear infinite`
        Tone.Transport.start();
        loop.start(0)
        metronomeIsRunning = true;
    } else {
        Tone.Transport.stop();
        pointer.style.animation = ``
        loop.stop()
        beatCount = 0;
        metronomeIsRunning = false;
    }
}




