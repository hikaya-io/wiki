_Last updated: 20221208_

# Metrics Roadmap 2023 🗺️

Here we present the **Metrics** roadmap for the next 6-12 months. This includes high level goals and features we would like to introduce during this period.

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

## Goals

**Metrics** is an indicator management tool that allows you to define project KPIs then seamlessly link real-time data sets to allow for easy rollup and reporting.

Metrics is being built from the ground up focusing on bridging the gap between how M&E practitioners currently manage their indicator tracking and help them shift to a more digital tool while integrating with efforts being made on the digital data collection front.

## Fundamentals / USP

- Offer a seamless way to bulk import and export existing indicator data allowing users a smooth transition from existing indicator tracking methods.
- Provide a spreadsheet look and feel to make it easy for users to get a familiar overview and support bulk edit actions.
- Help admin users define organization wide standards through data validation and support for cross project reporting and analysis
- Integrate with commonly used third-party data collection tools so that users can link real-time data sets for accurate and automated rollup and reporting.

## Groundwork

- ✅ Feature flag for Metrics app
- 🏃 Monorepo for easier working between FE and BE
- ✅ Bulk view/edit table component
- ✅ Sidebar navigation component for compact viewing on `Project Settings` and `Results Framework`
- ✅ Spreadsheet component with support for a selected data types
- ✅ Spreadsheet component with advanced `sorting`, `column + row re-ordering`, `filtering`, `group by`, and `hide/display column` features
- 🏃 Ability to `expand record` to bulk edit `objectives`, `indicators`, `activities`
- 🔵 Ability to perform `pivot table` functionality on `indicator tracker` and `activity tracker`

## Project + Portfolio

- ✅ Ability to quick create `project(s)` and add additional project details at a later date
- 🏃 Ability to view `Project Settings` where project owners/admins can
  - ✅ Edit project details
  - 🏃 `share project` with a (1) specific member or (2) all members in the workspace
  - 🏃 Ability to create `disaggregation` for the project
  - 🏃🌲 Define a reporting frequency schedule and select indicators that should use the schedule (to create all the scheduled periods when data should be entered)
- ⚫️ Ability for project members to leave a project
- ⚫️ Ability to create a `portfolio` folder and move project(s) into them
- ⚫️🚀 Ability to create a `portfolio indicator` to be used and tracked in every project within the portfolio
- ⚫️🚀 Ability to create a `indicator library` to list and store commonly used indicators across projects This will support sector specific teams in defining standard indicators and retrieve data for reporting

## Configurations

- ✅ Ability for workspace owners/admins to create/read/update/delete related data for indicators:
  - ✅ `Frequency`
  - ✅ `Level`
  - ✅ `Org`
  - ✅ `Org Type`
  - ✅ `Sector`
  - ✅ `Status`
  - ⚫️🚀 `Global disaggregations` - possibly link to `portfolio indicator` feature

## Results Framework

- 🏃 Ability to fill out a `results framework` for each project with the following sections:
  - ✅ `Objectives` - Allow users to set high-level descriptions of what the project wants to achieve
  - 🏃🌲 `Indicators` - Allow users to set specific SMART indicators on how they can measure the project's performance of the `Objectives`.
  - ⚫️🚀 `Activities` - Allow users to set specific activities that the project will carry out. Activities can have indicators to track their progress such as `output` indicators. The `activities` feature will allow users to set and manage the project's implementation schedule through breaking down their work into tasks.
  - ⚫️ `Indicator tracker`
  - ⚫️ `Activity tracker`
- 🏃🌲🔵 Ability to create `disaggregations` for each indicator (to further break down how the data should be entered)
- ⚫️🚀 Ability to create a `calculation library` for common functions based on spreadsheet formulas so power users can create custom formulas for calculating results

## Bulk import / export

- ⚫️🌲🔵 Ability to copy/paste from a spreadsheet into the spreadsheet component
- ⚫️🚀🔵 Ability to import multiple `projects`, `objectives`, `indicators`, and `activities` (in the future all `configuration models`) from a spreadsheet
  - ⚫️🌲 During import, data validation is performed to ensure they match the Metric models
  - ⚫️🚀 During column mapping, with suggestion of what columns are possible to align with based on data type
- ⚫️🚀🔵 Ability to export a spreadsheet template to help organize users existing data and prepare for migration to Metrics.
- ⚫️🌲 Ability to link an imported data set (unstructured) to an indicator (indicator data table) as indicator results
  - ⚫️🌲🔵 Ability to keep the indicator results updated based on changes from an imported data set that received auto-updates (Kobo)
- ⚫️🌲 Ability to make `indicator results` available as a data set to select in map layer creation for visualizing in the `Maps` module.
- ⚫️🚀 Ability to make `activity results` available as a data set to select in map layer creation for visualizing in the `Maps` module.
- ⚫️🚀 Ability to expose an external API / JSON feed that is compatible with third party business intelligence tools (PowerBI, Tableau, Superset)

## Workspace

- ⚫️🌲 Ability to enable `Metrics` app as a workspace owner/admin
- ⚫️ Ability to set specific formats across the entire workspace
  - ✅ Language
  - ⚫️ Number format
  - ⚫️ Current format
  - ⚫️ Decimal display
  - ⚫️ Date format
