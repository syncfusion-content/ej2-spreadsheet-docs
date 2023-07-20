import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';
import { L10n, enableRipple } from '@syncfusion/ej2-base';
import * as localeText from './locale-text.json';
enableRipple(true);
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
});

spreadsheet.appendTo('#spreadsheet');