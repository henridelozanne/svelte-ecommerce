<script>
  import CartButton from '../Cart/CartButton.svelte';
  import { link } from 'svelte-routing';
  import links from '../../constants/links.js';
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <ul class="nav-links">
        {#each links as link}
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        {/each}
      </ul>
      <a href="/" use:link class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="razors logo">
      </a>
      <div class="nav-aside">
        <CartButton></CartButton>
      </div>
    </div>
  </div>
</nav>