---
layout: post
title: Get the filtered rows in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about how to get the filtered rows in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Get the filtered rows in ##Platform_Name## Spreadsheet control

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property and [applyFilter](https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

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
