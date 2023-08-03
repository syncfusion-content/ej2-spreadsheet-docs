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

## Dependencies

The following list of dependencies are required to use the collaborative editing support in spreadsheet.

```js
|-- @aspnet/signalr
   |-- eventsource
   |-- request
   |-- ws

```

> * Run the command `npm i @aspnet/signalr` to install `@aspnet/signalr` packages in your application.

## Client configuration

To broadcast the data for every action in the spreadsheet, you need to transfer the data to the server through `send` method in `actionComplete` event and receive the same data by using the `dataReceived` method. In the `dataReceived` method, you need to update the action to the connected clients through `updateAction` method.

The following code example shows `Collaborative Editing` support in the Spreadsheet control.

```ts

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import * as signalR from '@aspnet/signalr';
import { data } from './datasource.ts';

// For signalR Hub connection
const connection: signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', { // localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{
                ranges: [{ dataSource: data }],
               columns: [{ width: 130 }, { width: 110 },{ width: 110},
                          { width: 90 }, { width: 90 }, {width: 90}, { width: 90 }, {width: 90}]
            }],
  actionComplete: (args) => {
       connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
    },
});

spreadsheet.appendTo('#spreadsheet');

connection.on('dataReceived', (data: string) => {
   let model: CollaborativeEditArgs = JSON.parse(data) as CollaborativeEditArgs;
   spreadsheet.updateAction(model); // update the action to the connected clients
});
connection.start().then(() => { // to start the server
    console.log('server connected!!!');
}).catch(err => console.log(err));

```

## Server configuration

To make the communication between the server to the connected clients and from clients to the server, you need to configure the signalR Hubs using the following code.

```ts
import * as signalR from '@aspnet/signalr';

// For signalR Hub connection

const connection: signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', { // localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

```

## Hub configuration

Initially create a AspNetCore project and add the hub file for sending and receiving the data between server and clients.

```ts
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebApplication.Hubs
{
    public class SpreadsheetHub : Hub
    {
        public async Task BroadcastData(string data)
        {
            await Clients.Others.SendAsync("dataReceived", data);
        }
    }
}
```

To configure the SignalR middleware by registering the following service in the `ConfigureServices` method of the `Startup` class.

```ts
    services.AddSignalR(e =>
    {
        e.MaximumReceiveMessageSize = int.MaxValue; // Option to increase message size for inserting image feature. By default, SignalR send messages up to 32 KB.
    });
```

To set up the SignalR routes by calling MapHub in the `Configure` method of the `Startup` class.

```ts
    app.UseEndpoints(endpoints =>

    {

        endpoints.MapRazorPages();

        endpoints.MapHub<SpreadsheetHub>("/hubs/spreadsheethub");

    });
```

For hosting the service, you may use the above code snippet or download and run the [local service](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1327152095).

## Prevent the particular action update for collaborative client

Using the `action` argument from the `actionComplete` event, you can prevent the particular action update for collaborative client.

The following code example shows how to prevent collaborative client from updating the `format` action.

```ts

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import * as signalR from '@aspnet/signalr';
import { data } from './datasource.ts';

// For signalR Hub connection
const connection: signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', { // localhost from AspNetCore service
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{
                ranges: [{ dataSource: data }],
                columns: [{ width: 130 }, { width: 110 },{ width: 110},
                          { width: 90 }, { width: 90 }, {width: 90}, { width: 90 }, {width: 90}]
            }],
  actionComplete: (args) => {
      if (args.action != 'format') {  // prevent the format action
         connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
      }
    },
});

spreadsheet.appendTo('#spreadsheet');

 connection.on('dataReceived', (data: string) => {
    let model: CollaborativeEditArgs = JSON.parse(data) as CollaborativeEditArgs;
    spreadsheet.updateAction(model); // update the action to the connected clients
 });
    connection.start().then(() => { // to start the server
        console.log('server connected!!!');
    }).catch(err => console.log(err));

```

## Perform import action for collaborative clients

Using the `action` argument from the [`actionComplete`](../api/spreadsheet/#actioncomplete) event, you can identity whether the import action is performed or not. If the action is `import`, then you need to send the `response data` to the server and also update the same to the collaborative clients.

The following code example shows how to perform the import functionality for collaborative clients.

```ts
import { Spreadsheet, CollaborativeEditArgs } from '@syncfusion/ej2-spreadsheet';
import * as signalR from '@microsoft/signalr';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

// For signalR Hub connection.
const connection: signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
}).build();

let spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    actionComplete: (args: {action: string, response: any}) => {
        if (args.action === 'import') {
            // Send the action data to the server in args.response at the time of importing an excel file.
            connection.send("BroadcastData", JSON.stringify(args.response.data));
        }
        else {
            // Send the action data to the server for other than import actions.
            connection.send("BroadcastData", JSON.stringify(args));
        }
    },
});

spreadsheet.appendTo('#spreadsheet');

connection.on('dataReceived', (data: string) => {
    const model: CollaborativeEditArgs = JSON.parse(
        data
    ) as CollaborativeEditArgs;

    // Condition to check whether action performed is import.
    if (isNullOrUndefined(model['action'])) {
        // Load the imported excel file data as JSON to the connected clients.
        const jsonData: object = { Workbook: model };
        spreadsheet.openFromJson({ file: jsonData });
    }
    else {
        // Update the action details to the connected clients.
        spreadsheet.updateAction(model);
    }
});
connection
    .start()
    .then(() => {
        console.log('server connected!!!');
    })
    .catch(err => console.log(err));
```

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)