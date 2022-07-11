import gql from "graphql-tag";

export const EQUIPO_FRAGMENT =  gql`
    fragment EquipoObject on Equipo {
        id
        nombre
        valorMaximo
        valorActual 
        fechaActualizacion
        registerDate 
    }
`;