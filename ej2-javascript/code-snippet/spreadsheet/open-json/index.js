ej.base.enableRipple(true);

//Initialize Spreadsheet component
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  created: function () {
    spreadsheet.openFromJson({
      file: jsonData.jsonObject,
      triggerEvent: true, // To trigger openComplete event after the JSON loaded into the spreadsheet.
    });
  },
  openComplete: function () {
    alert('JSON loaded successfully');
  },
});

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');

