<script>
  import user from '../stores/user';
  import { link } from 'svelte-routing';
  import globalStore from '../stores/globalStore';
</script>

{#if $user.jwt}
<a href="/" class="logout-btn" on:click={() => globalStore.toggleItem('sidebar', false)} use:link>Logout</a>
{:else}
<a href="/login" class="logout-btn" on:click={() => globalStore.toggleItem('sidebar', false)} use:link>Login</a>
{/if}