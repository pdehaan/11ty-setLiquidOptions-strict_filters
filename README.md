# 11ty-setLiquidOptions-strict_filters

Throwing errors for missing liquidjs filters.

- eleventy: 0.10.0
- liquidjs: 6.4.3

By default, **liquidjs** does not throw errors when using an undefined filter. Consider the following example:

```liquid
<h1>{{ "hello" | world }}</h1>
```

Running <kbd>npx eleventy</kbd> will generate the following output:

```html
<h1>hello</h1>
```

If you want **liquidjs** to throw an error for undefined filters, you can set the `strict_filters` option in your .eleventy.js config file using the `setLiquidOptions()` method.

> Enable strict filter existence. If set to `false`, undefined filters will be rendered as empty string. Otherwise, undefined filters will cause an exception. Defaults to `false`.
>
> &mdash; via [**liquidjs** `LiquidOptions` documentation](https://harttle.land/liquidjs/interfaces/_liquid_options_.liquidoptions.html#strictfilters).

By adding to the following to your .eleventy.js config file, Eleventy will throw an error when it encounters a missing filter:

```js
eleventyConfig.setLiquidOptions({
  strict_filters: true
});
```

Now, when running <kbd>npx eleventy</kbd> you'll get the following error:

```sh
npx eleventy

Problem writing Eleventy templates: (more in DEBUG output)
> Having trouble rendering liquid template ./src/index.liquid

`TemplateContentRenderError` was thrown
> Having trouble compiling template ./src/index.liquid

`TemplateContentCompileError` was thrown
> undefined filter: world, file:./src/index.liquid, line:1

`ParseError` was thrown
> undefined filter: world

`TypeError` was thrown:
    TypeError: undefined filter: world
```
