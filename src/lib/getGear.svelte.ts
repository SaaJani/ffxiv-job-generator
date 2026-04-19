import { SvelteMap } from 'svelte/reactivity';
import type { GearItem } from './gear';
import type { gearFetch } from './gearFetch';
import type { Job } from './job';

async function fetchGear(chosenJob: Job): Promise<gearFetch> {
	if (!chosenJob) {
		throw new Error('Missing a job!');
	}
	const urlQuery = `+ClassJobCategory.${chosenJob.category}=true +LevelItem>=770`;
	const generatedUrl = `https://v2.xivapi.com/api/search?sheets=Item&fields=Name,LevelItem.value,EquipSlotCategory.value,BaseParamValue,Icon&query=${encodeURIComponent(urlQuery)}&version=7.4&limit=500`;

	const response = await fetch(generatedUrl);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}
	return response.json();
}

function makeSimpleList(data: gearFetch): GearItem[] {
	return data.results.map((item) => ({
		name: item.fields.Name,
		power: item.fields.BaseParamValue[0],
		itemSlot: item.fields.EquipSlotCategory.value,
		icon_hr1: item.fields.Icon.path_hr1
	}));
}

// https:// blog.logrocket.com/guide-object-groupby-alternative-array-reduce/
function groupBySlot(list: GearItem[]): Map<number, GearItem[]> {
	return Map.groupBy(list, ({ itemSlot }) => itemSlot);
}

// https:// stackoverflow.com/questions/4020796/finding-the-max-value-of-a-property-in-an-array-of-objects
function findBis(grouped: Map<number, GearItem[]>) {
	const bisBySlot: Map<number, GearItem> = new SvelteMap();
	for (const [slot, items] of grouped) {
		const best = items.reduce((max, current) => (max.power > current.power ? max : current));
		bisBySlot.set(slot, best);
	}
	return bisBySlot;
}

export async function fetchAll(chosenJob: Job) {
	try {
		const response = await fetchGear(chosenJob);
		const list = makeSimpleList(response);
		const grouped = groupBySlot(list);
		const bisItems = findBis(grouped);
		return bisItems;
	} catch (err) {
		console.error(err);
	}
}
