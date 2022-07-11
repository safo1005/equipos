import { Component, OnInit } from '@angular/core';
import { IResultData } from '@core/interfaces/result-data.interface';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { EquiposService } from '@core/services/equipos.service';
import { EQUIPOS_LIST_QUERY } from '@graphql/operations/query/equipo';
import { formBasicDialog, optionsWithDetails } from '@shared/alerts/alerts';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { DocumentNode } from 'graphql';

@Component({
  selector: 'app-monitor-pc',
  templateUrl: './monitor-pc.component.html',
  styleUrls: ['./monitor-pc.component.scss']
})
export class MonitorPcComponent implements OnInit {
  query: DocumentNode = EQUIPOS_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  columns: Array<ITableColumns>;

  constructor(private service: EquiposService) {}

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'equipos',
      definitionKey: 'equipos'
    };
    this.columns = [
      {
        property: 'id',
        label: '#'
      },
      {
        property: 'nombre',
        label: 'Nombre'
      },
      {
        property: 'valorActual',
        label: 'Valor Actual'
      },
      {
        property: 'fechaActualizacion',
        label: 'Fecha de Actualización'
      },
    ];
  }

  private initializeForm(equipo: any) {
    const defaultName = equipo.nombre !== undefined && equipo.nombre !== '' ? equipo.nombre: ''
    const defaultValorMaximo = equipo.valorMaximo !== undefined && equipo.valorMaximo !== '' ? equipo.valorMaximo: ''
    return `
      <input id="nombre" value="${defaultName}" class="swal2-input" placeholder="Nombre">
      <input id="valorMaximo" value="${defaultValorMaximo}" class="swal2-input" placeholder="Valor máximo">
    `
  }

    async takeAction($event) {
      const action = $event[0];
      const equipo = $event[1];
      const html = this.initializeForm(equipo);
      switch (action) {
        case 'edit':
          this.updateForm(html, equipo);
          break;
        case 'delete':
          this.deleteForm(equipo);
          break;
        default:
          break;
      }
  }

  private async updateForm(html: string, equipo: any) {
    const result = await formBasicDialog('Modificar equipo', html);
    console.log(result);
    this.updateEquipo(result, equipo.id);
  }

  private updateEquipo(result: any, id: string) {
    if (result.value) {
      const equipo = result.value;
      equipo.id = id;
      console.log(equipo);
      this.service.update(result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  private async deleteForm(equipo: any) {
    const result = await optionsWithDetails(
      'Eliminar',
      `¿Seguro que quiere eliminar?`,
      430,
      'Cancelar',
      'Sí, eliminar'
    );
    if (result === false) {
      this.deleteEquipo(equipo.id);
    }
  }

  private deleteEquipo(id: string) {
    this.service.delete(id).subscribe((res: any) => {
      if (res.status) {
        basicAlert(TYPE_ALERT.SUCCESS, res.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, res.message);
    });
  }
}
