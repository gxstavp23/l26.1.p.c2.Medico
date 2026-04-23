export interface I_vPaciente{
    get nombre():string;
    get apellido():string;
    get cedula():number;
    get sexo():string;
    get fechaNac():string;
    get tipoAtencion():number

    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void):void;
    onCancelar(callback: () => void):void;
}