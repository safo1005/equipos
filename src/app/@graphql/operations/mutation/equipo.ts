import gql from 'graphql-tag';
import { EQUIPO_FRAGMENT } from '@graphql/operations/fragment/equipo';

export const REGISTER_EQUIPO = gql `
    mutation addEquipo($equipo: EquipoInput!) {
        register(equipo: $equipo) {
            status
            message
            equipo {
                ...EquipoObject
            }
        }
    }
    ${ EQUIPO_FRAGMENT }
`;

export const MODIFY_EQUIPO = gql`
    mutation modificarEquipo($equipo: EquipoInput!) {
        updateEquipo(equipo: $equipo) {
            status
            message
            equipo {
                ...EquipoObject
            }
        }
    }
    ${ EQUIPO_FRAGMENT }
`;

export const DELETE_EQUIPO = gql`
    mutation borrarEquipo($id: ID!) {
        deleteEquipo(id: $id) {
            status
            message
        }
    }
`;