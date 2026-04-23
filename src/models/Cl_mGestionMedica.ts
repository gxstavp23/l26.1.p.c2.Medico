import Cl_mPaciente from "./Cl_mPaciente.js";

export default class Cl_mGestionMedica{

    private cntPacientes: number = 0;
    private cntProcedimiento: number = 0;
    private cntConsulta: number = 0;
    private cntControl: number = 0;
    private cntDescuentos:number =0;
    private acTotalRecaudado:number = 0;
    private acTotalProcedimiento: number = 0;
    private acTotalConsulta: number = 0;
    private acTotalControl: number = 0;


    procesarPaciente(p:Cl_mPaciente): void{

        this.cntPacientes++
         this.acTotalRecaudado += p.costo

          
        if (p.tipoAtencion === 1){
            this.cntProcedimiento++
            this.acTotalProcedimiento += p.costo
        }
        if (p.tipoAtencion === 2){
            this.cntConsulta++
            this.acTotalConsulta += p.costo
        }
        if (p.tipoAtencion === 3){
            this.cntControl++
            this.acTotalControl += p.costo
        }
        if (p.descuento === true){
            this.cntDescuentos++
        }


    }

    get porcentajeProcedimiento():number{
        if (this.cntPacientes > 0) {
            return (this.cntProcedimiento / this.cntPacientes) * 100            
        } return 0;
    }

    get porcentajeConsulta():number{
        if (this.cntPacientes > 0) {
            return (this.cntConsulta / this.cntPacientes) * 100            
        } return 0;
    }

    get porcentajeControl():number{
        if (this.cntPacientes > 0) {
            return (this.cntControl / this.cntPacientes) * 100            
        } return 0;
    }

    get porcentajeDescuentos():number{
        if (this.cntPacientes > 0) {
            return (this.cntDescuentos / this.cntPacientes) * 100            
        } return 0;
    }

    get totalVentas():number{
        return this.acTotalRecaudado;
    }

    get totalProcedimiento():number{
        return this.acTotalProcedimiento;
    }

    get totalConsulta():number{
        return this.acTotalConsulta;
    }

    get totalControl():number{
        return this.acTotalControl;
    }

   
    
}