export const CHANGE_FILTER = "CHANGE_FILTER";

const ChangeFilter = (filter) => ({
    type: CHANGE_FILTER, filter
})

export { ChangeFilter as changeFilter };