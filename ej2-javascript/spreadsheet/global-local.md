---
layout: post
title: Global local in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Global local in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Global local 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Global local in ##Platform_Name## Spreadsheet control

## Localization

The [Localization](../common/localization) library allows you to localize the default text content of the Spreadsheet. The Spreadsheet has static text on some features (cell formatting, Merge, Data validation, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the
[locale](https://ej2.syncfusion.com/documentation/api/spreadsheet/#locale) value and translation object. 

> You can refer to the locale keywords and their text in this [link](https://github.com/syncfusion/ej2-locale/) for different cultures.

### Loading translations

Other than the default English culture, if you need it, you can localize the default text of the Spreadsheet through the [load](../common/internationalization/#load) method of the [L10n](../common/internationalization) class and set the culture by using the [locale](../api/spreadsheet/#locale) property.

The following example demonstrates the Spreadsheet in `French` culture. In the below sample we have translated the ribbon tab names and Home tab content (clipboard, cell style).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/global/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/locale-cs1/index.html %}
{% endhighlight %}
{% highlight json tabtitle="local-text.json" %}
{% include code-snippet/spreadsheet/global/locale-cs1/local-text.json %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/global/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/global/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/locale-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="locale-text.js" %}
{% include code-snippet/spreadsheet/global/locale-cs1/locale-text.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/global/locale-cs1" %}
{% endif %}

## Internationalization

The Internationalization library is used to globalize number, date, and time values in the spreadsheet component. To achieve this, you need to install the CLDR data NPM packages and load the dependent JSON files by using the `loadCldr` function. To set the default culture and currency code, you can use the `setCulture` and `setCurrencyCode` methods.

The following example demonstrates the Spreadsheet in French [ `fr-CH`] culture. In the below sample we have globalized the Date(Date column), Time(Time column), and Currency(Amount column) formats.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/index.html %}
{% endhighlight %}
{% highlight json tabtitle="local-text.json" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/local-text.json %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/global/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/index.html %}
{% endhighlight %}
{% endhighlight %}
{% highlight js tabtitle="locale-text.js" %}
{% include code-snippet/spreadsheet/global/internationalization-cs1/locale-text.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/global/internationalization-cs1" %}
{% endif %}

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the Spreadsheet component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL Spreadsheet, set the [enableRtl](../api/spreadsheet/#enablertl) to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight json tabtitle="local-text.json" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/local-text.json %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/global/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="locale-text.js" %}
{% include code-snippet/spreadsheet/global/rtl-cs1/locale-text.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/global/rtl-cs1" %}
{% endif %}

## See Also

* [Localization](../common/localization)
