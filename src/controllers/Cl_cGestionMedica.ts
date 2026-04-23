import Cl_mGestionMedica from "../models/Cl_mGestionMedica.js";
import Cl_mPaciente from "../models/Cl_mPaciente.js";
import { I_vGestionMedica } from "../interfaces/I_vGestionMedica.js";
import Cl_cPaciente from "./Cl_cPaciente.js";

export default class Cl_cGestionMedica {
  private mGestionMedica: Cl_mGestionMedica = new Cl_mGestionMedica();
  private vGestionMedica: I_vGestionMedica;
  private cPaciente: Cl_cPaciente;

  constructor(vistaGestionMedica: I_vGestionMedica, controladorPaciente: Cl_cPaciente) {
    this.vGestionMedica = vistaGestionMedica;
    this.cPaciente = controladorPaciente;
  

    this.vGestionMedica.onNuevoPaciente(() => this.procesar1Paciente());
  }

  private procesar1Paciente() {
    this.cPaciente.solicitarPaciente((paciente) => {
      if (paciente!== null) {
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