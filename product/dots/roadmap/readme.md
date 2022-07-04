_UPDATED: 20210113_

# Dots 2021 (January 2021)

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

## General App

- 🏃 Billing and subscription management
- ⚫️ Stripe integration for payments
- ✅ Feature segregation between public and private repositories

## Data

-

## Maps

# Dots MVP (June 2020)

## Maps

- 🌲✅Ability to walk through a stepper to configure your data layer
  - ✅Ability to support geopoint data (lat/long)
  - ✅Ability to join non-geo data with admin boundaries for heat maps
  - ✅Ability to define columns to display in tooltip
- 🌲✅Ability to organize your data layers into folders (Indicator, Demographics, etc)
- 🏃✅Ability to filter by your data layers
- 🔵Ability to dynamically display the map legend when data layer is displayed
- 🚀⚫️Ability to search data layers to focus the map zoom
- 🌲✅Ability to add multiple map layers

## Data (formerly Tables)

- 🏃✅Ability to import static files from your local machine (CSV, XLSX)
- ✅Ability to import data from Kobo Toolbox via API
- 🌲⚫️Ability define the metadata (data type for each column, assign a column as unique)
- 🚀⚫️Ability to select columns and export data in CSV
- ⚫️Ability to search table to filter rows

## General app

- ✅Ability to register and login (with email confirmation and welcome email sent)
- ✅Ability to invite user via email to join a workspace (with user invite email sent)
- ✅Ability to reset your password (with reset password email sent)
- ✅Ability to create a workspace
- ✅Ability to select your country(s) for map display to default on
- ✅Ability to add admin details in your workspace settings
- ✅Ability to add user details in your user profile settings
- ✅Ability to be able to toggle between your workspaces you are part of
- ✅Ability to switch languages across the app
- 🚀⚫️Ability to define main app labels to allow users to rename

---

# Dots Product Roadmap 2022 🗺️

**Dots** is a modern visualization and reporting tool to help nonprofits connect their data from various sources to visualize and make results reporting easier.

Here we present the **Dots** roadmap for the next 6-12 months. This includes high level goals and features we would like to introduce during this period.

#### Goals

- ✅A single place to display an interactive map with multiple map layers.
- ✅A place to manage users, workspace configurations.
- ✅Ability to import and view data sets in a data table format.
- 🚀Ability to perform simple cleaning operations (merge, append, highlight missing values)
- 🔵Ability to create simple charts based on imported data tables (scorecard, pie, bar charts)
- 🔵Ability to design and save a dashboard based on charts created
- 🔵Ability to draft a narrative report using a markdown editor with placeholders from imported data sets.

#### Engineering

- ✅Setup login/sign up and user authentication.
- 🏃Setup backend endpoint architecture.
- ✅Setup frontend application and how the files will be structured.
- ✅Setup support for internationalization.
- ✅Start work on reusable UI components (see `vue-ui-components` repo).

#### Login/Sign up

- ✅Setup Login/Sign up page.
- ✅Setup emails notifications (confirmation/workspace invitation/welcome).
- ✅Workspace creation.
- 🚀✅Ability to provide each workspace with their personalized url.

#### App navigation

- ✅Setup main navigation and root file.
- ✅Create home page.
- ✅Create user profile page.
- ✅Setup sub-navigation based on feature.

#### Workspace settings

- ✅Create workspace settings page.
- ✅Ability to add a logo.
- ✅Ability to change workspace name and add other information.
- 🌲⚫️Ability to rename key labels in the application.
- 🌲✅Ability to manage users (invite, set user role, deactivate).
- ⚫️Ability to manager user roles.

#### Maps

- 🌲🏃Ability to select your country(s) administrative boundaries and display as a base map layer.
- 🚀⚫️Ability to select your base map style.
- 🌲🔵Ability to dynamically display a map legend based on the map layers selected.
- 🌲✅Ability to toggle on/off all map layers made available in your workspace.
- 🌲✅Ability to import or link to your custom geojson data to display as a map layer.
- 🚀✅Ability to import or link a custom data table (see **Data table**) and join with an admin boundary to display as a map layer.
- 🚀⚫️Ability to create a shareable link (public, select users).

#### Data table

- 🌲✅Ability to import data via `.CSV` and `.xlsx` and store as a data table.
- 🔵⚫️Ability to auto-detect the data type for each attribute and option for user to edit data type.
- 🌲⚫️Ability to select a column as `unique ID`.
- 🌲🏃Ability to view/edit/delete data table and its attributes.
- 🔵⚫️Ability to create calculated placeholders for use in paper reports.
- 🚀⚫️Ability to perform merge/append between two data tables.
- ⚫️Ability to flag a column as sensitive.
- 🚀⚫️Ability to perform conditional formatting on cell values in the data table.
- ⚫️Ability to create calculated columns based on existing columns.
- 🔵⚫️Ability to export a subset of a data table in machine readable formats.

#### Visualize

- 🌲⚫️Ability to create simple charts (scorecard, bar, pie) based on data table.
- 🌲⚫️Ability to add chart to a dashboard.
- 🚀⚫️Ability to re-organize dashboard layout.
- ⚫️Ability to create a shareable link (public, select users).
- ⚫️Ability to download each chart for use (.svg, .png).

#### Paper Reports

- 🌲⚫️Ability to create a paper report using a markdown editor.
- 🚀⚫️Ability to add placeholders of calculated data from the data tables.
- 🌲⚫️Ability to export paper report as `.docx`, `PDF`.

#### Deployment

- ✅Setup Zeit for FE deployments.
- ✅Setup Travis CI for BE deployments.
- ✅Automate CI/CD process.

#### Documentation

- Setup support documentation portal.
- ✅Setup swagger for API documentation.

#### Testing

- ✅Setup cypress

#### UI/UX

- ✅Setup new wireframe templates based on design library.
- 🏃Interviews based on personas and arrange user test groups.
- ✅Explore existing tools and example prototypes.

#### Accessibility

- ✅Setup internationalization.
- 🏃Identify screens that need to be optimized for mobile.

#### Explorations

- 🏃Identify what endpoints we would like to turn into microservices.
- ⚫️Explore what parts of the application should be able to cache offline.
