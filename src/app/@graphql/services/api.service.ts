import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public apollo: Apollo) { }

  protected get(query: DocumentNode, variables: object = {}, context: object = {}) {
    return this.apollo.watchQuery(
      {
        query,
        variables,
        context,
        fetchPolicy: 'network-only'
      }
    ).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  protected set(mutation: DocumentNode, variables: object = {}, context: object = {}) {
    return this.apollo.mutate({
      mutation,
      variables,
      context
    }).pipe(
      map((result) => {
        return result.data;
      })
    );
  }
}
