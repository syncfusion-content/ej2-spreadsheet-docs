


import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

class CustomAdaptor extends ODataAdaptor {
    public processResponse(): Object {
        let result: Object[] = [];
        let original: { result: Object[], count: number } = super.processResponse.apply(this, arguments);
        original.result.forEach((item: { SNo: number }, idx: number) => {
            result[idx] = {};
            Object.keys(item).forEach((key: string) => {
                if (['OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry'].indexOf(key) > -1) {
                    result[idx][key] = item[key];
                }
            });
        });
        return { result: result, count: original.count };
    }
}
    //Initialize DataManager
    let data: DataManager = new DataManager({
        //Remote service url
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders',
        adaptor: new CustomAdaptor,
        crossDomain: true
    });

    //Initialize Spreadsheet control
    let spreadsheet: Spreadsheet = new Spreadsheet({
        sheets: [
            {
                rows: [{
                     cells: [{ value: 'Order ID' }, { value: 'Customer Name' }, { value: 'Ship Name' },
                    { value: 'Ship City' }, { value: 'Ship Country' }]
                }],
                ranges: [{ dataSource: data, showFieldAsHeader: false, startCell: 'A2' }],
                columns: [
                    { width: 80 }, { width: 100 }, { width: 82 },
                    { width: 160 }, { width: 110 }, { width: 130 }
                ]
            }]
    });

    //Render the initialized Spreadsheet control
    spreadsheet.appendTo('#spreadsheet');


