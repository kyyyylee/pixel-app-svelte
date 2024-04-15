<script>
  import { selectedColor, fillGrid, crochet } from "./store.js";

  const colors = [
    "red",
    "firebrick",
    "maroon",
    "orange",
    "coral",
    "darkorange",
    "yellow",
    "gold",
    "goldenrod",
    "yellowgreen",
    "green",
    "darkgreen",
    "blue",
    "cornflowerblue",
    "royalblue",
    "mediumorchid",
    "purple",
    "indigo",
    "hotpink",
    "deeppink",
    "pink",
    "black",
    "gray",
    "saddlebrown",
  ];

  let message = "Select a color and click on a square to paint it";

  selectedColor.set(colors[0]);

  function selectColor(color) {
    selectedColor.set(color);
  }

  let erase = false;
  let fill = false;
  let paint = true
  
  function eraseMode() {
    erase = true;
    fill = false;
    paint = false;
    message = "Click on a square to remove the color";
  }

  function paintMode() {
    paint = true;
    erase = false;
    fill = false;
    selectedColor.set(colors[0]);
    message = "Select a color and click on a square to paint it";
  }

  function fillMode() {
    fill = true;
    erase = false;
    paint = false;
    selectedColor.set(null);
    message = "Select a color to fill in the entire grid";
  }

  function fillBoard() {
    if (!fill) return;
    if (fill) {
    fillGrid.set(true);
  }
  }


</script>

<div class="colorPallete">
  <div class="colorGrid">
    {#each colors as color}
      <button
        class="colorPill"
        aria-current={$selectedColor === color}
        style="background-color: {color}; border: {$selectedColor === color ? '2px dashed white' : 'none'}; "
        disabled={erase}
        on:click={() => selectColor(color)}
        on:click={fillBoard}
      ></button>
    {/each}
  </div>

  <div class="tools">
      <button class="currentColor" on:click={paintMode} style="border: {paint ? `3px solid ${$selectedColor}` : 'none' };"><i class="fa-solid fa-paintbrush"></i></button>
      <button on:click={fillMode} style="border: {fill ? '3px solid black' : 'none' };"><i class="fa-solid fa-fill-drip"></i></button>
      <button on:click={() => selectColor()} on:click={eraseMode} style="border: {!erase ? 'none' : '3px solid black'};"><i class="fa-solid fa-eraser"></i></button>
  </div>

    <p>{message}</p>
 
</div>

<style>
  .colorPallete {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .colorPallete p {
    margin: 0;
    padding: 0;
    font-size: small;
  }

  .colorGrid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }

  .colorPill {
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
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
    background-color: white;
    cursor: pointer;
    transition: border-color 0.25s;
    border: 1px solid transparent;
  }

  .currentColor {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 800px) {
    .colorPill {
    width: 2.5rem;
    height: 2.5rem;
  }
  .tools button{
    width: 3.5rem;
    height: 3.5rem;
  }
  .colorPallete{
    margin: 1rem;
  }
  .colorGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  }

  @media (min-width: 1200px) {
    .colorPill {
    width: 3rem;
    height: 3rem;
  }
  .tools button{
    width: 4rem;
    height: 4rem;
  }
  .colorPallete{
    margin: 2rem;
  }
  }
</style>
