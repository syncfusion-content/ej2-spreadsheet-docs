ej.base.enableRipple(true);

ej.base.L10n.load({ 'fr-CH': locale });
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  // Specifies the locale
  locale: 'fr-CH',
  sheets: [
    {
      ranges: [
        {
          dataSource: defaultData,
          columns: [
            { width: 80 },
            { width: 80 },
            { width: 80 },
            { width: 160 },
            { width: 100 },
            { width: 150 },
          ],
        },
      ],
    },
  ],
});

spreadsheet.appendTo('#spreadsheet');