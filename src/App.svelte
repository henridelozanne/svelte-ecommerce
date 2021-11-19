<script>
	// pages
	import About from './pages/About.svelte';
	import Checkout from './pages/Checkout.svelte';
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import Cart from './components/Cart/Cart.svelte';

	import globalStore from './stores/globalStore';

	// router
	import { Router, Route, Link } from 'svelte-routing';
	// components
	import Navbar from './components/Navbar/Navbar.svelte';
</script>

<Router>
	<Navbar />
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	{#if $globalStore.cart}
		<Cart />
	{/if}
	<Route path="/"><Home /></Route>
	<Route path="/about"><About /></Route>
	<Route path="/login"><Login /></Route>
	<Route path="/checkout"><Checkout /></Route>
	<Route path="/products"><Products /></Route>
	<Route path="/products/:id"><ProductTemplate /></Route>
</Router>