import type { Job } from '$lib/job';

export const jobs: Job[] = $state([
	{ name: 'Paladin', role: 'Tank', startCity: 'Limsa Lominsa', category: 'PLD' },
	{ name: 'Warrior', role: 'Tank', startCity: 'Limsa Lominsa', category: 'WAR' },
	{ name: 'Dark Knight', role: 'Tank', startCity: 'Limsa Lominsa', category: 'DRK' },
	{ name: 'Gunbreaker', role: 'Tank', startCity: 'Limsa Lominsa', category: 'GNB' },
	{ name: 'White Mage', role: 'Healer', startCity: 'Limsa Lominsa', category: 'WHM' },
	{ name: 'Scholar', role: 'Healer', startCity: 'Limsa Lominsa', category: 'SCH' },
	{ name: 'Astrologian', role: 'Healer', startCity: 'Limsa Lominsa', category: 'AST' },
	{ name: 'Sage', role: 'Healer', startCity: 'Limsa Lominsa', category: 'SGE' },
	{ name: 'Monk', role: 'Melee DPS', startCity: 'Gridania', category: 'MNK' },
	{ name: 'Dragoon', role: 'Melee DPS', startCity: 'Gridania', category: 'DRG' },
	{ name: 'Ninja', role: 'Melee DPS', startCity: 'Gridania', category: 'NIN' },
	{ name: 'Samurai', role: 'Melee DPS', startCity: 'Gridania', category: 'SAM' },
	{ name: 'Reaper', role: 'Melee DPS', startCity: 'Gridania', category: 'RPR' },
	{ name: 'Viper', role: 'Melee DPS', startCity: 'Gridania', category: 'VPR' },
	{ name: 'Bard', role: 'Physical Ranged DPS', startCity: 'Gridania', category: 'BRD' },
	{ name: 'Machinist', role: 'Physical Ranged DPS', startCity: 'Uldah', category: 'MCH' },
	{ name: 'Dancer', role: 'Physical Ranged DPS', startCity: 'Uldah', category: 'VPR' },
	{ name: 'Black Mage', role: 'Magical Ranged DPS', startCity: 'Uldah', category: 'BLM' },
	{ name: 'Summoner', role: 'Magical Ranged DPS', startCity: 'Uldah', category: 'SMN' },
	{ name: 'Red Mage', role: 'Magical Ranged DPS', startCity: 'Uldah', category: 'RDM' },
	{ name: 'Pictomancer', role: 'Magical Ranged DPS', startCity: 'Uldah', category: 'PCT' }
]);
