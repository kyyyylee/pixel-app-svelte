<script>
  import { selectedColor } from "./store.js";

  let size = 8;
  let range = Array(size)
    .fill()
    .map((_, i) => i);
  let gridColors = Array(size)
    .fill()
    .map(() => Array(size).fill("#000")); //all cells with black color

  $: range = Array(size)
    .fill()
    .map((_, i) => i); // Update range when size changes

  function setColor(row, column) {
    gridColors[row][column] = $selectedColor; //set the color of the clicked cell
  }
</script>

<!--each block to create a square grid based on size property-->
<div class="gridInput">
  <label for="size">Grid size:</label>
  <input type="number" bind:value={size} min="1" max="10" />
</div>
<div class="grid" style="--size: {size};">
  {#each range as row, rowIndex}
    {#each range as column, columnIndex}
    <div class="cell" style="background-color: {gridColors[rowIndex][columnIndex]};" on:click={() => setColor(rowIndex, columnIndex)}></div>
    {/each}
  {/each}
</div>

<style>
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
    border: 1px solid white;
    width: 400px;
    height: 400px;
  }

  .cell {
    border: 1px solid white;
    padding: 10px;
  }
</style>
