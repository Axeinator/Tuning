<script>
    import { playing } from "./stores.js";

    function stop() {
        playing.set("None")
    }
</script>

<button on:click="{stop}">
    Stop
</button>