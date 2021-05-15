import { EMessageType } from './../enums/communication.enum';

export interface ICommunicationMessage {
    text: string;
    date: Date;
    type: EMessageType
}
