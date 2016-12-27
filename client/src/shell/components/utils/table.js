import React, {Component} from 'react';

export default class Table extends Component {

    constructor() {
        super();
    }

    actionClicked(data, event) {
        this.props.handleEvent(data.action, data.data);
        event.preventDefault();
    }

    renderRows(tableData, actionCols, tableFields, columnWrappers = {}) {
        let fields = tableFields.map(x => x.name);

        return tableData.map((transaction) => {

            let row = fields.map((columnKey, key) => {
                // debugger
                let d = transaction[columnKey];
                let displayFn = columnWrappers[columnKey] ? columnWrappers[columnKey] : null;

                let row =
                    <td key={key}> {d}</td>
                if (displayFn) {
                    row = <td key={key}> {displayFn(d)} </td>
                }
                return row;
            });

            let actions = actionCols.map((x, idx) => {

                let data = { data: transaction, action: x.action }
                return (
                    <td key={idx}>
                        <a href="" onClick={this.actionClicked.bind(this, data)}> {x.name} </a>
                    </td>
                );
            });

            return (
                <tr key={transaction.transactionId}>
                    {row}
                    {actions}
                </tr>
            );
        });
    }

    renderHeaders(tableFields, actionCols) {

        let headerActions = actionCols.map((x, idx) => <th key={idx}>&nbsp;</th>)
        let tableHeaders =
            tableFields
                .map((x, idx) => <th key={idx}> {x.header} </th>);

        return (
            <tr>
                {tableHeaders}
                {headerActions}
            </tr>
        )
    }

    render() {
        let {
            tableData = [],
            handleSubmit,
            onSearchSubmitted,
            pageChanged,
            tableFields = [],
            totalTransactionCount,
            pageIndex,
            columnWrappers
        } = this.props;

        let actionCols =
            tableFields
                .filter(x => x.type == 'action');

        let headers = this.renderHeaders(tableFields, actionCols);
        let rows = this.renderRows(tableData, actionCols, tableFields, columnWrappers);

        return (
            <div>
                <div className="">
                    <table className="table-custom table">
                        <thead>
                            {headers}
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}