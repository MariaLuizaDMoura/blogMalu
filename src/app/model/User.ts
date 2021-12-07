import { Postagem } from './Postagem';

export class User {
    public id: number
    public nome: string  //não solicita inicialização dos atributos.
    public senha: string
    public foto: string
    public tipo: string
    public usuario: string
    public postagem: Postagem[]
}