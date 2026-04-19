<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Inventory from './Inventory.svelte';
	import JobRoulette from './JobRoulette.svelte';
	import bannerImg from '$lib/assets/ffxiv_promo_artwork.jpg';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	const siteName = $state('FFXIV Job Generator');

	let showJobRoulette = $state(false);
	let showInventory = $state(false);
</script>

<Header {siteName} />

<div class="hero" style="background-image: url('{bannerImg}')">
	<div class="hero-actions">
		<Button onclick={() => (showJobRoulette = !showJobRoulette)} text="Generate Job" />
		<Button onclick={() => (showInventory = !showInventory)} text="Best-In-Slot" />
	</div>
</div>

<Footer />

{#if showJobRoulette}
	<JobRoulette bind:showJobRoulette />
{/if}

{#if showInventory}
	<Inventory bind:showInventory />
{/if}

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 100vh;
		min-height: 400px;
		max-height: 100vh;
		background-size: cover;
		/* Anchor to bottom right to prevent cropping the copyright watermark horizontally and vertically */
		background-position: bottom right;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.hero::after {
		/* A subtle dark gradient at the bottom to ensure the copyright text remains legible on smaller screens or different aspect ratios */
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
		pointer-events: none;
	}

	.hero-actions {
		display: flex;
		gap: 1.5rem;
		z-index: 10;
		background: rgba(0, 0, 0, 0.4);
		padding: 2rem;
		border-radius: 16px;
		backdrop-filter: blur(8px);
	}
</style>
