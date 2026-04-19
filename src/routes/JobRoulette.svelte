<script lang="ts">
	import type { Job } from '$lib/job';
	import Modal from './Modal.svelte';
	import Button from '$lib/Button.svelte';
	import { character } from '$lib/character.svelte';
	import { jobs } from '$lib/listJobs.svelte';
	import { fetchAll } from '$lib/getGear.svelte';

	interface Props {
		showJobRoulette: boolean;
	}
	let { showJobRoulette = $bindable() }: Props = $props();

	const roles: string[] = $state([]);

	for (let { role } of jobs) {
		if (!roles.includes(role)) {
			roles.push(role);
		}
	}

	let wantedJobs: string[] = $state([]);
	let wantedRoles: string[] = $state([]);
	let preferToChooseByRole = $state(false);
	let chosenJob: Job | undefined = $state();

	async function generateJob() {
		const pool = preferToChooseByRole
			? jobs.filter((job) => wantedRoles.includes(job.role))
			: jobs.filter((job) => wantedJobs.includes(job.name));

		if (pool.length > 0) {
			chosenJob = pool[Math.floor(Math.random() * pool.length)];
			character.job = chosenJob;
			const bisItems = await fetchAll(chosenJob);
			if (!bisItems) {
				throw new Error('Failed to fetch items');
			}
			character.bisItems = bisItems;
		} else {
			console.error('No Jobs/Roles Selected');
		}
	}
</script>

<Modal>
	{#snippet header()}
		<div class="header-container">
			<h4>Job randomizer</h4>
			<Button onclick={() => (showJobRoulette = !showJobRoulette)} text="✕" />
		</div>
	{/snippet}

	{#snippet footer()}
		<Button onclick={() => generateJob()} text="Randomize Job" />
	{/snippet}

	<div class="tab-group">
		<button
			class="toggle-btn"
			class:selected={!preferToChooseByRole}
			onclick={() => {
				preferToChooseByRole = false;
				wantedRoles = [];
			}}
		>
			Jobs
		</button>

		<button
			class="toggle-btn"
			class:selected={preferToChooseByRole}
			onclick={() => {
				preferToChooseByRole = true;
				wantedJobs = [];
			}}
		>
			Roles
		</button>
	</div>

	{#if !preferToChooseByRole}
		<div class="checkbox-group">
			{#each jobs as { name } (name)}
				<label class="toggle-btn" class:selected={wantedJobs.includes(name)}>
					<input type="checkbox" name="iwantthesejobs" bind:group={wantedJobs} value={name} />
					{name}
				</label>
			{/each}
		</div>
	{:else}
		<div class="checkbox-group">
			{#each roles as role (role)}
				<label class="toggle-btn" class:selected={wantedRoles.includes(role)}>
					<input type="checkbox" name="iwanttheseroles" bind:group={wantedRoles} value={role} />
					{role}
				</label>
			{/each}
		</div>
	{/if}
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

	.tab-group {
		display: flex;
		gap: 0.5rem;
	}

	.checkbox-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
		min-height: 225px;
		align-content: flex-start;
	}

	.toggle-btn {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #334155;
		color: #f8fafc;
		border: 2px solid transparent;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.2s ease;
		user-select: none;
	}

	.toggle-btn:hover {
		background-color: #475569;
	}

	.toggle-btn.selected {
		background-color: #3b82f6;
		color: white;
		border-color: #2563eb;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
	}

	.toggle-btn input[type='checkbox'] {
		display: none;
	}
</style>
