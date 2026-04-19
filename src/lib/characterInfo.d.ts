import type { Job } from '$lib/job';

interface CharacterInfo {
	job: Job | null;
	bisItems: Map<number, GearItem> | null;
}

export { CharacterInfo };
