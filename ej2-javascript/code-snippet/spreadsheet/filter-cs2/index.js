// Initialize the Spreadsheet component.

var sheet = [{
    ranges: [{ dataSource: defaultData }],
    columns: [
        { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
        { width: 130 }, { width: 120 }
    ]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    allowFiltering: true,
    created: function () {
        // Applies cell and number formatting to specified range of the active sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Construct the predicate model to be updated to the data.
        let predicates = [{
            field: 'C',
            operator: 'equal',
            value: 'Pink',
            matchCase: false
        }];
        // Apply filter to the specified range.
        spreadsheet.applyFilter(predicates, 'A1:C7');
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

document.getElementById("getFilterData").onclick = () => {
    if (spreadsheet) {
        let activeSheet = spreadsheet.getActiveSheet();
        if (activeSheet) {
            let usedRange = activeSheet.usedRange;
            if (usedRange) {
                for (let i = 0; i <= usedRange.rowIndex; i++) {
                    // Get the filtered row using isFiltered property.
                    let filteredRow = (activeSheet.rows[i]).isFiltered;
                    if (!filteredRow) {
                        let rowData = spreadsheet.getRowData(i);
                        console.log("Row:", i + 1, "Cells", rowData);
                    }
                }
            }
        }
    }
};