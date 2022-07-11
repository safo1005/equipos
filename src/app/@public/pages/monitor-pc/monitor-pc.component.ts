import { Component, OnInit } from '@angular/core';
import { IResultData } from '@core/interfaces/result-data.interface';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { EQUIPOS_LIST_QUERY } from '@graphql/operations/query/equipo';
import { DocumentNode } from 'graphql';

@Component({
  selector: 'app-monitor-pc',
  templateUrl: './monitor-pc.component.html',
  styleUrls: ['./monitor-pc.component.scss']
})
export class MonitorPcComponent implements OnInit {
  query: DocumentNode = EQUIPOS_LIST_QUERY;
  context: object = {};
  itemsPage: number = 10;
  resultData: IResultData = {
    listKey: 'equipos',
    definitionKey: 'equipos'
  }
  columns: Array<ITableColumns> = [
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

  ngOnInit(): void {
  }
}
