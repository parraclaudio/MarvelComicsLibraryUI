import { ErrorMessage } from './errorMessage.model';

export interface ResponseRequest {
    success: boolean,
    messageError: ErrorMessage[],
    data: string[]
}
