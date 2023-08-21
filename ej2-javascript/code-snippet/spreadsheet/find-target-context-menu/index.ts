import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { enableRipple, closest } from '@syncfusion/ej2-base';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';

enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
    contextMenuBeforeOpen: (args: BeforeOpenCloseMenuEventArgs): void => {
        if (closest(args.event.target, '.e-sheet-content')) {
            console.log('Cell contextMenu');
        } else if (closest(args.event.target, '.e-colhdr-table')) {
            console.log('Column header contextMenu');
        } else if (closest(args.event.target, '.e-rowhdr-table')) {
            console.log('Row header contextMenu');
        } else if (closest(args.event.target, '.e-toolbar-item')) {
            console.log('Footer contextMenu');
        }
    },
});

spreadsheet.appendTo('#spreadsheet');


