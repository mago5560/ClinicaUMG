import { Injectable } from "@angular/core";
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DoctorI } from "../model/doctori";
import { PacienteI } from "../model/pacientei";
import { MedicamentoI } from "../model/medicamentoi";
import { FichaMedicaI } from "../model/fichamedicai";
import { RecetaI } from "../model/recetai";

@Injectable({
  providedIn: 'root'
})
export class wsClinicaService {
  url: string="http://localhost:8080/api/"

  constructor(private http: HttpClient) {}

  //**DOCTOR*/
  listarDoctor(): Observable<DoctorI[]> {
    return this.http.get<DoctorI[]>(this.url+"doctor");
  }

  listarDoctorId(id:number): Observable<DoctorI>{
    return this.http.get<DoctorI>(this.url+"doctor/id"+id);
  }

  grabarDoctor(cls:DoctorI){
    this.http.post(this.url+"doctor", JSON.stringify(cls));
  }
  eliminarDoctor(id:number){
    return this.http.delete(this.url+"doctor/id"+id);
  }

  //**PACIENTE*/
  listarPaciente(): Observable<PacienteI[]>{
    return this.http.get<PacienteI[]>(this.url+"paciente");
  }

  listarPacienteId(id: number): Observable<PacienteI>{
    return this.http.get<PacienteI>(this.url+"paciente/id"+id);
  }

  grabarPaciente(cls:PacienteI){
    this.http.post(this.url+"paciente", JSON.stringify(cls));
  }

  //**MEDICAMENTO*/
  listarMedicamento(): Observable<MedicamentoI[]> {
    return this.http.get<MedicamentoI[]>(this.url+"medicamento");
  }

  listarMedicamentoId(id:number): Observable<MedicamentoI>{
    return this.http.get<MedicamentoI>(this.url+"medicamento/id"+id);
  }

  grabarMedicamento(cls:MedicamentoI){
    this.http.post(this.url+"medicamento", JSON.stringify(cls));
  }


  //**FICHA MEDICA*/
  listarFichaMedica(): Observable<FichaMedicaI[]> {
    return this.http.get<FichaMedicaI[]>(this.url+"fichamedica");
  }

  listarFichaMedicaId(id:number): Observable<FichaMedicaI>{
    return this.http.get<FichaMedicaI>(this.url+"fichamedica/id"+id);
  }

  listarFichaMedicaIdDoctor(id:number): Observable<FichaMedicaI[]>{
    return this.http.get<FichaMedicaI[]>(this.url+"fichamedica/idDoctor"+id);
  }

  listarFichaMedicaIdPaciente(id:number): Observable<FichaMedicaI[]>{
    return this.http.get<FichaMedicaI[]>(this.url+"fichamedica/idPaciente"+id);
  }

  grabarFichaMedica(cls:FichaMedicaI){
    this.http.post(this.url+"fichamedica", JSON.stringify(cls));
  }

  //**RECETA*/
  listarReceta(): Observable<RecetaI[]> {
    return this.http.get<RecetaI[]>(this.url+"receta");
  }

  listarRecetaId(id:number): Observable<RecetaI>{
    return this.http.get<RecetaI>(this.url+"receta/id"+id);
  }

  listarRecetaIdMedicamento(id:number): Observable<FichaMedicaI[]>{
    return this.http.get<FichaMedicaI[]>(this.url+"receta/idMedicamento"+id);
  }

  listarRecetaIdFichaMedica(id:number): Observable<FichaMedicaI[]>{
    return this.http.get<FichaMedicaI[]>(this.url+"receta/idFichaMedica"+id);
  }

  grabarReceta(cls:RecetaI){
    this.http.post(this.url+"receta", JSON.stringify(cls));
  }




}
