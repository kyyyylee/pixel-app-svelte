<script>
  import Grid from "./lib/Grid.svelte";
  import Color from "./lib/Color.svelte";
</script>

<header>
  <h1>Stitched Pixels</h1>
</header>
<main>
  <!--tools panel-->
  <div class="panel">
    <Color />
  </div>

  <!--grid-->
  <div class="grid">
    <Grid />
  </div>
</main>

<style>
  header {
    font-size: x-small;
    text-align: left;
    padding: 0 1.5rem;
    border-bottom: solid 2px #F1F2F5;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .panel {
    background-color: #F1F2F5;
    padding: 1rem 4rem;
    border-radius: 10px;
    margin: .5rem;
  }

  .grid {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 800px) {
    main{
      flex-direction: row;
      gap: 4rem;
    }
    .panel{
      height: 100vh;
      display: flex;
      place-items: center;
    }
    .grid{
      width: 100%;
      place-items: center;
    }
  }
</style>
