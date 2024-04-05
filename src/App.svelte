<script>
  import svelteLogo from "./assets/svelte.svg";
  import paintIcon from "./assets/paint.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Grid from "./lib/Grid.svelte";
</script>

<main>
  <!--left hand tools panel-->
  <div class="tools">
    
  </div>
  <div>
    <Grid />
  </div>
</main>

<style>
  main {
    display: flex;
  }
  .tools {
    background-color: burlywood;
  }
</style>
