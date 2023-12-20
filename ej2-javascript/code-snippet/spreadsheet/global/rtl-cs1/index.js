ej.base.enableRipple(true);

ej.base.L10n.load({ 'ar-AE': locale });

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    locale: 'ar-AE',
    enableRtl: true,
    sheets: [{ ranges: [{ dataSource: defaultData,
    columns: [{ width: 80 }, { width: 80 },{ width: 80},
                          { width: 160 }, { width: 100 }, {width: 150}] }]
    }]
});

spreadsheet.appendTo('#spreadsheet');