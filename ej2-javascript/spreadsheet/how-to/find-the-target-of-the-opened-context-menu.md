---
layout: post
title: Find the target of the opened context menu in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about how to find the target of the opened context menu in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Find the target of the opened context menu in ##Platform_Name## Spreadsheet control

In the [`contextMenuBeforeOpen`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#contextmenubeforeopen) event, you can check whether the args.event.target element is closer to the particular parent element using its class name.

| Context menu name | Class name |
|-------|---------|
| Column header context menu | .e-colhdr-table |
| Row header context menu | .e-rowhdr-table |
| Cell context menu | .e-sheet-content |
| Footer context menu | .e-toolbar-item |

The following code example shows how to find the target of the opened context menu.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/find-target-context-menu" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/find-target-context-menu" %}
{% endif %}
