


import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";

//Initialize action items.
let items: ItemModel[] = [
  {
    text: "Copy"
  },
  {
    text: "Cut"
  },
  {
    text: "Paste"
  }
];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args: MenuEventArgs) => {
    if (args.item.text === 'Copy')
      spreadsheet.copy();
    if (args.item.text === 'Cut')
      spreadsheet.cut();
    if (args.item.text === 'Paste')
      spreadsheet.paste();
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Price Details', ranges: [{ dataSource: defaultData }], columns: columns }],
    enableClipboard: true,
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        },
    // Triggers before the action begins.
    actionBegin: (pasteArgs: any) => {
        const args: { action: string, eventArgs: BeforePasteEventArgs } = { action: pasteArgs.args.eventArgs.requestType,
            eventArgs: pasteArgs.args.eventArgs };
            // To cancel the paste action.
        if (args.action === 'paste') {
            args.eventArgs.cancel = true;
        }
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');



