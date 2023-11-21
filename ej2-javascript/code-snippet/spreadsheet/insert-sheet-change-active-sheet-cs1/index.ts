
import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data, newData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [
    { width: 180 }, { width: 130 }, { width: 130 },
    { width: 180 }, { width: 130 }, { width: 120 }
];

let sheets: SheetModel[] = [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: columns
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("insertSheet").onclick = () => {
    spreadsheet.insertSheet(
        [
            {
                index: 1,
                name: 'new_sheet',
                ranges: [
                    {
                        dataSource: newData,
                        startCell: 'A1'
                    },
                ],
                columns: columns,
            },
        ]
    );
    // Timeout function to wait until the sheet is inserted.
    setTimeout(() => {
        // Method to switch to the new sheet.
        spreadsheet.goTo('new_sheet!A1');
    })
};


