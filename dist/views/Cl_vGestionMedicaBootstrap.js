export default class Cl_vGestionMedicaBootstrap {
    vista;
    btNuevoPaciente;
    lblTotalVentas;
    lblTotalProcedimiento;
    lblTotalConsulta;
    lblTotalControl;
    lblPorcProcedimiento;
    lblPorcConsulta;
    lblPorcControl;
    lblPorcDescuentos;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.btNuevoPaciente = document.getElementById("body_btAgregarPaciente");
        this.lblTotalVentas = document.getElementById("body_lblTotalVentas");
        this.lblTotalProcedimiento = document.getElementById("body_lblTotalProcedimiento");
        this.lblTotalConsulta = document.getElementById("body_lblTotalConsulta");
        this.lblTotalControl = document.getElementById("body_lblTotalControl");
        this.lblPorcProcedimiento = document.getElementById("body_lblPorcProcedimiento");
        this.lblPorcConsulta = document.getElementById("body_lblPorcConsulta");
        this.lblPorcControl = document.getElementById("body_lblPorcControl");
        this.lblPorcDescuentos = document.getElementById("body_lblPorcDescuentos");
    }
    onNuevoPaciente(callback) {
        this.btNuevoPaciente.onclick = callback;
    }
    reportar({ totalVentas, totalProcedimiento, totalConsulta, totalControl, porcentajeProcedimiento, porcentajeConsulta, porcentajeControl, porcentajeDescuentos }) {
        this.lblTotalVentas.innerHTML = `${totalVentas.toFixed(2)}$`;
        this.lblTotalProcedimiento.innerHTML = `${totalProcedimiento.toFixed(2)}$`;
        this.lblTotalConsulta.innerHTML = `${totalConsulta.toFixed(2)}$`;
        this.lblTotalControl.innerHTML = `${totalControl.toFixed(2)}$`;
        this.lblPorcProcedimiento.innerHTML = `${porcentajeProcedimiento.toFixed(2)}%`;
        this.lblPorcConsulta.innerHTML = `${porcentajeConsulta.toFixed(2)}%`;
        this.lblPorcControl.innerHTML = `${porcentajeControl.toFixed(2)}%`;
        this.lblPorcDescuentos.innerHTML = `${porcentajeDescuentos.toFixed(2)}%`;
    }
}
