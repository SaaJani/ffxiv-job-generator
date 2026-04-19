<script lang="ts">
	interface Props {
		onclick: () => void;
		text: string;
		disabled?: boolean;
	}

	let { onclick, text, disabled }: Props = $props();
</script>

<button {onclick} {disabled} class="modern-btn">{text}</button>

<style>
	.modern-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1.5rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: #ffffff;
		background-color: #3b82f6;
		border: none;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 4px 6px rgba(59, 130, 246, 0.25);
		letter-spacing: 0.025em;
	}

	.modern-btn:hover:not(:disabled) {
		background-color: #2563eb;
		box-shadow: 0 6px 12px rgba(59, 130, 246, 0.35);
		transform: translateY(-2px);
	}

	.modern-btn:active:not(:disabled) {
		background-color: #1d4ed8;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
		transform: translateY(1px);
	}

	.modern-btn:disabled {
		background-color: #94a3b8;
		cursor: not-allowed;
		box-shadow: none;
		opacity: 0.7;
	}
</style>
