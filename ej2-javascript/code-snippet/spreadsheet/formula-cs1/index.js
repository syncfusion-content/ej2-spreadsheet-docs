ej.base.enableRipple(true);

var columns =  [{ width: 150 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 140 }, { width: 150 }];

var rows = [
    {
        height: 40, customHeight: true, cells: [{ value: 'Monthly Expense', colSpan: 5, style:
        { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' } }]
    },
    { height: 30 },
    {
        index: 11, cells: [{ value: 'Totals', style: { fontStyle: 'italic', fontWeight: 'bold' } }, { formula: '=SUM(B3:B11)' },
            // Calculating total of each column data through cell binding.
            { formula: '=SUM(C3:C11)' }, { formula: '=SUM(D3:D11)' }]
    },
    {
        cells: [{ index: 1, value: 'Number of Categories', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=COUNTA(A3:A11)' }, { index: 4, value: 'Round Down', style: { fontWeight: 'bold', textAlign: 'right' } }]
    },
    {
        cells: [{ index: 1, value: 'Average Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=AVERAGE(B3:B11)', format: '$#,##0' }]
    },
    {
        cells: [{ index: 1, value: 'Min Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=MIN(B3:B11)', format: '$#,##0' }]
    },
    {
        cells: [{ index: 1, value: 'Max Spend', colSpan: 2, style: { fontWeight: 'bold', textAlign: 'right' } },
            { index: 3, formula: '=MAX(B3:B11)', format: '$#,##0' }]
    }
];

var sheets = [{ ranges: [{ dataSource: data, startCell: 'A2' }], columns: columns, rows }];

// Custom function to calculate percentage between two cell values.
function calculatePercentage(firstCell, secondCell) {
    return Number(firstCell) / Number(secondCell);
}

// Custom function to calculate round down for values.
function roundDownHandler(value, digit ) {
    let formulaResult, sliceValue;
    // Split the decimal values.
    let splitValue = value.split('.');
    // Fetch the sign of the decimal value.
    let valueMode = Math.sign(parseInt(digit));
    // Triggers when the provided digit value is positive.
    if (valueMode === 1) {
      // Slice the value with the provided decimal digit and returns results.
      sliceValue = splitValue[1].slice(0, digit);
      formulaResult = digit ? splitValue[0] + '.' + sliceValue : splitValue[0];
      return formulaResult;
    }
    // Triggers when the provided digit value is zero.
    if (valueMode === 0) {
      formulaResult = splitValue[0];
      return formulaResult;
    }
    // Triggers when the provided digit value is negative.
    if (valueMode === -1) {
      // Store zero's upto provided negative digit.
      let addZero = '';
      // Split the value that are provided with (-) sign.
      let decimalPlotting = digit.split('-');
      // Slice the last characters.
      sliceValue = splitValue[0].slice(0, digit);
      // Returns zero if the decimal value is equal to the digit.
      if (sliceValue == '') {
        return 0;
      } else {
        // Looping to add zero's to the specified number.
        for (let i = 1; i <= parseInt(decimalPlotting[1]); i++) {
          addZero = addZero + '0';
        }
        formulaResult = sliceValue + addZero;
        // Returns result.
        return formulaResult;
      }
    }
  }

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
        spreadsheet.numberFormat('$#,##0', 'B3:D12');
        spreadsheet.numberFormat('0%', 'E3:E12');
        // Adding custom function for calculating the percentage between two cells.
        spreadsheet.addCustomFunction(calculatePercentage, 'PERCENTAGE');
        // Adding custom function for calculating round down for the value.
        spreadsheet.addCustomFunction(roundDownHandler, 'ROUNDDOWN');
        // Calculate percentage using custom added formula in E12 cell.
        spreadsheet.updateCell({ formula: '=PERCENTAGE(C12,D12)' }, 'E12');
        // Update the sum of plotting values in F12 cell.
        spreadsheet.updateCell({ formula: '=SUM(F3:F11)' }, 'F12');
        // Calculate round down for sum of plotting using custom added formula in F13 cell.
        spreadsheet.updateCell({ formula: '=ROUNDDOWN(F12,0)' }, 'F13');
    },
    showRibbon: false, showSheetTabs: false
});

(window).roundDownHandler = (value, digit) => roundDownHandler(value, digit);

spreadsheet.appendTo('#spreadsheet');

