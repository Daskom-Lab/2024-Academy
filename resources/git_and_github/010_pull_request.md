# Pull Request
Ever heard about this one ? you know when some of daskom1337 people are talking about PR, this is what they meant, its Pull Request.

Pull request is easy, just remember what pull command does in git, and then this one is basically creating a request such that instead of you who pull other's changes, its actually the other way around.

It would be much easier to understand this by using it directly, so these are the things that you have to do to complete the last section of Git and Github Course, yes you read it correctly:

**By the way, if you dont understand each of the steps here, you can ask the mentors, your friends, or even your parents (if they are software engineers :D).**

1. By now, you should have had a 2024-Academy directory in your local from the forked repository in your account, good, this is just sanity check, now move on

2. Next, go to that directory and then create and checkout to a new branch called "development"

3. Edit the README.md file, put your name, github link, assistant code, and type "As an academician" with the same format as the mentors (without website link)

4. Stage the file and commit it using the commit message of "add {your name} in README.md"

5. Push all the changes to your newly created branch called "development", you might be facing with a warning that says the branch is not existed yet in the remote target, just follow the command shown on the warning and you will be good to go.

6. After this, go to github and open the Daskom-Lab/2024-Academy repository (remember the Daskom-Lab one, not your own forked repository), and then click on the pull request section in the top menu bar, and click `new pull request` button with green color on it.

7. Now you should be able to see that there is `base: main <- compare: main` thing there, so the ones on the left side of the arrow is the target branch in which you want your changes be placed on the Daskom-Lab/2024-Academy repository, meanwhile the ones on the right side of the arrow is the one you want to change to the "development" branch of your own forked repository, change it by clicking on the dropdown button there.

8. And then you can click on the `Create pull request` button, and follow these steps:
     - for title, set it as "chore: add {your name} as 2024 Academician"
     - for description, describe what you just did in the previous commit you have done before (use your creativity, dont ask your friend what to write, think!)
     - and then on the reviewers part on the right side of the screen, click on the setting button with the gear icon on it, and put `fakhrip, soedipo, iritasee, adhiiimf, vincentiusantu, Alizaaaja4` as reviewer, just click it and until you see green check besides each name
     - that's it, then click the create pull request button or whatever button that will create the pull request :v

**NOTE: to be able for you to add reviewer there, you need to ask to the mentor to invite yourself into the Daskom-Lab Github Organization first, so please tag any one of us in the prochef academy channel in discord and tell us your github account username.**

9. Done, congratulations on your (probably) first ever pull request!

Also congratulations for finishing this course, see you on the next one (web frontend development).
