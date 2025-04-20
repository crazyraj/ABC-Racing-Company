type MenuItem = {
	value: any;
};

type DropDownItem = {
	key: any;
	label: any;
};

type InputLabel = {
    id: string,
    label: string;
}

export type DropDown = {
	labelId: string;
	id: string;
	value: any;
    list: Array<DropDownItem> | [];
    menuItem: MenuItem;
    inputLabel: InputLabel;
	onChange?: (value: any) => void;
};