---
layout: post
title: Set an imported excel file's active sheet in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about set an imported excel file's active sheet in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change the active sheet in the imported Excel file 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Set an imported excel file's active sheet in ##Platform_Name## Spreadsheet control

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/change-active-sheet-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/change-active-sheet-cs1" %}
{% endif %}
