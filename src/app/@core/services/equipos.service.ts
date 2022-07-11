import { Injectable } from '@angular/core';
import { IRegisterEquipo } from '@core/interfaces/register.interface';
import { REGISTER_EQUIPO } from '@graphql/operations/mutation/equipo';
import { EQUIPOS_LIST_QUERY } from '@graphql/operations/query/equipo';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EquiposService extends ApiService{

  constructor(apollo: Apollo) { 
    super(apollo);
  }

  getEquipos(page: number = 1, itemsPage: number = 20) {
    return this.get(EQUIPOS_LIST_QUERY,
      {
        itemsPage, page
      }
    ).pipe(map((result: any) => {
      return result.equipos;
    }));
  }

  register(equipo: IRegisterEquipo) {
    return this.set(REGISTER_EQUIPO, {
      equipo
    }).pipe(
      map((result: any) => {
        return result.register;
      })
    );
  }
}


