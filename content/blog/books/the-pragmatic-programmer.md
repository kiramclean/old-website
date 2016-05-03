+++
date = "2016-04-24T23:45:04-04:00"
draft = true
title = "The Pragmatic Programmer"
+++

I'm reading the pragmatic programmer in an attempt to, well, be a pragmatic programmer. These are some notes from my time reading this book

- what do you do if a window is broken? Fix it.
- remember the big picture
- careful not to lose the will to fight BS just because others have
- also careful not to miss trouble coming because it comes so slowly
  - when you make subtle change, is it for good or for bad?

## Good Enough Code

- let your users tell you when the code is good enough
  - get requirements from them whenever possible
- good software today is better than great software next year
- know when to stop -- don't over-engineer your code
- do you use code that is obviously not perfect?
  - basically have 3 choices:
    1. Wait a really long time to smooth out all the bugs
    2. Have complex software and deal with some bugs
    3. Have simpler software and therefore fewer bugs
- design software with modules -- can release one at a time
  - requires that they're independent from each other
- good education habits are the same as good investment habits -- you're investing in yourself
  - invest regularly as a matter of habit
  - diversification is the key to long term success
  - balance between conservative and high-risk investments
  - buy low and sell high
  - review and rebalance regularly
- concrete goals to achieve these things:
  - learn a new language every year
  - read a technical book every quarter
  - read non technical books
  - take classes
  - participate in local groups
  - experiment with new technologies and environments
  - stay current with magazines and tech news
  - read other people's blogs and podcasts about your field

### Communicate

- know what you want to say
  - think beforehand and write down points so you don't forget anything
- know your audience
  - sell to people, make sure they see the up side from their point of view
  - pick a good moment, don't bother people when they're obviously having a rough time
  - know what format they prefer (memo/presentation, long/short, etc)
  - incorporate them in the writing/preparation process
- listen to people
  - and respond to them, even it's just "I'll get back to you later"

## A Pragmatic Approach

- always be in maintenance mode
- don't repeat logic anywhere twice in the code base
- if you feel like duplication is being imposed on you:
  - use a filter or code generator
- avoid inadvertent duplication by choosing the right abstraction
- read your team members' code to avoid duplication
- eliminate effects between unrelated things
- use modules with a single responsibility to compose your app of unrelated parts
- don't couple code or team responsibilities
  - a person should be able to work on their part of the codebase without affecting everyone else
- don't rely on things or their properties that you can't control
- don't impose changes on your existing code when you introduce a new library

### Keeping a clean codebase

- keep everything decoupled
  - don't reveal anything from one class to another
  - if you need to change an object's state, get the object itself to do it for you
- don't use global variables
- don't repeat code anywhere
- unit test everything, it will help you notice coupling and dependencies
  - you shouldn't have to bring in the rest of the app just to make a test pass
- see how many classes you have to change to fix a big (should be small)

#### Questions:

- think about the tools you use -- GUI vs CLI, which is better for its intended purpose? Which is easier to combine with other tools?
  - keeping programs small and modular works better, each user can customize them to their desires
- delegation vs inheritance? design patterns and strategies
- modal vs modeless interaction
- procedural vs object-oriented design

- **design for change and reversibility**

- hide third-party dependencies behind a well-defined, abstract interface
- if something can be added automatically make sure it can be removed automatically too
- think of quantum chemistry -- you don't know what state a system is in until you observe it
  - by observing a system, you in fact determine its behaviour

- user tracer bullets -- try something that solves your problem quickly, visibly, and repeatably, but leaves a trail
  - provides instant feedback, so you can see if the connections between your systems are working
  - provides a framework to build on so developers have a good foundation to build on
  - you can incrementally integrate your platform, adding more and more with time instead of all at once
- they don't always hit the target, they just show you what you're hitting
- different than prototyping because you keep the code you make and build on it, rather than throwing it away
- prototyping is used to expose risk and experiment very cheaply
  - prototypes don't need to be correct, complete, robust, or pretty
  - use them to see if the components are well defined and have the right connections
  - check for coupling and minimize it
  - look for potential duplications, remove it
  - check that every component has access to the data it needs when it needs it
  - prototypes are meant to be thrown away NOT completed

### Domain languages

- consider writing a DSL for domain-specific problems, or at least domain-level abstractions
- don't estimate, say you'll get back to them

## Basic Tools

- always look out for better ways of things you're doing anyway
- don't store anything in binary
  - at least store metadata about your knowledge in plain text if your data sets are too large to store in plain text themselves
- human-readable data outlasts any data that is not human-readable
- think about what's going to happen to your data once the program or language you used to create it is obsolete
- use source control
- know one editor well and use it for everything
- see debugging as problem solving and like it
- look for the source of a bug, don't just fix the symptoms
- reproduce the bug - visualize the data
- write tests to catch the bug in the future
- check elsewhere in the system for the same conditions that produced that bug in the first place
- generate code dynamically when possible to avoid repetition and having to edit code later
  - when multiple languages are used in the same project
  - when DB/app layer need to Communicate

## Be a little paranoid
-  We don't trust anyone, just take it one step further -- don't trust yourself
- rule for inheritance: any subclass should be able to be substituted for its parent class without the user knowing the difference (i.e., you should be able to use the interface of the base class to interact witht he subclass and not know the difference)
- burden of correctness is in the call itself, not in the method being called (write methods assuming you will be passed valid input)
- think about what exactly a method needs and what exactly it is supposed to return before you write it
- catch exceptions and crash as early as possible to avoid running bad code any longer than you have to
- if something can't happen, use assertions to make sure it won't (say, if it does happend, raise an exception)
- exceptions should be for, well, exceptions -- don't use them for anything that could happen regularly
- if your language does not do garbage collection, make sure to deallocate resources
  - should be done by the same method or object that allocated in the first place
- deallocate in the same order as you allocate to avoid orphaned references
- always allocate in the same order if you have to do it multiple times in your code

## Bend or Break

- stay flexible
  - write less code
- oganize code into cells/modules and keep interaction between them limited
- don't reach into an object to get access to some tertiary object's methods (Law of demeter)
- an object should only call methods defined in:
  - itself
  - classes or params that were passed directly to the object
  - objects it created
  - component objects directly held in it
- book on large scale deployments: Large Scale C++ design (Lakos)
- keep details out of your code!
- make your code configurable, don't hard code anything (do not integrate anything)
- program for the general case, add specifics as configuration details
- keep the code base as abstract as possible
- code declaratively (say what you want to do, not how)
- move code out into metadata (configuration) files and make the app itself just an 'engine' that runs according to that data
- design with services - independent concurrent objects behind consistent interfaces
- don't use global variables
- design assuming multiple tasks will be running concurrently
- maintain reversibility by minimizing coupling between views and controllers

