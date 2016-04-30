+++
date = "2016-04-28T23:55:06-04:00"
draft = true
title = "Setting Up Sass Source Maps With Gulp"
+++

Sass is awesome, hugo is awesome, and gulp is awesome.

## Add source maps

Get sourcemaps for gulp

```bash
npm install --save-dev gulp-sourcemaps
```

Then set up the gulp task

- include sourcemaps at the top of your source maps
- add this to your `gulp.task('sass')`

    .pipe(sourcemaps.init())
    // error logging
    .pipe(sourcemaps.write())


- enable source maps in your browser (for chrome, this is in settings)
- add a file to your workspace (restart developer tools if it seems like you're having issues with files or folders showing up)
- chrome is really smart and once you map one file it will most likely find the rest of them automatically

While we're at it, add autoprefixing to your css. There is no reason not to do this, especially once you already have a custom processing pipeling set up with gulp. This is just one more filter for your code to pass through. Add it with

```bash
npm install --save-dev gulp-autoprefixer
```

Add it to your gulpfile:
```bash
// at the top of your gulpfile.js with all the other requires
var autoprefixer = require('gulp-autoprefixer');

// after sourcemaps, but before output
.pipe(autoprefixer())
```

By default autoprefixer supports:
- browsers with over 1% marketshare
- last 2 versions of all browsers
- Firefox ESR
- Opera 12.1

You can set it up to use a custom configuration by passing it an array of options


** NOTE: this might cause problems depending on where in your gulpfile you add the autoprefixing -- I added it AFTER the sourec maps which caused `CssSyntaxError .... Missed Semicolon`. If this happens to you try rearranging the order of your pipes and recompiling.

