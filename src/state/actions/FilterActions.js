// Definir constantes de acciones
export const SELECT_FILTER = "SELECT_FILTER";

// Definir Action Generators

const SelectFilter = text => ({
    type: SELECT_FILTER,
    text
})

// EXPORT ACTIONS

export { SelectFilter };