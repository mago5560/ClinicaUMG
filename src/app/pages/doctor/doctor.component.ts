import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorI } from 'src/app/model/doctori';
import { wsClinicaService } from './../../service/wsClinica.service';
import { DoctortecleoComponent } from './doctortecleo/doctortecleo.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  _data: DoctorI[] = [];

  constructor(private api: wsClinicaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.buscar();
  }

  ngOnInit(): void {

 }

  displayedColumns: string[] = ['id','nombre','apellido','telefono','modulo','activo','acciones'];
  dataSource = new  MatTableDataSource(this._data) ;


  buscar(){
    this.api.listarDoctor().subscribe(data =>{
      this._data = data;
      this.dataSource = new MatTableDataSource(this._data);
   });
  }

  getDataFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialog(data?: DoctorI) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(DoctortecleoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      (confirmDialog: boolean) => {
        if(confirmDialog){
          this.snackBar.open('Registro creada correctamente', 'Aceptar', {
            duration: 2000,
          });
          this.buscar()
        }
      }
    );
  }


  eliminar(id: number) {
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {

      this.api.eliminarDoctor(id).subscribe(data => {

        this.snackBar.open('Registro eliminado correctamente', 'Aceptar', {
          duration: 2000,
        });
        this.buscar();
      })
    }
  }

}
