<script>
  import ItemList from './ItemList.svelte';
  import globalStore from '../../stores/globalStore';
  import { fly, fade, blur } from 'svelte/transition';
  import { link } from 'svelte-routing';
  import user from '../../stores/user';
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{x: 100}}>
    <div class="cart" transition:fade={{delay: 400}}>
      <div class="cart-header">
        <button class="btn-close">
          <i class="fas fa-window-close" on:click="{() => { globalStore.toggleItem('cart', false)}}"></i>
        </button>
        <h2 class="cart-title">your bag</h2>
      </div>

      <ItemList />

      <div class="cart-footer">
        {#if $user.jwt}
        <a href="/checkout" use:link class="btn btn-primary btn-block" on:click="{() => globalStore.toggleItem('cart', false)}">Checkout</a>
        {:else}
        <p class="cart-login">In order to checkout, please
          <a href="/login" use:link on:click="{() => globalStore.toggleItem('cart', false)}">login</a>
        </p>
        {/if}
      </div>
    </div>
  </div>
</div>