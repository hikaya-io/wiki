# Activity Product Plan

# Product Requirements Document

| **Target release**  | v0.4.0                  |
| ------------------- | ----------------------- |
| **Title**           | Activity                |
| **Last Updated**    | 28-Feb-2020             |
| **Document status** | Draft                   |
| **Document owner**  | Andrew Pham# **Goals** |

Provide a free, hosted version of Activity that allows humanitarian organizations their own workspace to manage their projects and indicators while at the same time enabling them to design standard data collection templates to capture field data. Once data is collected, summary data can be used to report against related indicators and pre-defined reports can be used for monitoring progress.

## **User Requirements**

| **As a(n)...** | **I...be ** | **able to**                                                 | **so that...**                                                                                        |
| -------------- | ----------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Owner          | Must        | Set up and personalize my own workspace                     | I can configure my workspace to my organization’s needs                                               |
| Editor         | Must        | Create private projects                                     | I can manage my indicators and related data collection forms                                          |
| Editor         | Must        | Define a set of indicators based on the project logic       | I can measure the impact of my project                                                                |
| Editor         | Should      | Design a custom form using a simple form builder            | I can create a monitoring form that collects data to report summary data against  a related indicator |
| Editor         | Should      | Save a custom form as a template                            | I can reuse and standardize a group of questions in other project forms                               |
| Editor         | Should      | Submit data through publish custom forms                    | I can collect data in a single place and report against related indicators                            |
| Viewer         | Must        | View pre-defined reports that show progress against targets | I can use these reports for real time monitoring of my project’s progression.                         |
| Viewer         | Must        | Export data as a Google Sheet                               | I can perform further analysis and use in third-party dashboard tools                                 |
| Editor         | Should      | Set automated approvals                                     | It can notify a user that they need to access the system to approve an action                         |
| Editor         | Could       | Save indicators as standard                                 | They can be shared within their organization and reused for future projects## **Assumptions**         |

### Users

- When users define indicators, they also need to define forms that allow for the appropriate collection of data that can report against their defined indicators. Without this step, data becomes nonstandard and requires additional manual processing in order to report against related indicators.
- After creating a project, in order to define indicators, a user will need to group indicators into sections in order to show how these indicator align with the project’s logic. The grouping needs the ability to add a text field for a title (I.e. Objective 1: Increased farmer income). These are similar to the objective field in currently used in the Activity app.

### Technical

- Individuals can set access control by user, group, workflow level
- Integrates with popular single sign-on protocols (Google, O365) for easy registration and sign-on
- For the form builder, evaluate if it is possible to use the ![<u>Kobo form builder</u>](https://github.com/kobotoolbox/kpi/) and ![<u>Enketo express</u>](https://enketo.org/use/installation/) for the web form

## **Personas**

- Viewer
- Editor
- Owner

---

## **Other**

**IPTT recording:**

https://drive.google.com/open?id=18gpeHJrFNrgE3M99VfrLx2R19P-6wDxm

[[https://drive.google.com/open?id=18gpeHJrFNrgE3M99VfrLx2R19P-6wDxm]](https://drive.google.com/open?id=18gpeHJrFNrgE3M99VfrLx2R19P-6wDxm)

**Indicator Field List:**

https://docs.google.com/spreadsheets/d/1bK9L_nSyCyPBGwz1Yb_STPLxIO2qc7HuI0X33TGO2PM/edit?usp=sharing

**Activity API:**

https://drive.google.com/file/d/1sfLU-5yHjvOIPp1AN8__aa7O6l8xWpyS/view?usp=sharing
