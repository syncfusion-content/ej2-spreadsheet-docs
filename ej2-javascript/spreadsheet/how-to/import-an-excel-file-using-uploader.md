---
layout: post
title: Import an excel file using uploader in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about import an excel file using uploader in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Import an excel file using uploader in ##Platform_Name## Spreadsheet control

If you select the file using file uploader then you will get the uploaded file data in the [success](../api/uploader#success) event of file uploader. In this event, you should pass the received file data as argument to the [open](../api/spreadsheet/#open) method of the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/import-using-uploader/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/import-using-uploader/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/import-using-uploader" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/import-using-uploader/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/import-using-uploader/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/import-using-uploader" %}
{% endif %}

