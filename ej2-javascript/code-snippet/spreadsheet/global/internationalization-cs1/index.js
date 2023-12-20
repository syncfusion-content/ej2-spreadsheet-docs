ej.base.enableRipple(true);
ej.base.setCulture('fr-CH');
ej.base.setCurrencyCode('EUR');

ej.base.L10n.load({ 'fr-CH': locale });

var spreadsheet = new ej.spreadsheet.Spreadsheet({
     // Specifies the locale
    locale: 'fr-CH',
    sheets: [{ ranges: [{ dataSource: defaultData,
    columns: [{ width: 150 }, { width: 150 },{ width: 150},
                          { width: 160 }, { width: 100 }, {width: 150}, {width: 150}, {width: 150}] }]
    }],
    
    created: function () {
            //Applies cell and number formatting to specified range of the active sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
            spreadsheet.numberFormat('$#,##0.00', 'F2:F11');
    }
});

spreadsheet.appendTo('#spreadsheet');
