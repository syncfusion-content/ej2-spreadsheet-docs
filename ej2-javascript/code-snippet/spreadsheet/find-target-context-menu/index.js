ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
  contextMenuBeforeOpen: function (args) {
    if (ejs.base.closest(args.event.target, '.e-sheet-content')) {
      console.log('Cell Context Menu');
    } else if (ejs.base.closest(args.event.target, '.e-colhdr-table')) {
      console.log('Column Header Context Menu');
    } else if (ejs.base.closest(args.event.target, '.e-rowhdr-table')) {
      console.log('Row Header Context Menu');
    } else if (ejs.base.closest(args.event.target, '.e-toolbar-item')) {
      console.log('Footer Context Menu');
    }
  },
});

spreadsheet.appendTo('#spreadsheet');
