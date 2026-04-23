import Cl_mPaciente from "../models/Cl_mPaciente.js";
export default class Cl_cPaciente {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
       
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
      solicitarPaciente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mPaciente({
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNac: this.vista.fechaNac,
            tipoAtencion: this.vista.tipoAtencion
        }));
        this.vista.ocultar();
    }
}
