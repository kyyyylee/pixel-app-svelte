<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
  const decrease = () => {
    if (count === 0) return;
    count -= 1;
  };
  const reset = ()  => {
    count = 0;
  };
</script>

<div>
  <h3>Stitch Counter</h3>
  <div class="buttons">
    <button on:click={decrease}> - </button>
    <button class="count">
      {count}
    </button>
    <button on:click={increment}> + </button>
  </div>
  <button class="reset" on:click={reset}>Reset</button>
</div>

<style>
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .count {
    cursor: default;
  }

  .count:hover {
    background-color: #f1f1f1;
  }

  .reset{
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: solid 1px #242424;
    background-color: white;
  }

  .reset:hover {
    background-color: #242424;
    color: white;
    cursor: pointer;
  }

  button {
    text-align: center;
    background-color: #f1f1f1;
    border: none;
    padding: 1rem 1.25rem;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e1e1e1;
  }
</style>
