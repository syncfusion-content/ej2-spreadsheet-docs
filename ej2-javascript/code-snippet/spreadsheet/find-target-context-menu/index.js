ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
    contextMenuBeforeOpen: function (args) {
        if (closest(args.event.target, '.e-sheet-content')) {
            console.log('Cell contextMenu');
        } else if (closest(args.event.target, '.e-colhdr-table')) {
            console.log('Column header contextMenu');
        } else if (closest(args.event.target, '.e-rowhdr-table')) {
            console.log('Row header contextMenu');
        } else if (closest(args.event.target, '.e-toolbar-item')) {
            console.log('Footer contextMenu');
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
