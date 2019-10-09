export function selectTab(tableId){
    return {
        type: 'TAB_SELECTED',
        payload: tableId
    }
}