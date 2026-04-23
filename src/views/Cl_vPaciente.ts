import { I_vPaciente } from "../interfaces/I_vPaciente.js";

export default class Cl_vPaciente implements I_vPaciente {
    inNombre: HTMLInputElement;
    inApellido: HTMLInputElement;
    inCedula: HTMLInputElement;
    inSexo: HTMLInputElement;
    inFechaNac: HTMLInputElement;
    inTipoAtencion:HTMLInputElement
    vista:HTMLElement;
    btAceptar:HTMLButtonElement;
    btCancelar:HTMLButtonElement;

    constructor(){
        this.btAceptar = document.getElementById("paciente_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("paciente_btCancelar") as HTMLButtonElement;
        this.vista = document.getElementById("paciente") as HTMLElement;
        this.inNombre = document.getElementById("paciente_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("paciente_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("paciente_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("paciente_inSexo") as HTMLInputElement;
        this.inFechaNac = document.getElementById("paciente_inFechaNac") as HTMLInputElement
        this.inTipoAtencion = document.getElementById("paciente_inTipoAtencion") as HTMLInputElement
    }

    get nombre():string{
        return this.inNombre.value.trim();
    }

    get apellido():string{
        return this.inApellido.value.trim();
    }

    get cedula():number{
        return this.inCedula ? +this.inCedula.value: 0;
    }

    get sexo():string{
        return this.inSexo.value;
    }

    get fechaNac():string{
        return this.inFechaNac.value;
    }

    
    get tipoAtencion():number{
        return this.inTipoAtencion ? +this.inTipoAtencion.value: 0;
    }

    mostrar(): void {
        if (this.vista === null) return; 
        this.vista.hidden = false        
    }

    ocultar(): void {
        if (this.vista=== null) return;
        this.vista.hidden = true
    }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
    


}