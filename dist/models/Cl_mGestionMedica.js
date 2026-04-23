export default class Cl_mGestionMedica {
    cntPacientes = 0;
    cntProcedimiento = 0;
    cntConsulta = 0;
    cntControl = 0;
    cntDescuentos = 0;
    acTotalRecaudado = 0;
    acTotalProcedimiento = 0;
    acTotalConsulta = 0;
    acTotalControl = 0;
    procesarPaciente(p) {
        this.cntPacientes++;
       
        this.acTotalRecaudado += p.costo;
        if (p.tipoAtencion === 1) {
            this.cntProcedimiento++;
            this.acTotalProcedimiento += p.costo;
        }
        if (p.tipoAtencion === 2) {
            this.cntConsulta++;
            this.acTotalConsulta += p.costo;
        }
        if (p.tipoAtencion === 3) {
            this.cntControl++;
            this.acTotalControl += p.costo;
        }
        if (p.descuento === true) {
            this.cntDescuentos++;
        }
    }
    get porcentajeProcedimiento() {
        if (this.cntPacientes > 0) {
            return (this.cntProcedimiento / this.cntPacientes) * 100;
        }
        return 0;
    }
    get porcentajeConsulta() {
        if (this.cntPacientes > 0) {
            return (this.cntConsulta / this.cntPacientes) * 100;
        }
        return 0;
    }
    get porcentajeControl() {
        if (this.cntPacientes > 0) {
            return (this.cntControl / this.cntPacientes) * 100;
        }
        return 0;
    }
    get porcentajeDescuentos() {
        if (this.cntPacientes > 0) {
            return (this.cntDescuentos / this.cntPacientes) * 100;
        }
        return 0;
    }
    get totalVentas() {
        return this.acTotalRecaudado;
    }
    get totalProcedimiento() {
        return this.acTotalProcedimiento;
    }
    get totalConsulta() {
        return this.acTotalConsulta;
    }
    get totalControl() {
        return this.acTotalControl;
    }
}
