<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Inventory from './Inventory.svelte';
	import JobRoulette from './JobRoulette.svelte';
	import bannerImg from '$lib/assets/ffxiv_promo_artwork.jpg';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import { character } from '$lib/character.svelte';

	const siteName = $state('FFXIV Job Generator');

	let showJobRoulette = $state(false);
	let showInventory = $state(false);
</script>

<Header {siteName} />

<div class="hero" style="background-image: url('{bannerImg}')">
	<div class="hero-content">
		{#if !character.job}
			<div class="welcome-text">
				<h4>1. Generate a Job</h4>
				<h4>2. Open inventory for gear appropriate for your Job</h4>
			</div>
		{:else}
			<div class="job-display">
				<span class="job-label">Your Job</span>
				<h2 class="job-name">{character.job.name}</h2>
			</div>
		{/if}
		<div class="hero-actions">
			<Button onclick={() => (showJobRoulette = !showJobRoulette)} text="Generate Job" />
			<Button onclick={() => (showInventory = !showInventory)} text="Inventory" />
		</div>
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

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		z-index: 10;
		background: rgba(30, 41, 59, 0.85); /* Aligned with project theme-color */
		padding: 3rem;
		border-radius: 16px;
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;
		max-width: 600px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
	}

	.welcome-text h4 {
		margin: 0;
		color: #e2e8f0;
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.6;
	}

	.job-display {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.job-label {
		color: #94a3b8;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.job-name {
		margin: 0;
		color: #f8fafc;
		font-size: 3rem;
		font-weight: 700;
		text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	}

	.hero-actions {
		display: flex;
		gap: 1.5rem;
	}
</style>
