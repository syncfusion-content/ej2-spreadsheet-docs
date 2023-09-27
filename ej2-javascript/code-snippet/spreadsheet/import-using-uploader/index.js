ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
});

spreadsheet.appendTo('#spreadsheet');
var uploader = new ej.inputs.Uploader({
  asyncSettings: {
    saveUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  },
  success: onSuccess,
  allowedExtensions: '.xlsx, .xls, .csv',
});
uploader.appendTo('#fileupload');

function onSuccess(args) {
  if (args.operation == 'upload') spreadsheet.open({ file: args.file.rawFile });
}
