<script>
  // cart button
  // global store
  import { link } from 'svelte-routing';
  import CartButton from '../Cart/CartButton.svelte';
  import globalStore from '../../stores/globalStore.js';
  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
  <div class="nav-center">
    <button class="btn-sidebar-toggle" on:click="{() => openSidebar('sidebar', true)}">
      <i class="fas fa-bars"></i>
    </button>
    <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" class="logo" alt="razors logo">
    </a>
    <CartButton />
  </div>
</nav>