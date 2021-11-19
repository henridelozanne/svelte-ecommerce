<script>
  import links from '../../constants/links.js';
  import { link } from 'svelte-routing';
  import globalStore from '../../stores/globalStore.js';
  import { fly, fade } from 'svelte/transition';

  let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{x: -1000}}>
  <div class="sidebar" transition:fade={{delay: 400}}>
    <div class="sidebar-header">
      <button class="btn-close" on:click="{() => closeSidebar('sidebar', false)}">
        <i class="fas fa-window-close"></i>
      </button>
    </div>
    <img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="logo">
    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>
          <a href={sideLink.url} use:link on:click="{() => closeSidebar('sidebar', false)}">{sideLink.text}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>