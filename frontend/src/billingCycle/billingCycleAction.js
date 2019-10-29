import axios from "axios";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

import { toastr } from "react-redux-toastr";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}
export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return dispath => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success("Sucesso", "Operação realizada com sucesso!");
        dispath(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Error", error));
      });
  };
}

export function showOptions(billingCycle, option) {
  return [
    showTabs(option),
    selectTab(option),
    initialize("BillingCycleForm", billingCycle)
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("BillingCycleForm", INITIAL_VALUES)
  ];
}
