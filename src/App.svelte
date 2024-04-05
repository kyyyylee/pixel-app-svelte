<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Grid from "./lib/Grid.svelte";
</script>

<main>
  <!--left hand tools panel-->
  <div class="tools">
    <button><i class="fa-solid fa-paintbrush"></i></button>
  </div>
  <div>
    <Grid />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
  }
  .tools{
    background-color: palevioletred;
    padding: 1rem 4rem;
  }
</style>
