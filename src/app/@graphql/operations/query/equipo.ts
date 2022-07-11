import gql from 'graphql-tag';
import { EQUIPO_FRAGMENT } from '@graphql/operations/fragment/equipo';
import { RESULT_EQUIPO_INFO_FRAGMENT } from '../fragment/result-info';

export const EQUIPOS_LIST_QUERY = gql`
    query equiposList ($page: Int, $itemsPage: Int){
        equipos(page: $page, itemsPage: $itemsPage) {
            info {
                ...ResultInfoObject
            }
            status
            message
            equipos {
                ...EquipoObject
            }
        }
    }
    ${ EQUIPO_FRAGMENT }
    ${ RESULT_EQUIPO_INFO_FRAGMENT }
`;