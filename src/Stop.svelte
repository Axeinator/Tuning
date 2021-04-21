<script>
    import { playing } from "./notePlaying";

    function stop() {
        playing.set("None")
    }
</script>

<button on:click="{stop}">
    Stop
</button>