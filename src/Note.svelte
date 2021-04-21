<script>
    import * as Tone from 'tone';
    import { playing } from './notePlaying.js'
    
    const synth = new Tone.Synth().toDestination();
    export let noteToPlay;
    let audioContextReady = false;
    async function playNote() {
        if (!audioContextReady) {
            await Tone.start();
            audioContextReady = true;
            console.log("Audio good to go!");
        };
        synth.triggerAttack(noteToPlay);
        playing.set(noteToPlay)
    }
    function stopNote() {
        console.log('Stopping');
        synth.triggerRelease();
    }
    playing.subscribe(newVal => {
        if (newVal != noteToPlay) {
            stopNote();
        }
    })

</script>
<button on:click="{playNote}">
    Play {noteToPlay}
</button>