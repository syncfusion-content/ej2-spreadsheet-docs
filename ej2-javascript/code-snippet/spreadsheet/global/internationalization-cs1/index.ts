import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';
import {
  loadCldr,
  L10n,
  setCulture,
  setCurrencyCode,
  enableRipple
} from '@syncfusion/ej2-base';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import * as localeText from './locale-text.json';

enableRipple(true);

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);
setCulture('fr-CH');
setCurrencyCode('EUR');

L10n.load({ 'fr-CH': localeText });

let columns: ColumnModel[] = [
  { width: 100 },
  { width: 130 },
  { width: 96 },
  { width: 130 },
  { width: 130 },
  { width: 96 },
  { width: 100 },
  { width: 100 },
  { width: 110 },
  { width: 100 },
  { width: 130 },
  { width: 150 },
];

let spreadsheet: Spreadsheet = new Spreadsheet({
  // Specifies the locale
  locale: 'fr-CH',
  sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns }],
  created: (): void => {
    //Applies cell and number formatting to specified range of the active sheet
    spreadsheet.cellFormat(
      { fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },
      'A1:F1'
    );
    spreadsheet.numberFormat('$#,##0.00', 'F2:F11');
  },
});

spreadsheet.appendTo('#spreadsheet');