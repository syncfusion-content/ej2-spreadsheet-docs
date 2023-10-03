---
layout: post
title: Import an excel document using file uploader in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about importing an excel document using file uploader in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Import an excel document using file uploader in ##Platform_Name## Spreadsheet control

If you explore your machine to select and upload an excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](../api/uploader/#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](../api/spreadsheet/#open) method to see the appropriate output.

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

