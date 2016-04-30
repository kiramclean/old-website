+++
date = "2015-12-05T20:54:08-04:00"
title = "Getting Started with Git"
+++

Git makes keeping track of your progress and fixing mistakes "simple", as they say. I was beyond confused at first but things slowly started to click. If you can wrap your head around what it does and how it works, git can idiot-proof your workflow and set you free to experiment on new features without worrying about ruining your project. Adding and committing files to a git repository is the first thing most people teach, and it was the first thing I learned. This was great until I actually needed to undo some changes and had no idea how. It's really worth taking the time to explore what git can do beyond just keeping a Dropbox-style history of your progress. It's especially useful when you need to go back in time. These are some notes from my attempt to learn how to fix mistakes with git.

## First, understand the difference between git and github

Git is the version control software itself. It's like a video camera rolling behind the scenes as you work that captures every insertion and deletion in every file in your repository and you choose when to save a snapshot for later reference -- these are your commits. Github, on the other hand, is one of many online git repository hosting services. It extends the functionality of git, the software, especially when it comes to collaboration, adding features like pull requests, issue tracking, and discussion forums. This seems like a totally obvious distinction now, but I mention it because I was confused for about a week about why I couldn't make a pull request from the command line. It's because pull requests are not a feature of git, they are something extra that you can do if you use github to host your repositories.

## Basic git workflow

The main thing to understand about git is that there are three "states" files can have in your git workflow. I think of it as there being three different containers they can be in -- the working directory, staging area, or the repository.

| Container | Files Here Are: |
|:---------:|:---------------:|
|Working directory | New and/or modified |
|Staging area     | Marked for committing |
|Repository       | Recorded in history |

- Files in the working directory are new or modified and **not** "staged for commit" -- this means they will not be included in your next snapshot and any changes you made in them will not be recorded in history until you move them up a level to the staging area.

- Files in the staging are ready to commit. When you commit, only changes to files that are in the staging area at that time will be added to your "official" history. Often you will just be committing everything you've worked on, but if your workflow is scattered a bit, or if you are in the middle of working on something and your team needs an update but you don't want to push all of your changes, you can stage individual files by name.

- The last container is the actual repository. This is where your final changes and snapshots are stored. Files in here are safe and sound in the state in which you last committed them.

Once you understand these concepts and get how git works, learning the commands below is simple because you will understand what each one is actually doing. I was confused when I first started learning git because I was just typing things and watching the magic happen. It's important to drill the commands so you can remember them, but it's also important to understand what's going on when you press enter.

## Fixing mistakes with git

To move files between the different states use the commands below. Using `git reset` is a pretty straightforward way to fix your mistakes and it comes with options you can choose depending how messed up your files are. Note that each command requires extra arguments but I left these out of the diagram. Some common ones are listed underneath it.

![Git's containers and how to move files between them](/images/gits_containers.png)
*Git's containers and how to move files between them.*

| Command    | Argument   |
| -------:   |:---------- |
|`git add`   |`.`         |
|            |`file_name.ext` |
|`git commit`|`-m <commit message>`|
|`git reset` |`--soft HEAD~3`|
|`git reset` |`HEAD~2`|

Think of your commits as snapshots in time. If you pass `HEAD~2` as an argument you are selecting the last 2 commits. What happens to those commits depends on what option you specified.

![Your git commits](/images/git_reset.png)
*Your git commits. Read on to see what happens in each case.*

- `git reset --soft` undoes the commits you pass it and puts all of the changes recorded in those commits back in the staging area ready to commit again. This is useful for renaming some changes if you made unnecessary commits and want to combine multiple snapshots into one. I find this simpler than interactively rebasing and trying to "squash" commits. The difference is it's all or nothing -- if you pass `git reset --soft` the past 3 commits (`HEAD~3`), **all** of the changes contained in those commits get sent back to the staging area, unlike rebasing where you can interactively choose which commits get saved, thrown away, or edited.

- `git reset --mixed`, or just `git reset` since `--mixed` is the default option, can be used in a similar way but is used when you need to make changes to the files you committed, not just rename the commits. It undoes the commits and places the changed files back in the working directory to be edited some more if you want to.

- There is also a third option: `git reset --hard`. This is a destructive command, meaning it completely deletes those highlighted commits -- that means all of the changes to the files included in the commits will be **erased**. Be careful with this because it's irreversible and you WILL lose work. The reason it exists is because sometimes that's what you want. If you royally effed up and want to permanently reset your files to an earlier state, this is what `reset --hard` is for. Before you use it make sure you actually want to erase all of your changes because there's no going back. It's like rewinding the clock on your work.

## Be careful about re-writing history

There are a couple of important things to note about resetting. Keep in mind that if you are moving things **out** of the repository (i.e., things that have already been committed), you are undoing past commits and re-writing history. This will create conflicts with remote repos if you've already pushed the changes you are editing, and it can be confusing for collaborators. As a best practice, only reset or rebase commits you haven't pushed remotely yet. If you have to edit history that is already on github, only do it on your own repos and ones where nobody else is counting on your work.

If you are on a team and need to fix some changes in the past but don't want to confuse your collaborators you can use `git revert HEAD~2` (or however many commits you want to revert). Unlike resetting, which erases your commits and lets you completely redo them, reverting creates a new commit that exactly undoes the changes in the commits you pass it. It still undoes your changes, but it leaves a record behind so others can make sense of the commit history.

### Merge conflicts and overwriting a remote history

There's one last important note about re-writing history like this. If you rearrange commits that have already been pushed to github in your local repo, as I mentioned above, you will create conflicts between your local repo and your remote one. Your remote repo will have a different history than your local one, and if you try `git push` you will get an error something like:

`Updates were rejected because the tip of your current branch is behind its remote counterpart. Integrate the remote changes (e.g. 'git pull ...') before pushing again.`

If you do what it says, you will be merging your remote history (which is the OLD history you just overwrote) into your NEW history -- the one you re-wrote with resetting, rebasing, or whatever else, and make a real git mess. If you want to overwrite your remote history with your local history (the one you just re-built), you can use `git push -f <remote> <branch>`. The `-f` is for `--force`. Again, BE CAREFUL doing this, because you will be erasing the history of the remote repo and replacing it with the history you rewrote for your local repo. If this is what you want then go ahead, but make sure nobody else is working on the same repo, or that if they are they know what you're up to, because this will make a mess for anyone else who depends on the history of that repo.

In general, it's better to get into the habit of writing meaningful commit messages that capture a series of related changes to your project, but there are lots of cases where you might make too many or too few commits and want to re-write your history. Git comes with tons of tools beyond just committing and pushing to a remote repository and it's well worth taking some time to explore them.
