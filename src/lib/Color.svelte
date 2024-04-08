<script>
  import { selectedColor } from "./store.js";

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "mediumorchid",
    "hotpink",
    "black",
    "saddlebrown",
  ];

  function selectColor(color) {
    selectedColor.set(color);
  }

  let erase = false;
  
  function eraseMode() {
    erase = !erase;
  }
  function paintMode() {
    erase = false;
  }
</script>

<div class="colorPallete">
  <div class="colorGrid">
    {#each colors as color}
      <button
        class="colorPill"
        aria-current={$selectedColor === color}
        style="background-color: {color}; border: {$selectedColor === color ? '2px solid white' : 'none'};"
        disabled={erase}
        on:click={() => selectColor(color)}
      ></button>
    {/each}
  </div>

  <div class="tools">
      <button class="currentColor" on:click={paintMode} style="border: {erase ? 'none' : '2px solid green'};"><i class="fa-solid fa-paintbrush"></i></button>
      <button on:click={() => selectColor()} on:click={eraseMode} style="border: {!erase ? 'none' : '2px solid green'};"><i class="fa-solid fa-eraser"></i></button>
  </div>
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
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  .colorPill:disabled {
    opacity: 0.5; /* make disabled buttons semi-transparent */
    cursor: not-allowed; /* change cursor on hover */
  }

  .tools {
    display: flex;
    gap: 1rem;
  }

  .tools button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 1em;
    background-color: #rgba(255, 255, 255, 0.87);
    cursor: pointer;
    transition: border-color 0.25s;
    border: 1px solid transparent;
  }

  .currentColor {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
