import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client';
import { APOLLO_OPTIONS } from 'apollo-angular';

const uri = 'http://localhost:2002/graphql';
// AQUI CAPTURAMOS LOS ERRORES JUNTO CON LA CONFIGURACIÓN
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Errors', graphQLErrors);
    }
 
    if (networkError) {
      console.log('Network Errors', networkError);
    }
  });
  const link = ApolloLink.from([errorLink, httpLink.create({ uri })]);
  return {
    link,
    cache: new InMemoryCache(),
  };
}


@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo, // Añadimos configuración APollo
      deps: [HttpLink],
    },
  ],
})

export class GraphQLModule {}