# How to setup dev environment
1. Install npm
2. Install [VScode](https://code.visualstudio.com/) or [webstorm](https://www.jetbrains.com/webstorm/) 
3. install [git](https://git-scm.com/downloads) and sign in (Using your editor or GH CLI or Windows Credentials for GIT)

## First time project setup
1. Request collabaration access https://github.com/EvilGeniuse5/Library
2. `git clone https://github.com/EvilGeniuse5/Library.git`
3. Go inside the project folder and open it with your editor/IDE
4. Open the terminal (VSCode : CTRL + J)
5. RUN `npm install` or `npm i`

### If you're using VSCode
1. Install visual studio code extentions - Bootstrap, React-Bootstrap, Sass
2. Restart visual studio code two times

## Run the project
- Previewing the site with hot reloading
  1. RUN `npm run start`
  2. Open the output url in browser
  3. The server will apply changes automatically and restart every time you make changes to the code

# Rules
1. Always try to use Bootstrap classes and React-Bootstrap components.
2. Use best practices as we learned in the 1st week tasks.
3. Use meaningful commit messages.
4. Always use the pull request template with detailed changes.

# Contribute
1. Make sure your branch is `dev` and sync with the remote branch.
2. Create a new branch from the `dev` branch before start working on a new issue
3. Get the `git checkout -branch-name` command from the JIRA kanban board
4. Publish your branch
5. When all the commits are ready for publishing, Create a Pull Request to the `dev` branch
6. Make sure you are pulling 'from' your branch and pulling 'into' `dev` or immediate upstream branch
7. Make sure to use the PULL request template with title and the description with your changes. (detailed)
8. Review changes and Merge

## Commit Message Types
### Commit message template
`<type>[optional scope]:<description>` <br>
#### Example <br>
`style: update navbar hamburger drop down styles`
  <br>
1. feat - Features - A new feature
2. fix - Bug Fixes - A bug Fix
3. docs - Documentation - Documentation only changes
4. style - Styles - Changes that do not affect the meaning of the code
5. refactor - Code Refactoring - A code change that neither fixes a bug nor adds a feature
6. perf - Performance, Improvements - A code change that improves performance
7. test - Tests - Addming missing tests or correcting existing tests
8. build - Builds - Changes that affect the build system or external dependencies 
9. ci - Continuous Intergrations - Changes to our CI configuration files ans scripts 
10. chore - Chores Other changes that don't modify src or test files
11. revert - Reverts Reverts a previous commit




You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
