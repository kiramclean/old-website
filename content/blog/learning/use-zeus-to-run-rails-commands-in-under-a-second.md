+++
date = "2016-05-28T11:19:34-04:00"
draft = true
title = "Use Zeus To Run Rails Commands In Under a Second"
+++

I love Rails but it can be slow. Usually it's a not a problem and I just leave a console and server running in extra terminal windows, but there isn't really a workaround like this for running tests or rake tasks. You might not notice a lag on a powerful machine, but on an old MacBook Air like I use at work it can take over 15 seconds to load all the files that are necessary for a test or rake task run in a decent sized Rails project. That's too long to wait if you want to integrate testing into your normal workflow, as you might if you're doing test-driven development. 15 seconds might not sound like a lot, but it breaks my concentration and flow when I'm running focused tests. To fix this problem I highly recommend using zeus, a gem that pre-loads your rails app and keeps it running so that your commands run in less than a second.

## Install and Run Zeus

To get started, install zeus globally. Not in your project's Gemfile - it runs outside of your rails app.

```ruby
gem install zeus
```

If you use rspec, then there are a couple of other small settings you should tweak to make sure everything runs smoothly. First, force your rails

you're all set. To use zeus, first start it in a terminal window with

```ruby
zeus start
```

And then prepend your commands with `zeus`. So `rake db:migrate` becomes `zeus rake db:migrate`, and so on. I added aliases for commands like these so typing an extra `zeus` doesn't get in the way. Think about adding `alias zrake='zeus rake'` or something similar to save yourself the hassle.

## Custom Configuration

If you want some control over how zeus runs and which commands it takes you can run `zeus init` in your project directory, which will generate two config files `zeus.json` and `custom_plans.rb`. You can change the aliases and commands zeus uses by customizing `zeus.json`.


## Run Cucumber Tests with Zeus Too

If you use cucumber you can set up your cucumber tests to use zeus as well with a little custom configuration.



To use zeus with cucumber takes some additional configuration. This is the setup, from [this helpful example in the zeus repo](https://github.com/burke/zeus/blob/master/examples/custom_plan/cucumber_plan.rb).


To set up zeus for your project, first install it with `gem install zeus`. Note you don't need it in your gemfile, it runs outside of your Rails app.

If you just use rspec, you're good to go. Run `zeus start` in a terminal window and you'll see all the commands

## Debugging

If you run into issues, like zeus not starting or not running your commands as expected, it can be tricky to figure out what went wrong. As much as I love zeus, some of the error messages can be less than helpful when you're trying to troubleshoot. If zeus booted your app but failed to load all of the commands, you're in a pretty good spot. Follow the crash message's advice and run a command to see the backtrace. Often this will give you some useful information about what went wrong. If you just get a zeus error message, like `exit status 1`, after it fails to start, it can be harder to pinpoint what went wrong. This happens to me all the time, so here are few different things that have worked for me:

- First, make sure evertyhing actually is working. Try running `rails s`, `rails c`, `rake something` or some other command that zeus failed to load and see if they're even working at all.
- Triple check your `zeus.json` and `custom_plan.rb` for syntax errors.
- Make sure you have either both `zeus.json` and `custom_plan.rb` or neither of them in your project directory. Having only one without the other can cause problems.
-

