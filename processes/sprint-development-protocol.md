# Development Process

_UPDATED: 20200317_


## Roadmap 
The team has a 3-6 month high-level product roadmap ([See Activity Roadmap](https://team.hikaya.io/start/activity-roadmap.html)) which defines epics and feature sets to be addressed in this period.

## Iterations
We will work in monthly **iterations** on the items on the roadmap. At the end of each iteration, we want to have a stable release of **Activity** that can be shipped to our users. The work planned during an iteration is captured in the iteration plan (see Iteration Plans). The feature sets of each iteration are highlighted in the release notes.

> **A typical iteration**

> **Week 1**: Reduce debt introduced in the previous iteration, address critical issues uncovered in the previous iteration, and plan the next iteration.

> **Week 2**: Work according to the milestone and minor release to `production`.

> **Week 3+**: Work according to the milestone and
monitoring the minor release and fix critical issues.

> **Final Week**: See `Endgame`. The QA team tests the new features according to a test plan and updates our documentation. Deploy to `production` and showcase new features.

## Planning
Before each Milestone, we will prioritize features to implement and bugs to fix in the upcoming iteration. `Bugs` and `Defects` are assigned to a sprint for the iteration and include steps to reproduce and `current and expected behaviors`. For new features, we create `Tasks` and include `Acceptance Criteria`.

We use the following definitions to track our issues:
- **<mark>Bug</mark>**: An issue that stop the user from doing what they intended.
- **<mark>Defect</mark>**: An issue that does not do what it was intended to do.
- **<mark>Task</mark>**: An issue that is an enhancement or new feature.

#### Bug Report
> **Current behavior**
> A clear and concise description of what the bug is.

> **Expected behavior**
> A clear and concise description of what you expected to happen.

> **To Reproduce**
> Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

>**Screenshots**
> If applicable, add screenshots to help explain your problem.

#### Feature Request

> **Is your feature request related to a problem? Please describe.**
> *A clear and concise description of what the problem is.*

> **Acceptance Criteria**
> A clear and concise description of how to ensure the feature request is met.

```
GIVEN I am a logged in user

AND I navigate to the main page...

AND I click on the button.

THEN I expect this to happen..
```
> **Additional context**
> Add any other context or screenshots about the feature requests.

</br>

> **Labels**
> Labels are used to describe the task card including its priority and complexity.

|Label|Description|
|--|--|
|`Good first issue`|Good for newcomers|
|`bug`|Something isn't working|
|`defect`| Something isn't working right|
|`enhancement`|New feature|
|`dependencies`|Updates dependencies|
|`duplicate`|Issue or pull request exists|
|`help wanted`|Extra attention is required|
|`question`|More information is needed|
|`level 0`|Insignificant task (minimal effort and time needed)|
|`level 1`|Simple issues requiring minimal effort|
|`level 2`|Not so complex, requiring a relatively good amount of effort and time to fix|
|`level 3`|Complex task|
|`level 4`|Very complex task|


> **Story point estimation** 
> Story points are used to estimate the effort needed for each task. We try to avoid using time estimates and a more useful measurement for team capacity is the effort needed and then complexity of a task.

| Story Point | Complexity reference  |
|--|--|
| 1 | Changing a label |
| 2 | Making a model change |
| 3 | Implementing CRUD on the UI |
| 5 | Implementing a new model|
| 8 | Introducing complex logic|
| 13| Research task, building a proof of concept |
| 21| Should be used sparingly|


#### Definition of Done
✅Pull Requests are reviewed and merged to `dev` branch
✅Issue is deployed to `staging` environment and passes user acceptance testing (UAT)
✅Manually execute the Smoke Test on all supported platforms.
✅Release notes updated.
✅Deploy to `production`.

## Milestones
We work toward weekly milestones with the goal to release to `production` every two weeks. We begin a **Milestone** on a Monday and end on the following Monday with a release to `staging`.

Each week we have two calls as a team to discuss our priorities and reflect:
* **Sprint Planning:** every Monday 7 PM EAT
* **Sprint Review:** every Friday 7 PM EAT

> Join calls using `skype` and follow the `#sprint-planning channel` on slack.

#### Task Board
- The active milestone is used to track the progress of our tasks across the following stages: `To do`, `In Progress`, `Pull Request`, `Dev Testing`, `Staging`, `Done`.
- At the beginning of every milestone, we include all items in the `To do` stage and move them over as we go. 
- At the end of a milestone, any issues in `To do` or `In Progress` need to be moved over to the next sprint (if still relevant) or turned into new issues.

#### Triage
Bugs and features will be assigned a sprint, and within a sprint, they will be assigned a priority. The priority dictates the order in which issues should be addressed. An important bug (something that we think is critical for the milestone) is to be addressed before the other bugs.

#### Weekly
Each week we will manage work items, crossing off completed features, and triaging bugs. At the end of the milestone, we will strive for 0 bugs and 0 issues assigned to the milestone. Some bugs and features will then be either postponed to later milestones or moved back to the backlog.

#### End Game
The final week of the iteration is what we call the "end game". During this week we will wrap up any feature work, we will test using a test plan and then we will fix the critical bugs for that milestone.

During the endgame we make a build available on the insiders channel. We will monitor incoming issues from this release, fix any critical bugs that arise, and then produce a final stable release for the monthly iteration.

---

## How we manage our code

**Source control:** Git

**Source code:** All our repositories are stored on [Github](https://github.com/hikaya-io).

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