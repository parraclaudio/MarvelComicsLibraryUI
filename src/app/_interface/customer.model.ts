import { Comic } from './comic.model';

export interface Customer {
    Key: string;
    Email: string;
    Cpf: string;
    Name: string;
    Telephone: string;

    comics?: Comic[]
}
