

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 120 }, { width: 180 }, { width: 100 }, { width: 120 }, { width: 120 }];

let rows: RowModel[] = [{
    index: 10, cells: [{ index: 3, value: 'Total Amount:', style: { fontWeight: 'bold' } }, { formula: '=SUM(E2:E10)' }]
}];

let sheets: SheetModel[] = [{ ranges: [{ dataSource: data }], columns: columns, selectedRange: 'E11', rows: rows }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
        spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
        spreadsheet.numberFormat('$#,##0.00', 'E2:E11');
    },
    // Triggers before going to the editing mode.
    cellEdit: (args: CellEditEventArgs): void => {
        // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
    },
    // Trigger before saving the edited cell content.
    beforeCellSave: (args: CellEditEventArgs): void => {
        // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            spreadsheet.closeEdit();
        }
    },
    showSheetTabs: false, showRibbon: false
});

spreadsheet.appendTo('#spreadsheet');


