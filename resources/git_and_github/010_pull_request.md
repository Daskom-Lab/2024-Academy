# Pull Request

Ever heard about this one? You know when some people from daskom1337 talk about PR, this is what they mean: Pull Request.

A pull request is simple—just remember what the pull command does in Git, and this is basically creating a request so that instead of you pulling others' changes, it's actually the other way around.

It will be much easier to understand this by using it directly, so here are the steps you need to complete the final section of the Git and GitHub Course, yes, you read it correctly:

**By the way, if you don’t understand any of the steps here, you can ask the mentors, your friends, or even your parents (if they are software engineers :D).**

1. By now, you should have a `2024-Academy` directory on your local machine from the forked repository in your account. Good, this is just a sanity check, now move on.

2. Next, go to that directory and create and checkout to a new branch called "development."

3. Edit the `README.md` file, add your name, GitHub link, assistant code, and type "As an academician" with the same format as the mentors (without the website link).

4. Stage the file and commit it with the commit message "add {your name} in README.md."

5. Push all the changes to your newly created branch called "development." You might encounter a warning saying that the branch does not yet exist on the remote target. Just follow the command shown in the warning and you’ll be good to go.

6. After this, go to GitHub and open the Daskom-Lab/2024-Academy repository (remember the Daskom-Lab one, not your own forked repository), then click on the pull request section in the top menu bar, and click the `new pull request` button with the green color.

7. Now you should see something like `base: main <- compare: main`. Here:
   - **Base branch** is the target branch in the Daskom-Lab/2024-Academy repository where you want your changes to be applied. This is usually a main branch like `main`.
   - **Compare branch** is the branch from your forked repository containing the changes you want to merge into the target repository. In this case, it is the "development" branch you just created.

   Change the **Compare branch** by selecting your "development" branch from the dropdown menu.

8. Then you can click on the `Create pull request` button, and follow these steps:
    - For the title, set it as "chore: add {your name} as 2024 Academician."
    - For the description, describe what you just did in the previous commit (use your creativity, don’t ask your friend what to write, think for yourself!).
    - And then on the reviewers part on the right side of the screen, click on the settings button with the gear icon, and add `fakhrip, soedipo, iritasee, adhiiimf, vincentiusantu, Alizaaaja4` as reviewers. Just click on their names until you see a green checkmark beside each one.
    - That’s it, then click the create pull request button or whatever button will create the pull request :v

**NOTE: to be able to add reviewers, you need to ask the mentor to invite you into the Daskom-Lab GitHub Organization first. So, please tag any one of us in the `academy-2024` channel on Discord and let us know your GitHub username.**

9. Done, congratulations on your (probably) first pull request!

Also, congratulations on finishing this course. See you in the next one (web frontend development).
