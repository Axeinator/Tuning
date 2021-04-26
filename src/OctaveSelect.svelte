<script>
    import { octave } from './stores.js';

    function increaseOctave() {
        octave.update(n => n + 1);
    }
    function decreaseOctave() {
        octave.update(n => n - 1);
    }
</script>
<button on:click="{increaseOctave}">
    Octave +
</button>
<button on:click="{decreaseOctave}">
    Octave -
</button>