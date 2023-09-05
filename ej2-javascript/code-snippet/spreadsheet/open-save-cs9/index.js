ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
});

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');
var uploadObj = new ej.inputs.Uploader({
  asyncSettings: {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
  },
  success: onSuccess,
  allowedExtensions: '.xlsx, .xls, .csv',
});
uploadObj.appendTo('#fileupload');

function onSuccess(args) {
  if (args.operation == 'upload') spreadsheet.open({ file: args.file.rawFile }); // to open the loaded excel file in spreadsheet
}
