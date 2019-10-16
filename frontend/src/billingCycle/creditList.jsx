import React, { Component } from 'react';
import Grid from '../common/layout/Grid'
import { Field } from 'redux-form'
export default class CreditList extends Component {

    renderRows(){
        return (
            <tr>
                <td><Field name='credits[0].name' component='input'/></td>
                <td><Field name='credits[0].value' component='input'/></td>
                <td></td>
            </tr>
        )
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
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </fildset>
        </Grid>
    );
  }
}
