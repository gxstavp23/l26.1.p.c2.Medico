export interface I_vGestionMedica{

    onNuevoPaciente(callback: () => void):void;

    reportar({totalVentas,totalProcedimiento,totalConsulta,totalControl,porcentajeProcedimiento,porcentajeConsulta,porcentajeControl,porcentajeDescuentos}:
        {totalVentas:number,totalProcedimiento:number,totalConsulta:number,totalControl:number,porcentajeProcedimiento:number,porcentajeConsulta:number,porcentajeControl:number,porcentajeDescuentos:number}):void

}