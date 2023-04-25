ej.base.enableRipple(true);

var columns =  [{ width: 150 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }];

// Setting names for `categories`, `monthly spendings` and `annual spendings` ranges.
var definedNames = [
    { name: 'Categories', refersTo: '=Budget Details!A3:A11' },
    { name: 'MonthlySpendings', refersTo: '=Budget Details!B3:B11' },
    { name: 'AnnualSpendings', refersTo: '=Budget Details!C3:C11' }
];

var rows = [
    {
        height: 40, customHeight: true, cells: [{ value: 'Monthly Expense', colSpan: 5, style:
        { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' } }]
    },
    { height: 30 },
    {
        index: 11, cells: [{ value: 'Totals', style: { fontStyle: 'italic', fontWeight: 'bold' } }, { formula: '=SUM(MonthlySpendings)' },
            // Initializing the formulas using defined names.
            { formula: '=SUM(AnnualSpendings)' }, { formula: '=SUM(LastYearSpendings)' }, { formula: '=C12/D12' }]
    },
    {
        cells: [{ index: 1, value: 'Number of Categories', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=COUNTA(Categories)' }]
    },
    {
        cells: [{ index: 1, value: 'Average Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=AVERAGE(MonthlySpendings)', format: '$#,##0' }]
    },
    {
        cells: [{ index: 1, value: 'Min Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=MIN(MonthlySpendings)', format: '$#,##0' }]
    },
    {
        cells: [{ index: 1, value: 'Max Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=MAX(MonthlySpendings)', format: '$#,##0' }]
    }
];

var sheets = [{ name: 'Budget Details', ranges: [{ dataSource: data, startCell: 'A2' }], columns: columns, rows }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    definedNames: definedNames,
    beforeDataBound: function () {
        // Adding name dynamically for `last year spending` and `percentage change` ranges.
        spreadsheet.addDefinedName({ name: 'LastYearSpendings', refersTo: '=D3:D11' });
        spreadsheet.addDefinedName({ name: 'PercentageChange', refersTo: '=E3:E11' });
    },
    created: function () {
        // Removing the unwanted `PercentageChange` named range
        spreadsheet.removeDefinedName('PercentageChange', '');

        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
        spreadsheet.numberFormat('$#,##0', 'B3:D12');
        spreadsheet.numberFormat('0%', 'E3:E12');
    },
    showRibbon: false, showSheetTabs: false
});

spreadsheet.appendTo('#spreadsheet');

