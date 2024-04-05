<script>
  let size = 8;
  let range = []
  $: range = Array(size).fill().map((_, i) => i);
</script>

<!--each block to create a square grid based on size property-->
<div class="gridInput">
  <label for="size">Grid size:</label>
  <input type="number" bind:value={size} min="1" max="10" />
</div>
<div class="grid" style="--size: {size};">
  {#each range as row}
    {#each range as column}
      <div class="cell"></div>
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
      border: 1px solid black;
      width: 400px; /* Set a fixed size for the grid */
      height: 400px;
    }
    .cell {
      border: 1px solid black;
      padding: 10px;
    }
  </style>
