---
layout: post
title: Get the filtered row details in the ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about how to get the filtered row details in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Get the filtered row details in ##Platform_Name## Spreadsheet component

Filtering helps you to view specific rows in the spreadsheet by hiding the other rows. You can use the [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property to enable or disable filtering functionality. Using the [applyFilter](https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter) method you can be able to filter the data present. With the help of isFiltered property you can be able to identify the filtered row.

The following code example shows how to get the filtered row details.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/filter-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs2" %}
{% endif %}