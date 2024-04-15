<script>
  import Grid from "./lib/Grid.svelte";
  import Color from "./lib/Color.svelte";
</script>

<header>
  <h1>Stitched Pixels</h1>
</header>
<main>
  <!--tools panel-->
  <div class="panel">
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
    padding: .5rem 1.5rem;
    border-bottom: solid 2px #f1f2f5;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .panel {
    background-color: #f1f2f5;
    padding: 1rem 4rem;
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
    background-color: pink;
    border-radius: 10px;
    width: 100%;
  }


  footer a {
    text-decoration: none;
    color: deeppink;
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
      gap: 4rem;
    }
    .panel {
      height: 100vh;
      display: flex;
      place-items: center;
    }
    .grid {
      width: 100%;
      place-items: center;
    }
    footer{
      width: 80%;
    }
  }
</style>
