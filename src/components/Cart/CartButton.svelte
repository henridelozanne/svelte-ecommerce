<script>
  import globalStore from '../../stores/globalStore';
  import cart from '../../stores/cart';
  const openCart = globalStore.toggleItem;

  $: total = $cart.reduce((acc, curr) => acc + curr.amount, 0)
</script>

<div class="btn-cart-container">
  <button class="btn-cart-toggle" on:click="{() => openCart('cart', true)}">
  <i class="fas fa-cart-plus"></i>
  </button>
  <span class="btn-cart-items">{total}</span>
</div>