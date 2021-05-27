import { EButtonColor, EButtonSize } from './../enums/modal.enum';

export interface IModalButton {
    text: string;
    color: EButtonColor;
    handler: Function;
    size: EButtonSize;
}
