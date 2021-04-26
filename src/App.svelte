<script>
    import Note from './Note.svelte';   
    import Stop from './Stop.svelte';
    import OctaveSelect from './OctaveSelect.svelte'
</script>

<h1>Tuning Tones</h1>

<div class="notes">
    <Note noteToPlay="C"/>
    <Note noteToPlay="D"/>
    <Note noteToPlay="E"/>
    <Note noteToPlay="F"/>
    <Note noteToPlay="G"/>
    <Note noteToPlay="A"/>
    <Note noteToPlay="B"/>
    <Stop/>
    <OctaveSelect></OctaveSelect>
</div>

