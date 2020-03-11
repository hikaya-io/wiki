# Circles Product Plan

Initially dubbed, Hikaya's PWA Plan

Proposed data model v1.1

![image.png](https://storage.googleapis.com/slite-api-files-production/files/2d24c01c-a00f-4d3d-897b-e86c54f672e2/image.png)

# Frontend

## **Technologies**

- HTML5
- SCSS
- Angular 8 with NgRx for state management
- Typescript

## **Key Considerations:**

1. Are we building a single application or split it into micro-frontends?
1. Authentication strategy? - Single sign on in mind
1. Offline functionality - Is there a “Go Offline” option?
1. Responsiveness ?
1. Scalability
1. Performance and reliability
1. Support for internationalization (English, French, Spanish, Arabic, Russian)

## **Key Functionalities of the Final App**

1. Authentication (Register & Login)
1. Multiple workspaces (User can be part of multiple workspaces)
1. Data collection (Here am thinking about custom forms)
1. Indicator tracking(All CRUD operations and related components + indicator library)
1. Programs, projects .... Monitoring and management
1. Beneficiary tracking (case management, tracking individual interactions and services / good received)
1. Approval mechanism (a module that can allow users to create approval workflows in the app)
1. Manage master data (Locations, Organization who fund us/work with us, Contacts w/ these Organizations, Sectors we work in)
1. Qualitative data tagging (ability to categorize text snippets i.e. dovetailapp.com)

## **The Final App Checklist**

- Site is served over HTTPS
- Pages are responsive on tablets & mobile devices
- All app URLs load while offline
- Metadata provided for Add to Home screen
- First load fast even on 3G
- Site works cross-browser
- Page transitions don't feel like they block on the network
- Each page has a URL

### Indexability & social

- Site's content is indexed by Google (SEO) - requires server-side rendering
- Schema.org metadata is provided where appropriate
- Social metadata is provided where appropriate

### User Experience

- Content doesn't jump as the page loads
- Pressing back from a detail page retains scroll position on the previous list page
- When tapped, inputs aren't obscured by the on-screen keyboard
- Content is easily shareable from standalone or full screen mode
- Site is responsive across phone, tablet and desktop screen sizes
- Any app install prompts are not used excessively
- The Add to Home Screen prompt is  shown when on mobile

### Performance

- First load / be very fast even on 3G

### Caching

- Site uses cache-first networking
- Site appropriately informs the user when they're offline
- Provide context to the user about how notifications will be used
- UI encouraging users to turn on Push Notifications must not be overly aggressive.
- Site dims the screen when permission request is showing
- Push notifications must be timely, precise and relevant
- Provides controls to enable and disable notifications

### Bonus Features

- User is logged in across devices via Credential Management API

## **Frontend Development Plan**

## **Build reusable Hikaya front-end components (Aug, 5th 2019 - Sep, 6th 2019)**

**Below is a list of reusable components:**

- Input field:-  2 different types of text inputs, for quick entry forms (inline) and for Detailed forms
- Text area:- 2 different types of text area inputs, for quick entry forms (inline) and for Detailed forms
- Single Select Options:-  2 different types of text single select option inputs, for quick entry forms (inline) and for Detailed forms
- Multi-Select Options:- A standard design for all the multi-select to be used across all Hikaya client applications
- Radios: A standard design of radios to be used across all Hikaya client applications
- Checkbox: A standard design of checkboxes to be used across all Hikaya client applications
- Toggle switch: A standard design of a toggle switch to be user across all Hikaya client applications
- Normal Table: A standard design of a table to be used across all Hikaya client applications
- Expandable Table: A standard design of an expandable table to be used across all Hikaya client applications
- Main Navigation: A standard design of main navigation to be used across all Hikaya client applications
- Sub-navigations/action bars: A standard design for a  sub-navigation to be used across all Hikaya client applications
- Cards: A standard design for all the cards to be used across all Hikaya client applications
- Buttons: A standard design for all buttons to be used across all Hikaya client applications (Include different button classes for various actions)
- Button dropdown: A standard design for all button-dropdown to be used across all Hikaya client applications (Include different button classes for various actions)
- Icons: We need a set of icons that we will use across all clients applications. The usage should be standard across the applications.
- Date Picker
- Breadcrumbs
- Side Navigation
- Expansion Panels
- Tabs
- List (ordered and unordered)
- Stepper (Look at Material Stepper)
- Tree
- Modals
- Badge
- Progress bars and spinners
- snackbar/growl
- Tool-tip
- Alerts
- Popovers
- Maps

**Focus:**

At the back of our minds, we must always remember that our aim is to build very simple, easy to use, intuitive and very beautiful user interfaces. Therefore, every UI component that we build must have the following qualities:

- Simplicity:- simple to use
- Reusability:- Can effortlessly be used in different places within the FE applications
- Configurability:- Can be easily configured, by simply passing desired properties.
- Flexibility:- Can serve different use cases with the minimal of changes

**Deliverables:**

1. **Hikaya UI Frontend Hub (Hikaya-FE-UI-Hub) Repo.**

This is a complete Stand alone (HTML5, Angular 8, SCSS, and Typescript)  applications with a demo page containing all the above listed UI components. Add a side-nav that someone can click to view the individual components on an html page.

**Additional Technologies**: Material Design and Bootstrap 4

1. **At least 80% unit test coverage**

# Backend

## **Technologies**

- Django (Django REST framework)
- GraphQL
- Swagger
- RabbitMQ

## **Development Process**

1. Unit tests from the start
1. JWT Authentication
1. Microservice-architecture (Still a discussion and under research)

## **API  First Approach**

At Hikaya, we follow API-First approach way of development. This implies that we first build the API and the API dictates the direction taken by our FE client application(s). And this implies that the First UI for our application is always the API documentation and web views.

## **API Design**

There are two key approaches to developing APIs. These are Code First and Design First approaches. At Hikaya, we are moving away from the traditional method of Code First approach, and trying to catch up with the popular and rapidly growing Design First approach.

## **MVP Version (Aug, 5th 2019 - Sep, 6th 2019)**

With the deadline of 6th of September, below are some of the Endpoints and functionalities that should be ready and tested until then.

### Models:

1. Auth User
1. Hikaya User (Core User)
1. Permission
1. Workspace
1. Account (Organization/Stakeholder)
1. Portfolio
1. Contact
1. Location
1. Office
1. Sector
1. WorkflowLevel1
1. WorkflowLevel2/3/4…

Bonus:

1. _Indicator_
1. _Indicator Library_
1. _Objective_

### Functionalities:

1. *AuthUser \_creation,  \_CoreUser*  creation,  Authentication and Permission control for the registered user(s).
1. All CRUD operations for the above models
1. Ability to tie user(s) to organization(s) through various methods
   1. Direct Invitation
   1. Access Request
   1. Direct linking by Org Admin/Super Users
1. Secure Django Admin for various configurations and super user interactions. With Ability to filter and sort data based on various criteria.
1. Expose the endpoints for the FE.

# Key Functionalities of the Final App

1. Authentication (Register & Login)
1. Data collection (Here am thinking about custom forms)
1. Indicator tracking(All CRUD operations and related components)
1. Programs, projects .... Monitoring and management
1. Beneficiary tracking (case management, tracking individual interactions and services/good received)
1. 6. Manage master data (Locations, Organization who fund us/work with us, Contacts w/ these Organizations, Sectors we work in)

## The Final App Checklist

- Site is served over HTTPS
- Pages are responsive on tablets & mobile devices
- All app URLs load while offline
- Metadata provided for Add to Home screen
- First load fast even on 3G
- Site works cross-browser
- Page transitions don't feel like they block on the network
- Each page has a URL

## Indexability & social

- Site's content is indexed by Google
- Schema.org metadata is provided where appropriate
- Social metadata is provided where appropriate

## User Experience

- Content doesn't jump as the page loads
- Pressing back from a detail page retains scroll position on the previous list page
- When tapped, inputs aren't obscured by the on screen keyboard
- Content is easily shareable from standalone or full screen mode
- Site is responsive across phone, tablet and desktop screen sizes
- Any app install prompts are not used excessively
- The Add to Home Screen prompt is intercepted

## Performance

- First load very fast even on 3G

## Caching

- Site uses cache-first networking
- Site appropriately informs the user when they're offline
- Provide context to the user about how notifications will be used
- UI encouraging users to turn on Push Notifications must not be overly aggressive.
- Site dims the screen when permission request is showing
- Push notifications must be timely, precise and relevant
- Provides controls to enable and disable notifications

## Bonus Features

- User is logged in across devices via Credential Management API

---

**Development Timelines & Deliverables**

# MVP (01/11/2019):

## Deliverables

1. Authentication Flow and Functionality (Both BE and FE)
1. CRUD operation for the following Models:
   1. Workspace
   1. Organization
   1. Contacts
   1. Office
   1. Sector
   1. Location

---

# 2nd PWA Meeting

## **_7th August, 2019_**

**Attendance:**

1. Andrew Pham
1. Henry Ohanga
1. Ivy Mutiso
1. Ninette Adhikari
1. Peter Odeny
1. Will Ceolin
1. William Mulli

## Agenda:

1. Feedback on UI library research - _Angular-Material_
1. Decision on which Library to go for - _Collective agreement_
1. UI - Components development kick-off - _Peter_
   1. ![<u>_https://docs.google.com/document/d/14S0H-0mclCRr2dyLWl4p3IraQSvbPmX56WDFjw441Tk/edit_</u>](https://docs.google.com/document/d/14S0H-0mclCRr2dyLWl4p3IraQSvbPmX56WDFjw441Tk/edit)

[[https://docs.google.com/document/d/14S0H-0mclCRr2dyLWl4p3IraQSvbPmX56WDFjw441Tk/edit]](https://docs.google.com/document/d/14S0H-0mclCRr2dyLWl4p3IraQSvbPmX56WDFjw441Tk/edit)

1. Circles FE skeleton and set-up - _Peter and Will_
1. UI/UX updates - Ninette - to set up Figma and invite Ivy

## Meeting Notes:

- Team decided on Angular Material for UI Library (All)
- First epic: build reusable UI components; all tickets are added to Jira (new project = Circles) (Andrew)
- Create new UI component repo (William)
- Create new Circles app repo (Will)
- Setup Storybook to visualize UI components (William)
- Setup Figma for UI design and mock-up (Ninette)

# Hikaya PWA FE Development Kick-Off Meeting

**_Date: 31st July, 2019, 7p.m - 8.30p.m Nairobi Time_**

Part 1 (7p.m - 7.30p.m):

- Team Introduction - Peter
- Executive summary of the PWA project - Andrew
- Scope and deliverables - Peter
- Roles and Responsibilities - Peter
- Communication and Meeting plans - Peter

Part 2 (7.35p.m to end)

1. Technologies - Will Ceolin
1. Development process (PR reviews, testing and deployments) - Peter
1. Hikaya FE components - Henry, Peter, Will & William
1. Next steps after the UI components - Will Ceolin
1. Q&A

## Meeting Notes

- Attendance


    1. Andrew
    1. Henry
    1. William
    1. Will

- Resolutions
- We will use Angular 8 for the development of the PWA FE.
  - Reasons:
    - Majority of the team are more conversant with angular
    - Ref Point 1: Quick delivery of the product
    - Ref Point 1: Get every team contributing their best right from the start.
- Implement the Offline functionality from the very beginning but then go with Online First approach (Offline functionality only turned on when a user loses connection)
- Suggestions

  - Do more research on the best UI tool to use  (angular/material, ngx-bootstrap etc etc)
  - Focus less on the UI components if we are using a UI tool.
  - Quickly build the reusable and customable angular components

- Expectations and Takeaways

  - Submit UI library of choice during the next meeting
  - Start on User stories and requirements specifications
  - Get a video with some of the expected functionalities

- Next Meeting and Agenda
  - Settle on a UI tool
  - Plan the app development
