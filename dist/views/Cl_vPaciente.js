export default class Cl_vPaciente {
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNac;
    inTipoAtencion;
    vista;
    btAceptar;
    btCancelar;
    constructor() {
        this.btAceptar = document.getElementById("paciente_btAceptar");
        this.btCancelar = document.getElementById("paciente_btCancelar");
        this.vista = document.getElementById("paciente");
        this.inNombre = document.getElementById("paciente_inNombre");
        this.inApellido = document.getElementById("paciente_inApellido");
        this.inCedula = document.getElementById("paciente_inCedula");
        this.inSexo = document.getElementById("paciente_inSexo");
        this.inFechaNac = document.getElementById("paciente_inFechaNac");
        this.inTipoAtencion = document.getElementById("paciente_inTipoAtencion");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get apellido() {
        return this.inApellido.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get sexo() {
        return this.inSexo.value;
    }
    get fechaNac() {
        return this.inFechaNac.value;
    }
    get tipoAtencion() {
        return this.inTipoAtencion ? +this.inTipoAtencion.value : 0;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
