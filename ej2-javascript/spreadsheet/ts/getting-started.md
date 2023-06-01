---
layout: post
title: Getting started with ##Platform_Name## Spreadsheet control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Spreadsheet control

This section explains the steps to create a simple Spreadsheet control using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Dependencies

The following list of dependencies are required to use the Spreadsheet control in your application:

```js
|-- @syncfusion/ej2-spreadsheet
   |-- @syncfusion/ej2-base
   |-- @syncfusion/ej2-dropdowns
   |-- @syncfusion/ej2-navigations
   |-- @syncfusion/ej2-grids

```

## Setup for local development

Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

Spreadsheet packages have to be mapped in the **system.config.js** configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'npm:': './../node_modules/',
        'syncfusion:': './../node_modules/@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-spreadsheet": "syncfusion:ej2-spreadsheet/dist/ej2-spreadsheet.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder and
this can be referenced as below in your `styles.css`.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

> * To learn about individual control CSS, refer to the [Individual control theme files](https://ej2.syncfusion.com/documentation/appearance/theme/#referring-individual-component-theme) section.
> * The `quickstart` seed repository is pre-configured with Essential JS 2 package and common settings (`src/styles/styles.css`, `system.config.js`)
to start all the Essential JS 2 controls.

## Add Spreadsheet control

Add the HTML `div` element with ID attribute as `element` in your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <!--Style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <!--System js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>
<body>
        <!--Element which will render as Spreadsheet-->
        <div id="element"></div>
</body>
</html>
```

Now, import the Spreadsheet control into your `app.ts` to instantiate a spreadsheet and append the spreadsheet instance to the `#element`.

`[src/app/app.ts]`

```ts
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet();

// Render initialized Spreadsheet
spreadsheet.appendTo('#element');
```

## Run the application

The `quickstart` project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

The following example shows a basic Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/spreadsheet/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/spreadsheet/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/spreadsheet/spreadsheet/getting-started-cs1" %}

> You can refer to our [JavaScript Spreadsheet](https://www.syncfusion.com/javascript-ui-controls/js-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Spreadsheet example](https://ej2.syncfusion.com/demos/#/material/spreadsheet/default.html) that shows you how present and manipulate data, including editing, formulas, formatting, importing, and exporting.

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)