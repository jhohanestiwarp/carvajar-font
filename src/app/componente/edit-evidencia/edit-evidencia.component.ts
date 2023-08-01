import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { evidenciaService } from 'src/app/service/planilla.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-evidencia',
  templateUrl: './edit-evidencia.component.html',
  styleUrls: ['./edit-evidencia.component.css']
})
export class EditevidenciaComponent implements OnInit {
  formevidencia:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private evidenciaService:evidenciaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_evidencia');
     

      this.evidenciaService.Obtenerevidencia(this.elID).subscribe(result =>{
        console.log(result);
        this.formevidencia.setValue({
        });
      }
      );
  
      this.formevidencia = this.formulario.group(
        {
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.evidenciaService.Updateevidencia({id_evidencia:this.elID,...this.formevidencia.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-evidencia');
    });

  }

}
