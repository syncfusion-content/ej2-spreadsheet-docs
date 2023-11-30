---
layout: post
title: Insert a sheet programmatically and make the inserted sheet as the active sheet in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about insert a sheet programmatically and make the inserted sheet as the active sheet in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Insert a sheet programmatically and make it the active sheet in ##Platform_Name## Spreadsheet control

A sheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data. Using [insertSheet](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#insertsheet) method, you can insert one or more sheets at the desired index. Then, you can make the inserted sheet as active sheet by focusing the start cell of that sheet using the [goTo](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#goto) method.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/insert-sheet-change-active-sheet-cs1" %}
{% endif %}
