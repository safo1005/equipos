import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterEquipo, IResultRegister } from '@core/interfaces/register.interface';
import { EquiposService } from '@core/services/equipos.service';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.scss']
})
export class AddPcComponent implements OnInit {
  register: IRegisterEquipo = {
    nombre: '',
    valorMaximo: '',
    valorActual: ''
  }
  constructor(private equiposService: EquiposService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.equiposService.register(this.register).subscribe((result: IResultRegister) => {
      console.log('Resultado', result);
      if (!result.status) {
        basicAlert(TYPE_ALERT.WARNING, result.message);
        return;
      }
      basicAlert(TYPE_ALERT.SUCCESS, result.message);
      this.router.navigate(['/home']);
    });
  }
}
