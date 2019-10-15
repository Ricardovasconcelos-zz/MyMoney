import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducers from '../common/tab/tabReducers'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducers,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer