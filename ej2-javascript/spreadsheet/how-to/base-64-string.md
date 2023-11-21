---
layout: post
title: Load and Save the spreadsheet data as Base64 string in client side in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about load and save the spreadsheet data as Base64 string in client side in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Load and Save the spreadsheet data as Base64 string in client side in ##Platform_Name## Spreadsheet control

Currently spreadsheet don’t have direct option to save the data as Base64 string. However, this can be achievable by saving the spreadsheet data as `Blob data` and convert that saved blob data to `Base64 string` using `FileReader`. To get the Blob data in [`saveComplete`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#savecomplete) event, you need to set the `needBlobData as true` and `isFullPost as false` in [`beforeSave`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#beforesave) event.

The following code example shows how to load and save the spreadsheet data as Base64 string in client side.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/base-64-string/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/base-64-string/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/base-64-string" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/base-64-string/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/base-64-string/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/base-64-string" %}
{% endif %}
