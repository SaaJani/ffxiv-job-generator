import type { CharacterInfo } from '$lib/characterInfo';
import type { GearItem } from './gear';
import type { Job } from './job';

class Character {
	private character: CharacterInfo = $state({ job: null, bisItems: null });

	get job() {
		return this.character.job;
	}

	set job(newJob: Job | null) {
		this.character.job = newJob;
	}

	get bisItems() {
		return this.character.bisItems;
	}

	set bisItems(newBisItems: Map<number, GearItem> | null) {
		this.character.bisItems = newBisItems;
	}
}

export const character = new Character();
