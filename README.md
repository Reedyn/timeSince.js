timeSince.js
==========

A simple javascript plugin for showing time since {{insert date}}

## Usage

*timeSince.js* uses the class `timesince` to find the element and the data-set attribute timesince (`data-timesince`) containing the date in UNIX Time to get the actual time, it will then replace the innerHTML value of the element with a the time since the specified date in `data-timesince`.

#### WordPress input
```php
<time class="timesince" data-timesince="<?php the_time('U'); ?>"><?php the_time('F j, Y'); ?></time>
```

#### Ghost input
```html
<time class="timesince" data-timesince="{{date format='X'}}">{{date format='D MMM YYYY'}}</time>
```

#### HTML
```html
<time class="timesince" data-timesince="1390822969">27 Januari, 2014</time>
```

### Advanced usage

#### Language

To change the language of the plugin, replace the array `templates` at the beginning of the script with value from your country.

```javascript
var templates = {
        prefix: "",
        future: "", // For dates set in future, just for fun :)
        suffix: " ago.",
        seconds: "Less than a minute",
        minute: "About a minute",
        minutes: "%d minutes",
        hour: "About an hour",
        hours: "About %d hours",
        day: "One day",
        days: "%d days",
        month: "About a month",
        months: "%d months",
        year: "About a year",
        years: "%d years"
    };
```
