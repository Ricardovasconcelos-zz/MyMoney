export function selectTab(tableId){
    return {
        type: 'TAB_SELECTED',
        payload: tableId
    }
}
export function showTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}