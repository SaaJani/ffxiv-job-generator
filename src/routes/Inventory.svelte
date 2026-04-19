<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { character } from '$lib/character.svelte';
	import type { GearItem } from '$lib/gear';
	import Modal from './Modal.svelte';

	interface Props {
		showInventory: boolean;
	}
	let { showInventory = $bindable() }: Props = $props();

	let slots = $derived(
		// https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from
		Array.from({ length: 13 }, (slot: GearItem | undefined, i) => {
			const items = character.bisItems;
			if (!items) return undefined;

			if (i === 0) {
				return items.has(13) ? (slot = items.get(13)) : (slot = items.get(1));
			}
			if (i === 12) {
				return items.get(12);
			}
			return items.get(i + 1);
		})
	);
</script>

<Modal>
	{#snippet header()}
		<div class="header-container">
			<h4>Inventory</h4>
			<Button onclick={() => (showInventory = !showInventory)} text="✕" />
		</div>
	{/snippet}

	<div class="itemSheet">
		{#if !character.bisItems}
			<div class="empty-state"><p>Generate a Job first!</p></div>
		{:else}
			{#each slots as item, index (index)}
				{#if item}
					<div class="slot">
						<img
							class="itemSheetIcon"
							src="https://v2.xivapi.com/api/asset/{item.icon_hr1}?format=png"
							alt="Icon of Item"
						/>
						<div class="slot-info">
							<span class="slot-name" title={item.name}>{item.name}</span>
							<span class="slot-power">Power: {item.power}</span>
						</div>
					</div>
				{:else}
					<div class="slot empty">
						<p>Not needed for your job!</p>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</Modal>

<style>
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	h4 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: #f8fafc;
		letter-spacing: -0.025em;
	}

	.itemSheet {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.itemSheetIcon {
		width: 48px;
		height: 48px;
		object-fit: cover;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.slot {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0.75rem;
		background-color: #334155;
		border-radius: 12px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		border: 1px solid #475569;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		overflow: hidden;
	}

	.slot:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	}

	.slot.empty {
		justify-content: center;
		color: #94a3b8;
		font-style: italic;
		background-color: #1e293b;
		border: 1px dashed #475569;
	}

	.slot.empty p {
		margin: 0;
	}

	.empty-state {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		padding: 3rem;
		color: #94a3b8;
		font-size: 1.1rem;
		font-style: italic;
		background-color: #1e293b;
		border: 2px dashed #475569;
		border-radius: 12px;
		text-align: center;
	}

	.empty-state p {
		margin: 0;
	}

	.slot-info {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.slot-name {
		font-weight: 600;
		color: #f8fafc;
		font-size: 0.95rem;
		line-height: 1.25;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.slot-power {
		color: #cbd5e1;
		font-size: 0.85rem;
		margin-top: 0.25rem;
	}
</style>
