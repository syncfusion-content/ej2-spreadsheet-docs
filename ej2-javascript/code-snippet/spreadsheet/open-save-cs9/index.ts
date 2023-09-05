import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { Uploader } from '@syncfusion/ej2-inputs';
//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
});

spreadsheet.appendTo('#spreadsheet');

// Initialize the uploader component
let uploadObj: Uploader = new Uploader({
  asyncSettings: {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
  },
  success: onSuccess,
  allowedExtensions: '.xlsx, .xls, .csv',
});
uploadObj.appendTo('#fileupload');

function onSuccess(args): void {
  if (args.operation == 'upload') spreadsheet.open({ file: args.file.rawFile }); // to open the loaded excel file in spreadsheet
}
