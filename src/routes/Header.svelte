<script lang="ts">
	interface Props {
		siteName: string;
	}
	let { siteName }: Props = $props();
</script>

<header>
	<div class="header-content">
		<!-- Add your site name here -->
		<h1>{siteName}</h1>
	</div>
</header>

<style>
	header {
		background-color: var(--theme-color);
		color: #f8fafc;
		padding: 1rem 2rem;
		border-bottom: 1px solid #334155;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	h1 {
		margin: auto;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.025em;
	}
</style>
