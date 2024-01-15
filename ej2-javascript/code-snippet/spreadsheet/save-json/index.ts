import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  created: function () {
    fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx') // fetch the remote url
    .then((response) => {
      response.blob().then((fileBlob) => {
        // convert the excel file to blob
        let file = new File([fileBlob], 'Sample.xlsx'); //convert the blob into file
        spreadsheet.open({ file: file }); // open the file into Spreadsheet
      });
    });
  },
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById('savejson')!.onclick = () => {
  // Save the spreadsheet data as JSON.
  spreadsheet.saveAsJson().then((Json) => {
    console.log(JSON.stringify(Json));
    alert('JSON saved successfully');
  });
};