

import { Spreadsheet, SheetModel, CellRenderEventArgs } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [{ ranges: [{ dataSource: data }] }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    beforeCellRender: (args: CellRenderEventArgs) => {
      if (
        args.colIndex >= 0 &&
        args.colIndex <= 10 &&
        args.element.classList.contains('e-header-cell')
      ) {
        var text = 'custom header ' + args.colIndex.toString();
        args.element.innerHTML = text;
      }
    }
  });

spreadsheet.appendTo('#spreadsheet');


