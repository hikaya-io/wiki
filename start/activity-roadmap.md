_UPDATED: 20200315_

# Activity Product Roadmap 🗺️

Here we present the **Activity** roadmap for the next 3-6 months. This includes high level goals and features we would like to introduce during this period.

**Annotation reference:**

|Icon|Description| 
|--|--|
|⚫️|Work not started|
|🏃|Working on|
|✅|Work completed|
|🚀|Stretch goal|
|🌲|High priority|
|🔵|More research required to remove uncertainty|
|🔴|Blocked|

### Activity

#### Goals
 * 🏃Modernize the frontend by introducing `Vue` and replace `jQuery` implementations.
 * 🏃Ability to configure all models in directly in the `Organization Settings`.
 * 🔵Introduce an `Indicator Performance Tracking Table` for easy indicator reporting.
 * 🌲Modernize the application and the general user experience
 * 🏃Increase test code coverage and automated user testing
 * 🏃Rollout automated CI/CD process for `dev` and `staging` environments
 * Introduce API documentation on how to use the `Activity API`.

#### Fundamentals
* 🌲Enable export to CSV functionality from all major models.
* Ensure load times for large records models are kept to a minimum.
* Identify ways to make `user` and `organization` creation easier.
* 🏃Continuously monitor our usage analytics to better understand the user journey.
* 🏃Improve developer contributor experience by streamlining documentation.
* 🚀Ability to track and view historical changes on key fields for every major model.

#### Indicators
* 🏃Ability to define `Target Periods`.
* 🌲Ability to capture `Disaggregations` when adding results.
* 🔵Add quick action modals for selecting `Objectives`, `Levels`, `Sectors`, and `Disaggregations`.

#### Workflow
* Add `Workflow Level 1 Type`.
* 🚀Ability to transition field values from one `Workflow Level 1 Type` to another.
* 🌲Implement `checklist` and `checklist item` models.
* Ability to template `checklists`.
* Ability to use `checklist` in Programs and Projects.

#### Form Library
* 🏃Ability to enroll an `individual` in a training.
* Ability to register an `individual` in a distribution.
* 🏃Ability to register `individuals` in bulk.
* 🌲Ability to see `case` view for individuals.
* 🌲Add `household` model.

#### Components
* 🏃Ability to display country polygon on all maps.
* 🚀Ability to select your country and administrative level to display on all maps.

#### Reports
* Clean up and release MVP for `Program Dashboard`.
* 🔵Implement the first release of the `Indicator Performance Tracking Table` for easy reporting.

#### Settings
* Ability to configure labels for all major models
* Enable `currency`, `date format`, `theme-color`
* 🚀Introduce `usage` page for `Owners` to get a sense of usage analytics across their `Organization`.

#### Deployment
* 🏃Introduce automated CI/CD process with `TravisCI` and `Github Actions` including live deployments after PRs are merged.

#### Documentation
* 🏃Update `Activity` support guides to include articles for all features in the application.
* Introduce API documentation on how to use the `Activity API`.

#### Testing
* 🌲Increase test code coverage (unit tests, integration tests) - (Goal: 95% for Backend and 90% for Frontend).
* 🌲Increased automated user testing coverage for all major features.

#### Engineering
* 🏃Modernize the frontend by introducing `Vue` and replace `jQuery` implementations.
* Change all `views.py` to use `class-based` views instead of `function-based` views.
* Re-implement all Django template views as DRF views using `serializers`.
* Implement server-side pagination for large record models on initial page load.
* 🌲Integrate `MS OneDrive` and `Google Drive` for easy document linking.
* Organize and group import packages together

#### Login/Sign Up
* 🌲Add social authentication support for `Microsoft` and `Google`.
* Simplify the user creation process.
* 🚀Provide a dedicated sub-domain for `Organizations` accounts (I.e. `activity.hikaya.io/<organization-name>`)

#### Explorations
* Evaluate the extent that the application should be `de-coupled` between the Frontend and Backend.
* Explore ways to simplify and removed unused `models` and `fields`.
* 🚀Explore file storage to allow users to upload their own files.
* 🚀🌲Explore best options for exporting template to import bulk records.

