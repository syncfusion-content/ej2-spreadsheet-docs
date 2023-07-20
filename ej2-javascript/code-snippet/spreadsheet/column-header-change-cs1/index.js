ej.base.enableRipple(true);

var sheets = [{ ranges: [{ dataSource: data }] }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    beforeCellRender: function (args) {
        if (
          args.colIndex >= 0 &&
          args.colIndex <= 10 &&
          args.element.classList.contains('e-header-cell')
        ) {
          var text = 'custom header ' + args.colIndex.toString();
          args.element.innerHTML = text;
        }
    },
});

spreadsheet.appendTo('#spreadsheet');

