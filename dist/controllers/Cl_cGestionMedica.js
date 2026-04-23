import Cl_mGestionMedica from "../models/Cl_mGestionMedica.js";
export default class Cl_cGestionMedica {
    mGestionMedica = new Cl_mGestionMedica();
    vGestionMedica;
    cPaciente;

    constructor(vistaGestionMedica, controladorPaciente) {
        this.vGestionMedica = vistaGestionMedica;
        this.cPaciente = controladorPaciente;
        this.vGestionMedica.onNuevoPaciente(() => this.procesar1Paciente());
    }
    procesar1Paciente() {
        this.cPaciente.solicitarPaciente((paciente) => {
            if (paciente !== null) {
                this.mGestionMedica.procesarPaciente(paciente);
                this.vGestionMedica.reportar({
                    totalVentas: this.mGestionMedica.totalVentas,
                    totalProcedimiento: this.mGestionMedica.totalProcedimiento,
                    totalConsulta: this.mGestionMedica.totalConsulta,
                    totalControl: this.mGestionMedica.totalControl,
                    porcentajeProcedimiento: this.mGestionMedica.porcentajeProcedimiento,
                    porcentajeConsulta: this.mGestionMedica.porcentajeConsulta,
                    porcentajeControl: this.mGestionMedica.porcentajeControl,
                    porcentajeDescuentos: this.mGestionMedica.porcentajeDescuentos,
                });
            }
        });
    }
}
