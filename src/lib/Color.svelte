<script>
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "mediumorchid",
    "hotpink",
    "black",
    "saddlebrown"
  ];
  let selected = colors[0];
</script>

<div class="colorPallete">
  <div class="colorGrid">
    {#each colors as color}
      <button
        class="colorPill"
        aria-current={selected === color}
        aria-label={color}
        style="background: {color}"
        on:click={() => (selected = color)}
      ></button>
    {/each}
  </div>
    <div class="currentColor" style="background: {selected}"><i class="fa-solid fa-paintbrush"></i></div>
</div>

<style>
  .colorPallete {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  .colorGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .colorPill {
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  .currentColor {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
