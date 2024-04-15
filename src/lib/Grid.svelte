<script>
  import { selectedColor, fillGrid } from "./store.js";

  let size = 5;
  let range = Array(size)
    .fill()
    .map((_, i) => i);
  let gridColors = Array(size)
    .fill()
    .map(() => Array(size).fill("#ffffff")); //all cells with black color

  $: {
    range = Array(size)
      .fill()
      .map((_, i) => i); //update range when size changes
    gridColors = Array(size)
      .fill()
      .map(() => Array(size).fill("#ffffff")); //update gridColors when size changes
  }

  function setColor(row, column) {
    gridColors[row][column] = $selectedColor; //set the color of the clicked cell
  }

  function clearGrid() {
    gridColors = Array(size)
      .fill()
      .map(() => Array(size).fill("#ffffff"));
  }

  $: if ($fillGrid) {
    //fill the grid with the selected color
    gridColors = Array(size)
      .fill()
      .map(() => Array(size).fill($selectedColor));
    fillGrid.set(false);
  }

  let design = true;
  let crochet = false;

  function designMode() {
    design = true;
    crochet = false;
  }

  function crochetMode() {
    crochet = true;
    design = false;
  }

</script>

<!--each block to create a square grid based on size property-->
<div>
  <div class="mode">
    <button style="background-color: {design ? '#242424' : 'white' }; color: {design ? 'white' : 'black' };" on:click={designMode}>Design Mode</button>
    <button style="background-color: {crochet ? '#242424' : 'white' }; color: {crochet ? 'white' : 'black' };" on:click={crochetMode}>Crochet Mode</button>
  </div>
  <div class="gridInput">
    <label for="size">Grid size:</label>
    <input type="number" bind:value={size} min="1" max="15" />
  </div>
  <div class="grid" style="--size: {size};">
    {#each range as row, rowIndex}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each range as column, columnIndex}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cell"
          style="background-color: {gridColors[rowIndex][columnIndex]};"
          on:click={() => setColor(rowIndex, columnIndex)}
        ></div>
      {/each}
    {/each}
  </div>
  <button id="clearBTN" on:click={clearGrid}>Clear Grid</button>
</div>

<style>
  .mode {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .gridInput {
    margin-bottom: 1rem;
  }

  .gridInput input {
    padding: 0.25rem 0.5rem;
    margin-left: 0.25rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    border: 1px solid #242424;
    width: 400px;
    height: 400px;
  }

  .cell {
    border: 1px solid #242424;
    padding: 10px;
  }

  button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: solid 1px #242424;
    background-color: white;
  }

  button:hover {
    background-color: #242424;
    color: white;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    .grid {
      width: 450px;
      height: 450px;
    }
  }

  @media (min-width: 1200px) {
    .grid {
      width: 550px;
      height: 560px;
    }
  }
</style>
