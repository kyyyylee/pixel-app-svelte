<script>
  import Grid from "./lib/Grid.svelte";
  import Color from "./lib/Color.svelte";
</script>

<main>
  <!--left hand tools panel-->
  <div class="panel">
    <Color />
  </div>

  <div class="grid">
    <Grid />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .panel {
    background-color: thistle;
    padding: 1rem 4rem;
  }

  .grid {
    display: flex;
    justify-content: center;
  }
</style>
