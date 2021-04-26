<script>
    import * as Tone from 'tone';
    import { playing, audioContextReady, octave } from './stores.js'
    import { get } from 'svelte/store';
    
    const synth = new Tone.Synth().toDestination();
    export let noteToPlay;
    let octaveToPlay;
    async function playNote() {
        if (!audioContextReady) {
            await Tone.start();
            audioContextReady.set(true);
        };
        synth.triggerAttack(noteToPlay + get(octave));
        playing.set(noteToPlay)
    }
    function stopNote() {
        synth.triggerRelease();
    }
    playing.subscribe(newVal => {
        // check if we're starting a different note, then stop the current note
        if (newVal != noteToPlay) {
            stopNote();
        }
    })
    octave.subscribe(newVal => {
        octaveToPlay = newVal;
    })

</script>
<button on:click="{playNote}">
    Play {noteToPlay}{octaveToPlay}
</button>