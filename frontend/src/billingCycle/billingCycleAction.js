import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return dispath => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
            dispath([
                resetForm('BillingCycleForm'), 
                getList(), 
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    }
  
}