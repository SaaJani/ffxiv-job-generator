<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
	}

	let { header, children, footer }: Props = $props();
</script>

<div class="backdrop"></div>

<div class="modal">
	<header>
		{@render header?.()}
		<!-- tänne header-osan elementit -->
	</header>

	{@render children()}
	<!-- tänne komponentin suorat jälkeläiset -->

	<footer>
		{@render footer?.()}
		<!-- tänne footer-osan elementit -->
	</footer>
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		z-index: 10;
	}

	.modal {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 2rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		max-width: 500px;
		max-height: 85vh;
		overflow-y: auto;
		background: #1e293b;
		color: #f8fafc;
		border-radius: 16px;
		z-index: 100;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	}

	header {
		font-size: 1.25rem;
		font-weight: 600;
		color: #f8fafc;
		border-bottom: 1px solid #334155;
		padding-bottom: 1rem;
	}

	footer {
		margin-top: auto;
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		border-top: 1px solid #334155;
		padding-top: 1rem;
	}
</style>
