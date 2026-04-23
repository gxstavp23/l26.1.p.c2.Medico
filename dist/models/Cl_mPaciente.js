import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mPaciente extends Cl_mPersona {
    _tipoAtencion = 0;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, tipoAtencion }) {
        super({ nombre, apellido, cedula, sexo, fechaNac });
        this.tipoAtencion = tipoAtencion;
    }
    set tipoAtencion(value) {
        this._tipoAtencion = value;
    }
    get tipoAtencion() {
        return this._tipoAtencion;
    }
    get descuento() {
        if (this.sexo === "F" && this.edad >= 25 && this.edad <= 50) {
            return true;
        }
        else
            return false;
    }
    get costo() {
        let base = 0;
        switch (this.tipoAtencion) {
            case 1: 
                base = 30;
                break;
            case 2: 
                base = 10;
                break;
            case 3: 
                base = 0;
                break;
            default:
                return 0;
        }
        if (this.descuento) {
            return base * 0.6;
        }
        return base;
    }
}
