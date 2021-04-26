<script>
    import { octave } from './stores.js';
    import { get } from 'svelte/store'

    function increaseOctave() {
        if (get(octave) < 8) {
            octave.update(n => n + 1);
        }
    }
    function decreaseOctave() {
        if (get(octave) > 0) {
            octave.update(n => n - 1);
        }
    }
</script>
<button on:click="{increaseOctave}">
    Octave +
</button>
<button on:click="{decreaseOctave}">
    Octave -
</button>