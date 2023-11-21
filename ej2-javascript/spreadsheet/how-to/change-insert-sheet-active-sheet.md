---
layout: post
title: Insert sheet programmatically and switch the inserted sheet as active sheet ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about insert sheet programmatically and switch the inserted sheet as active sheet in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Insert sheet programmatically and switch the inserted sheet as active sheet in ##Platform_Name## Spreadsheet control

You can insert sheet into the spreadsheet using [`insertSheet`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#insertsheet) method. As the new sheet is inserted and populated with the data source using [`goTo`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#goto) method you can switch the inserted sheet as active sheet.

The following code example shows how to set the active sheet when importing an Excel file.

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
