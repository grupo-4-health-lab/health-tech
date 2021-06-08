export interface IDataGridColumn {
    label: string;
    key: string;
}

export interface IDataGridAction {
    icon: string;
    classes: string;
    label: string;
    handler?: (data: any) => void;
}
