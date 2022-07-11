import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInfoPage, IResultData } from '@core/interfaces/result-data.interface';
import { EQUIPOS_LIST_QUERY } from '@graphql/operations/query/equipo';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs/internal/Observable';
import { TablePaginationService } from './table-pagination.service';
import { map } from 'rxjs/internal/operators/map';
import { ITableColumns } from '@core/interfaces/table-columns.interface';


@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Input() query: DocumentNode;
  @Input() context: object;
  @Input() itemsPage = 20;
  @Input() resultData: IResultData;
  infoPage: IInfoPage;
  @Input() tableColumns: Array<ITableColumns> | undefined;
  @Output() manageItem = new EventEmitter<Array<any>>();
  data$: Observable<any> | undefined;

  constructor(private service: TablePaginationService) { }

  ngOnInit(): void {
    if (this.query === undefined) {
      throw new Error('Query is undefined, please add');
    }
    if (this.resultData === undefined) {
      throw new Error('resultData is undefined, please add');
    }
    if (this.tableColumns === undefined) {
      throw new Error('Table columns is undefined, please add');
    }
    this.infoPage = {
      page: 1,
      pages: 1,
      itemsPage: this.itemsPage,
      total: 1
    }
    this.loadData();
  }

  loadData() {
    const variables = {
      page: this.infoPage.page,
      itemsPage: this.infoPage.itemsPage,
    };
    this.data$ = this.service.getCollectionData(this.query, variables, {}).pipe(
      map((result: any) => {
        const data = result[this.resultData.definitionKey];
        console.log(data);
        this.infoPage.pages = data.info.pages;
        this.infoPage.total = data.info.total;
        return data[this.resultData.listKey];
      })
    );
  }

  changePage() {
    this.loadData();
  }

  manageAction(action: string, data: any) {
    this.manageItem.emit([action, data]);
  }
}
