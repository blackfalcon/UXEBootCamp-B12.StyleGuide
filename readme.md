http://chriskatie.herokuapp.com/

# UXE - Style Guide

> To me, a style guide is a living document of code, which details all the various elements and coded modules of your site or application. Beyond its use in consolidating the front-end code, it also documents the visual language, such as header styles and color palettes, used to create the site. This way, it’s a one-stop place for the entire team—from product owners and producers to designers and developers—to reference when discussing site changes and iterations. Several companies have even put their guides online; Starbucks is the most well known of the bunch, but others exist.

[ref](http://alistapart.com/article/creating-style-guides?utm_source=heydesigner&utm_medium=social) 



## Submitting assignments

Submitting assignments for this course will require leveraging some of the more advanced features of Github. These features will not only improve your knowledge of Git and Github, but also provide practice exercises for working on a distributed project with a large team. 

## How to submit an assignment

In order to submit assignments, please use the following steps

1. [Fork this repo][1] so that you have a working version
1. [Clone the forked repo][2] to your local computer
1. Create a folder named with your name and the class designator, example `dale-sande-b12`
1. Once completed with your assignment, commit code to the master branch and push to Github `git push origin master`
1. From __your fork__ of the project, initiate a pull request to the parent repo

## Assignment review

When a pull request is initiated, I will be notified of the update and comment on the submitted assignment via Github tools. 

## Keeping your local repo up to date
Your local repo will be an independent version of the original repo from the moment you fork the repo. In order to keep your local repo up to date with the original repo, you need to do what is called an [upstream pull][3].

To manage an upstream pull, I suggest updating your `.bash_profile` and your `.gitconfig` file with easy to remember aliases. 

### .bash_profile

In your `.bash_profile` add the following alias

```
alias upstream="git remote add upstream \$@"
```

From the command line you simply need to refer to the alias and add the path to the upstream repo as shown in the following example.

```
$ upstream https://github.com/blackfalcon/unicorn-class-css-section.git
```

Once the upstream repo is configured for your local repo, this never needs to be reset again, unless you delete your local repo. 

### .gitconfig
In your `.gitconfig` add the following alias

```
pu = !"git fetch origin -v; git fetch upstream -v; git merge upstream/master"
```

From the command line, within the project repo, enter the following command to pull latest code from the upstream master.

```
git pu 
```




[1]:https://help.github.com/articles/fork-a-repo
[2]:https://help.github.com/articles/fork-a-repo#step-2-clone-your-fork
[3]:https://help.github.com/articles/syncing-a-fork
