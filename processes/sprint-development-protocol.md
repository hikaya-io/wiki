# Sprint and Development Protocol

_UPDATED: 20200228_

## TL;DR
- Two-week sprints
- **Sprint Planning:** every Monday 7 PM EAT
- **Sprint Review:** every Friday 7 PM EAT
  - Join calls using `skype` and follow the `#sprint-planning channel` on slack 
- Our current sprint boards are:
    - `Activity (ACT)` - For Activity
    - `Grid (GRID)` - For secure hosting platform
    - `Maps (MAP`)` - For custom mapping and dashboard portal
    - `Dots (DOT)` - For the analytics pipeline which includes work on the data integration tool (Airflow), data warehousing, and business intelligence tool (Superset)
    - `Circles (CRCL)` - Single Sign-On and Workspace management

## What a typical sprint looks like

### Week 1 Monday

- Go through tickets for upcoming sprint and start sprint (start no later than Monday end of day)

### Week 1 Friday

- Go through `dev testing` lane, review and comment on outstanding issues
- Deploy to `dev` environment

### Week 2 Monday

- Summary of week 1 issues
- Showcase 1-2 PRs and do code review
- Review any added cards

### Week 2 Wednesday

- Final dev testing and deploy to `dev` environment
  - If satisfied, update changes to `staging` branch
- Deploy to `staging` environment and begin QA testing
- If find issues, create a new card and add to this week's sprint

### Week 2 Friday

- Deploy to production
- Sprint showcase (demo new features)
- Sprint retrospective - discuss what went well and what didn't go well, and any improvements


# How we prioritize our backlog

We aim to prioritize our backlog daily. Our sprint boards uses the following issue types to track work:

- **<mark>Bug</mark>**: An issue that stop the user from doing what they intended.
- **<mark>Defect</mark>**: An issue that does not do what it was intended to do.
- **<mark>Task</mark>**: An issue that is an enhancement or new feature.

## Task cards
- In the Backlog, you can add issues to the corresponding sprint (When adding a new issue, be sure to provide a:
  - short description
  - provide an estimated story point (see **Story point estimate** section)
  - use the Epic label to tag which Epic it contributes to
  - If adding a ticket for a new feature, create a separate user story with acceptance criteria (story, given-when-then) and link to the issue

## Active Sprint

- Under the Active Sprint, you can track the progress of your issues across the stages: `To do`, `In Progress`, `Pull Request`, `Dev Testing`, `UAT`, `Done`.
- Every beginning of a sprint, we should have all items in the To-Do lane and move them over as we go. 
- At the end of a sprint, any issues in To-Do or In-Progress need to be moved over to the next sprint (if still relevant) or turned into new issues.
- Definitions:
  - `to-do` -> `in progress`: ticket assignee
  - `in progress` -> `pull request`: ticket assignee
  - `pull request` -> `dev testing`: another engineer other than the assignee takes the ticket for testing
  - `dev testing` -> `uat`: the testing engineer moves ticket to UAT
  - `uat` -> `done`: either QA or project 
  - `Done`: Acceptance criteria will help define what done means

## Story point estimates

- Story points are used to estimate the effort needed for each task.
- We try to avoid using time estimates since tasks usually take longer than we anticipate and a more useful measurement for team capacity is the effort needed and complexity of a task.

| Story Point | Complexity reference  |
|--|--|
| 1 | Changing a label |
| 2 | Making a model change |
| 3 | Implementing CRUD on the UI |
| 5 | Implementing a new model|
| 8 | Introducing complex logic|
| 13| A task that takes a full day |
| 21| A task that takes a few days |

**Note:**
- If you find yourself using the `13` or `21`, you might want to consider breaking down your task in to smaller cards.
- Review tasks should also have story point estimations.
- Estimation depends not only on the task itself, but the skill of the person doing it. The same task can have two different estimations if given to two different people. That’s fine. Use the estimation that matches your ability.
- The first few sprints we use story points, the results will be awful. That’s fine. We’ll get better at estimation over time. Make sure to learn from each sprint and re-calibrate your estimation.


## How we manage our code

**Source control:** Git

**Source code:** All our repositories are stored on [Github](https://github.com/hikaya-io)

**Branches:**

We use 3 main branches in all our repositories :

`Dev` (or `Develop) - All bug fixes, defects, and tasks
`Feature branches` (i.e. ACT-001) - All feature branches must be named like: ACT-001 (where ACT-001 is the issue number on Jira)
`Staging` - This is our QA testing environment
`Master` - Clean code in production environment

- All pull requests should be based off of the Dev branch.
- All branch names should follow the issue number such as: ACT-001. This should be the Jira or Github issue number.

## Commits (Smart Commits)
For us to be able to track and link our issues on Github, we use smart commits (This is for issues tracked in Jira). 

Below is an example of smart commit:
```
ACT-001:- Update Activity UI based on styling guide
ACT-001:- is the issue number on Jira
“Update Activity UI based on styling guide” Is the commit body. This should be as descriptive as possible.
```

## Pull Requests

- All developers MUST submit Pull Requests for any change made on any of the Hikaya Repositories.
- The PR must be reviewed by at least **two developers** other than the author.
- PR Checkpoints:
    -  All set checks passes (We will set the checks for each individual project). 
    - The bug/feature/enhancement in question is fully addressed
    - PRs must follow the predefined template. In the PR body, the following questions should be addressed (This is predefined when creating a new PR):
    - Descriptive Title
    - What is the purpose of the PR?
    - Approach used to address the issue
    - Any prerequisites before/after merging?
    - Review requests
    - Affected Issue(s)
    - Check that the application still functions as before
    - Deployment
    - We will set up a CI/CD process for deployment to all our environments
    - Any developer is allowed to deploy their changes to dev environment. To request access, contact one of the maintainers.

## Burndown chart 

- This chart is useful for keeping track of progress easily. [Here’s an example.](https://help.wrike.com/hc/en-us/community/posts/360001134729-Burn-Down-Graph)
- Add a burndown chart to your dashboard

![https://storage.googleapis.com/slite-api-files-production/files/e6d11a52-4366-49ec-8897-30e4061947b4/null](https://storage.googleapis.com/slite-api-files-production/files/e6d11a52-4366-49ec-8897-30e4061947b4/null)

Source: [<u>Atlassian</u>](https://www.atlassian.com/agile/tutorials/burndown-charts)

- **Story point estimation**: The vertical axis represents the story point estimation.
- **Remaining values**: The red line represents the total amount of work left in the sprint, according to your team's estimates.
- **Guideline**: The grey line shows an approximation of where your team should be, assuming linear progress. If the red line is below this line, congratulations - your team's on track to completing all their work by the end of the sprint. This isn't foolproof though; it's just another piece of information to use while monitoring team progress.

## Role of Maintainers

- Set priorities for each sprint in coordination with the product and technical leads.
- Maintain and ensure consistent and proper use of the sprint board.
- Be a reviewer for many tasks. Clear communication will be done at the beginning of the sprint around which tasks will be reviewed by whom.
- “Coach” other members as they work on their tasks.