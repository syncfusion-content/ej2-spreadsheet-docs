// Initialize the Spreadsheet component.

var columns = [
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

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns }],
    allowScrolling: true,
    scrollSettings: { isFinite: true, enableVirtualization: false }
});

 

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

