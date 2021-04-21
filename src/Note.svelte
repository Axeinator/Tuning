<script>
    import { setContext, createEventDispatcher } from 'svelte'
    import * as Tone from 'tone';
	
    const dispatch = createEventDispatcher();
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
        dispatch('otherNotePlayed');
        console.log("Dispatched");
    }
    function stopNote(event) {
        console.log('Stopping');
        synth.triggerRelease();
    }

</script>
<button on:click="{playNote}" on:otherNotePlayed={stopNote}>
    Play {noteToPlay}
</button>