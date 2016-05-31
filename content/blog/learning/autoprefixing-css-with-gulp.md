+++
date = "2016-05-31T09:47:32-04:00"
draft = true
title = "autoprefixing css with gulp"

+++




-------------------------------------------
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



--------------------------------------------------------------------------------------------

## Autoprefixing

I mentioned auto-prefixing above. Prefixing CSS rules is something I don't do by hand, for one because the prefixes change and it's a pain to update them manually, but also because it makes my stylesheets very ugly. Since we're on a roll, I'll show you how to add auto-prefixing to your gulp sass workflow. Start by getting `gulp-autoprefixer`, the same way we got the other packages.

```bash
# in your project root directory, where you package.json is:
npm install --save-dev gulp-autoprefixer
```

Then, go ahead and hook inject auto-prefixing into your sass processing pipeline:

```js
// in gulpfile.js
// require gulp-autoprefixer at the top of your `gulpfile` along with the other packages we're using
var autoprefixer = require('gulp-autoprefixer');

// run your code through the auto-prefixer after it is compiled but before it is output to its final destination
.pipe(autoprefixer(optionalSupportTheseBrowsers))
```

Autoprefixer uses [Browserslist](https://github.com/ai/browserslist) to determine which browsers to support. By default, those are:

  - browsers with over 1% marketshare
  - last 2 versions of all browsers
  - Firefox ESR

If that's fine with you, just leave the options in autoprefixer blank (delete `optionalSupportTheseBrowsers` above), but if you want to be more specific than that then define your options like this somewhere in your gulpfile:

```js
optionalSupportTheseBrowsers = {
  browsers: ['>5%', 'last 3 versions', 'Firefox ESR']
};
```

You can set it up to use a custom configuration by passing it an array of options


** NOTE: this might cause problems depending on where in your gulpfile you add the autoprefixing -- I added it AFTER the sourec maps which caused `CssSyntaxError .... Missed Semicolon`. If this happens to you try rearranging the order of your pipes and recompiling.


