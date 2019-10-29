import React, { Component } from "react";
import Grid from "../common/layout/Grid";
import { Field } from "redux-form";
import Input from "../common/form/input";

export default class CreditList extends Component {
  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`credits[${index}].name`}
            component={Input}
            placeholder="Informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`credits[${index}].value`}
            component={Input}
            placeholder="Informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <td></td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fildset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações </th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fildset>
      </Grid>
    );
  }
}
