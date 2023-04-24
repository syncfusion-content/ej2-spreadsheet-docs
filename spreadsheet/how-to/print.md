---
layout: post
title: Print in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print in ##Platform_Name## Spreadsheet control

You can use the `print` method by importing from ej2-base package. Here, the `Select` event in the dropdown and the `dataBound` event are used to print the single/multiple sheets of data. To print the single/multiple sheets, use the dropdown button and select the `Print` (or) `Print All` option. In the following sample, you can be able to print the single/multiple sheets.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/print-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/print-cs1" %}
{% endif %}