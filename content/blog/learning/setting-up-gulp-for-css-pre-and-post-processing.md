+++
date = "2016-04-27T20:56:34-04:00"
title = "Setting Up Gulp for CSS Pre- and Post- Processing"
+++

I recently rebuilt this blog with Hugo, an awesome super fast static site builder made with Go. It's a super lean static page generator that does a great job of organizing your content into easy to manage sections.

The downside is that it's BYO-front end. Coming from the world of Rails and other frameworks built with Ruby, this was new for me. With Rails you just put your code in the folders that come with the app and it magically turns into one long CSS or JS file ready to deploy. If you want to use Sass or Scss instead, there's a gem for that and using it is as simple as adding one line to your Gemfile. Then your app is ready to use Sass.

Hugo builds static sites, so you can only include vanilla CSS or JS. There are no preprocessors in the Hugo build process, so if you want to use Sass or Coffeescript, or even if you just want to spread out your front-end code over a bunch of files, you need to deal with turning into a single static file yourself.

I want to set up Gulp to deal with my assets. I want to write Sass spread out across many files and then run it through an auto-prefixing post-processor so I won't have to worry about vendor prefixes. I also want to write Coffeescript in a bunch of little files and end up with a long JS file. I would also be great if I could get these files automatiaclly dumped into the `static` folder in my hugo project.

I overthought this for a few hours and came across a dozen or so different workflows for dealing with this kind of thing. An awesome front end developer I know convinced me to settle with Gulp, and it seems to be a common favourite, so that's what I'm going with. To learn how I set up Gulp to deal with my Sass and Coffeescript, read on. First of all, [get gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). They have great instructions in the readme, but basically just run

```
npm install --global gulp-cli
```

Then, install gulp in your project directory. If you're starting a new project from scratch, first run npm init in your project folder. This will just add a `package.json` file for you with some info about the project.

{{< highlight bash >}}
// in your project root directory
npm install gulp --save-dev
{{< /highlight >}}

We'll also need gulp-sass to handle our sass.

{{< highlight bash >}}
// still in your project root directory
npm install gulp-sass --save-dev
{{< /highlight >}}

>If you don't have node (if you get somthing like `command not found: npm`, get that too with `brew install node`, if you're on OSX.

Next you have to configure gulp. This is the part that sounds like a nightmare for people who aren't used to front-end work, but it's actually really simple.

First, create a `gulpfile.js` in your project root directory. Add these two lines to initialize gulp and gulp-sass:
{{< highlight javascript >}}
// in ./gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
{{< /highlight >}}

Next, we need to tell gulp where to find the sass files and where to put them.








