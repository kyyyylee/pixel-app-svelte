<script>
  import { crochet } from "./lib/store.js";
  import Grid from "./lib/Grid.svelte";
  import Color from "./lib/Color.svelte";
  import Counter from "./lib/Counter.svelte";

  let crochetMode = false;

  $: crochetMode = $crochet;

  if (crochetMode) {
    console.log("crochet mode");
  }
</script>

<header>
  <h1>Stitched Pixler</h1>
</header>
<main>
  <!--tools panel-->
  <div style="opacity: {crochetMode ? '25%' : '100%'};" class="panel">
    <Color />
  </div>

  <!--grid-->
  <div class="grid">
    <Grid />
  </div>
</main>

<!--footer-->
<div class="footerWrapper">
  <footer>
    <p>
      created by <a href="https://github.com/kyyyylee" target="_blank"
        ><i class="fa-brands fa-github"></i>kyyyylee</a
      >
    </p>
  </footer>
</div>

<style>
  header {
    font-size: x-small;
    text-align: left;
    padding: 0.5rem 1.5rem;
    border-bottom: solid 2px #f1f2f5;
  }

  h1 {
    font-size: 2em;
    background: linear-gradient(
      to right,
      #7f9146,
      #558c72,
      #2c869b,
      #4d78ac,
      #9067b5,
      #cb58b7,
      #d86082,
      #e26459,
      #ee6c2b
    );
    background-size: 20% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .panel {
    background-color: #f1f2f5;
    padding: 1rem 2rem;
    border-radius: 10px;
    margin: 0.5rem 1rem;
  }

  .grid {
    display: flex;
    justify-content: center;
  }

  .footerWrapper {
    display: flex;
    justify-content: center;
  }

  footer {
    text-align: center;
    font-size: small;
    letter-spacing: 2px;
    padding: 1rem;
    margin: 1rem;
    background: linear-gradient(
      to right,
      #7f9146,
      #558c72,
      #2c869b,
      #4d78ac,
      #9067b5,
      #cb58b7,
      #d86082,
      #e26459,
      #ee6c2b
    );
    border-radius: 10px;
    width: 100%;
    color: white;
  }

  footer a {
    text-decoration: none;
    color: black;
  }

  footer a i {
    margin-right: 0.25rem;
    margin-left: 0.3rem;
  }

  footer a:hover {
    color: #f1f2f5;
  }

  @media (min-width: 800px) {
    main {
      flex-direction: row;
    }
    .panel {
      height: 100vh;
      display: flex;
      place-items: center;
    }
    .grid {
      width: 100%;
      margin-top: 2rem;
    }
    footer {
      width: 80%;
    }
    h1 {
      background-size: 10% 100%;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      background-size: 8% 100%;
    }
  }
</style>
