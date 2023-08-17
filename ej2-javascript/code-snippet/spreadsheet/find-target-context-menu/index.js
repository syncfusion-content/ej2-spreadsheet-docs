ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
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
