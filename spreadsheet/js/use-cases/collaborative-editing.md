---
layout: post
title: Collaborative editing in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Collaborative editing in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Collaborative editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative editing in ##Platform_Name## Spreadsheet control

The collaborative editing support allows you to work at a spreadsheet collaboratively with other users. Multiple users can access to the the same spreadsheet simultaneously.

> * To use Collaborative editing, inject the `CollaborativeEditing` module in the spreadsheet.

## Dependencies

The following dependent script is required to use the collaborative editing support in spreadsheet.

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/aspnet-signalr/1.1.4/signalr.js"></script>
```

## Client configuration

To broadcast the data for every action is spreadsheet, you need to transfer the data to the server through `send` method in `actionComplete` event and receive the same data by using the `dataReceived` method. In the `dataReceived` method, you need to update the action to the connected clients through `updateAction` method.

The following code example shows `Collaborative Editing` support in the Spreadsheet control.

```javascript

var sheet = [{
                ranges: [{ dataSource: defaultData }],
                columns: [{ width: 130 }, { width: 110 },{ width: 110},
                          { width: 90 }, { width: 90 }, {width: 90}, { width: 90 }, {width: 90}]
            }]
// To Inject CollaborativeEditing module.
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.CollaborativeEditing);

// For signalR Hub connection
var connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', {// localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    actionComplete: function (args) {
       connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
       },
 });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

connection.on('dataReceived', (data) => {
    var model = JSON.parse(data);
    spreadsheet.updateAction({ action: model.action, eventArgs: model.eventArgs }); // update the action to the connected clients
});
connection.start().then(() => {
    console.log('server connected!!!');
}).catch((err) => console.log(err));

```

## Server configuration

To make the communication between the server to the connected clients and from clients to the server, you need to configure the signalR Hubs using the following code.

```javascript

// For signalR Hub connection

var connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', {// localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

```

## Hub configuration

Initially create a AspNetCore project and add the hub file for sending and receiving the data between server and clients.

```javascript
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebApplication.Hubs
{
    public class SpreadsheetHub : Hub
    {
        public async Task BroadcastData(string data)
        {
            await Clients.All.SendAsync("dataReceived", data);
        }
    }
}
```

To configure the SignalR middleware by registering the following service in the `ConfigureServices` method of the `Startup` class.

```javascript
    services.AddSignalR();
```

To set up the SignalR routes by calling MapHub in the `Configure` method of the `Startup` class.

```javascript
    app.UseEndpoints(endpoints =>

    {

        endpoints.MapRazorPages();

        endpoints.MapHub<SpreadsheetHub>("/spreadsheetHub");

    });
```

For hosting the service, you may use the above code snippet or download and run the [local service](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1377017438).

## Prevent the particular action update for collaborative client

Using the `action` argument from the `actionComplete` event, you can prevent the particular action update for collaborative client.

The following code example shows how to prevent collaborative client from updating the `format` action.

```javascript

var sheet = [{
                ranges: [{ dataSource: defaultData }],
                columns: [{ width: 130 }, { width: 110 },{ width: 110},
                          { width: 90 }, { width: 90 }, {width: 90}, { width: 90 }, {width: 90}]
            }]
// To Inject CollaborativeEditing module.
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.CollaborativeEditing);

// For signalR Hub connection
var connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', {// localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    actionComplete: function (args) {
            if (args.action != 'format'){  // prevent the format action
               connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
         }
       },
 });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

connection.on('dataReceived', (data) => {
    var model = JSON.parse(data);
    spreadsheet.updateAction({ action: model.action, eventArgs: model.eventArgs }); // update the action to the connected clients
});
connection.start().then(() => {
    console.log('server connected!!!');
}).catch((err) => console.log(err));

```