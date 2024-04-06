<script>
  import Grid from "./lib/Grid.svelte";
  import Color from "./lib/Color.svelte";
</script>

<main>
  <!--left hand tools panel-->
  <div class="tools">
    <button><i class="fa-solid fa-paintbrush"></i></button>
    <Color />
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
    gap: 3rem;
  }
  .tools{
    background-color: thistle;
    padding: 1rem 4rem;
  }

  button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #ffffff;
}
</style>
