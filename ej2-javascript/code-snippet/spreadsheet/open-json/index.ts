import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { jsonData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
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

spreadsheet.appendTo('#spreadsheet');
