export interface gearFetch {
	schema: string;
	version: string;
	results: Result[];
}

export interface Result {
	score: number;
	sheet: ResultSheet;
	row_id: number;
	fields: ResultFields;
}

export interface ResultFields {
	BaseParamValue: number[];
	EquipSlotCategory: EquipSlotCategory;
	Icon: Icon;
	LevelItem: EquipSlotCategory;
	Name: string;
}

export interface EquipSlotCategory {
	value: number;
	sheet: EquipSlotCategorySheet;
	row_id: number;
	fields: EquipSlotCategoryFields;
}

export interface EquipSlotCategoryFields {
	object;
}

export enum EquipSlotCategorySheet {
	EquipSlotCategory = 'EquipSlotCategory',
	ItemLevel = 'ItemLevel'
}

export interface Icon {
	id: number;
	path: string;
	path_hr1: string;
}

export enum ResultSheet {
	Item = 'Item'
}
