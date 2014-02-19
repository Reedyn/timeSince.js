timeAgo.js
==========

A simple javascript plugin for showing time since {{insert date}}

## Usage

### Input

#### WordPress input
```php
<time class="timesince" datetime="<?php the_time('c'); ?>" data-timesince="<?php the_time('U'); ?>" title="<?php the_time('F j, Y'); ?>"><?php the_time('F j, Y'); ?></time>
```

#### Ghost input
```php
<time class="timesince" datetime="<?php the_time('c'); ?>" data-timesince="<?php the_time('U'); ?>" title="<?php the_time('F j, Y'); ?>"><?php the_time('F j, Y'); ?></time>
```

#### HTML
```html
<time class="timesince" datetime="2014-01-27T12:42:49+01:00" data-timesince="1390822969" title="27 Januari, 2014">27 Januari, 2014</time>
```

### Output

```html
<time class="timesince" datetime="2014-01-27T12:42:49+01:00" data-timesince="1390822969">Mindre än en minut sedan.</time>
```
