import {I_vGestionMedica} from "../interfaces/I_vGestionMedica.js"

export default class Cl_vGestionMedicaBootstrap implements I_vGestionMedica{
vista:HTMLElement | null;
btNuevoPaciente:HTMLButtonElement;
lblTotalVentas: HTMLElement;
lblTotalProcedimiento: HTMLElement;
lblTotalConsulta: HTMLElement;
lblTotalControl: HTMLElement;
lblPorcProcedimiento:HTMLElement;
lblPorcConsulta:HTMLElement;
lblPorcControl:HTMLElement;
lblPorcDescuentos:HTMLElement;

constructor(){
   this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoPaciente = document.getElementById("body_btAgregarPaciente") as HTMLButtonElement;
    
    this.lblTotalVentas = document.getElementById("body_lblTotalVentas") as HTMLElement;
    this.lblTotalProcedimiento = document.getElementById("body_lblTotalProcedimiento") as HTMLElement;
    this.lblTotalConsulta = document.getElementById("body_lblTotalConsulta") as HTMLElement;
    this.lblTotalControl = document.getElementById("body_lblTotalControl") as HTMLElement;
    this.lblPorcProcedimiento = document.getElementById("body_lblPorcProcedimiento") as HTMLElement;
    this.lblPorcConsulta = document.getElementById("body_lblPorcConsulta") as HTMLElement;
    this.lblPorcControl = document.getElementById("body_lblPorcControl") as HTMLElement;
    this.lblPorcDescuentos = document.getElementById("body_lblPorcDescuentos") as HTMLElement;

}

onNuevoPaciente(callback: () => void): void {
    this.btNuevoPaciente.onclick = callback;
}

reportar({ totalVentas, totalProcedimiento, totalConsulta, totalControl, porcentajeProcedimiento, porcentajeConsulta, porcentajeControl, porcentajeDescuentos }: { totalVentas: number; totalProcedimiento: number; totalConsulta: number; totalControl: number; porcentajeProcedimiento: number; porcentajeConsulta: number; porcentajeControl: number; porcentajeDescuentos: number; }): void {
    this.lblTotalVentas.innerHTML =`${totalVentas.toFixed(2)}$`    
    this.lblTotalProcedimiento.innerHTML =`${totalProcedimiento.toFixed(2)}$`    
    this.lblTotalConsulta.innerHTML =`${totalConsulta.toFixed(2)}$`    
    this.lblTotalControl.innerHTML =`${totalControl.toFixed(2)}$`    
    this.lblPorcProcedimiento.innerHTML =`${porcentajeProcedimiento.toFixed(2)}%`    
    this.lblPorcConsulta.innerHTML =`${porcentajeConsulta.toFixed(2)}%`    
    this.lblPorcControl.innerHTML =`${porcentajeControl.toFixed(2)}%`    
    this.lblPorcDescuentos.innerHTML =`${porcentajeDescuentos.toFixed(2)}%`    
}

}