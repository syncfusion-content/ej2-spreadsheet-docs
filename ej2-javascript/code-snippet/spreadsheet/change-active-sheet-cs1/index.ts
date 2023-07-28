

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true,
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
    openComplete: function() {
        if (spreadsheet) {
        spreadsheet.activeSheetIndex = 2;
        }
    }
});

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');


