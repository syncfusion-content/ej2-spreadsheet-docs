---
layout: post
title: Save and open Spreadsheet data as a Base64 string in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about save and open Spreadsheet data as a Base64 string in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Save and open Spreadsheet data as a Base64 string in ##Platform_Name## Spreadsheet control

In the Spreadsheet component, there is currently no direct option to save and open data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`. 

> You can get the Spreadsheet data as blob in the [saveComplete](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#savecomplete) event when you set the  `needBlobData` as **true** and `isFullPost` as **false** in the [beforeSave](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#beforesave) event.

The following code example shows how to save and open the spreadsheet data as base64 string.

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
