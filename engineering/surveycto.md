# SurveyCTO

> SurveyCTO is a powerful, field-tested platform that allows you to collect high-quality data using mobile phones, tablets, or computers—even when you're offline.

Form servers, or Survey Servers, provide a great opportunity to build data-oriented integrations.
We aim to load its data about "Forms" and their "Submissions" into some analytics-friendly, a relational DB, a non-relational DB, and provide data owners better control and visibility of the data they collected.

The list of submissions needs to be periodically updated. Daily is good enough.

## Survey CTO and XLSForm

SurveyCTO is [listed](https://xlsform.org/en/#tools-that-support-xlsforms) as a tool the support XLSForms.

TODO what this exactly means

## API

### Authentication

Using username and password
Basicauth header

CSRF token and requests session?

### General API usage

[SurveyCTO API documentation](https://support.surveycto.com/hc/en-us/articles/360033156894?flash_digest=d76dde7c3ffc40f4a7f0ebd87596d32f3a52304f):
    - More like an article
    - Downloading wide data from API
    - Downloading data in CSV format
    - Linebreaks in CSV
    - Segmentation based on review status
    - Authentication
    - Date formats
    - Rate limiting
    - Some sample codes

### Get all form IDs

To get all form IDs, we are using a generic endpoint that returns a multitude of information about the SCTO server: its forms, groups, datasets...

This endpoint is not officially supported by SurveyCTO and is supposed to be queried by SurveyCTO frontend. This is why it requires a CSRF token to be passed in the `X-csrf-token` HTTP header. 

Endpoint: https://{SERVER_NAME}.surveycto.com/console/forms-groups-datasets/get

<details>
  <summary>Sample JSON response :point_down:</summary>

```json
{
    "canAddObjectsIntoRoot": true,
    "groups": [
        {
           "id": 1,
           "title":"Title of the group",
           "parentGroupId":"ID of the parent group, if any",
           "ordinal":0.0,
           "teamGroup": false,
           "teamId": "Id of the team"
        },
        ...
    ],
    "datasets": [],
    "forms": [
        {
            "title":"Title Of The Form",
            "id":"title_of_the_form",
            "version":"version_of_the_form",
            "creationDate": 1614863369000,
            "createdUser": "ID of the user who created the form",
            "completeSubmissionCount": 20,
            "incompleteSubmissionCount":0,
            "unreviewedSubmissionCount":0,
            "approvedSubmissionCount":19,
            "rejectedSubmissionCount":1,
            "formFields":"None",
            "testForm":false,
            "encrypted":false,
            "draftVersion":"version of the draft, if any",
            "deployed":true,
            "webDataCollectionAnonymousEnabled":false,
            "webDataCollectionAutoDetectBrowserLanguage":true,
            "datasetOptionsModel":{
                ...
            },
            "attachedDatasetIds":[
                ...
            ],
            "lastIncomingDataDate":1615995064000,
            "groupId":98,
            "reviewWorkflowEnabled":false,
            "reviewWorkflowConfig":{
                ...
            },
            "formFillingSettings":{
                ...
            },
            "downloadable":true
        }
        ...
    ],
    ...
}
```

</details>

### Listing all the forms
<!-- TODO provide sample results -->

You can list all forms of a SurveyCTO server using its API...

Main attributes of a form:
- `id`: Unique identifier. Is deduced from the title of the form.
- `testForm`
- `deployed`
- totalSubmissions
- version
- ...

When fetching list of forms, and since our goal is to provide analytics on the submissions, we filter the list of forms according to the following rules:
1. Non test forms
2. Deployed forms
3. Has at least a single submission

This also has the benefit of filtering out some `Form`s that SurveyCTO uses internally to manage drafts, and which raise internal server errors on the SurveyCTO side when trying to fetch their submissions.
### Get details of a form

Details of a form are important. It includes:
- Fields, labels
- Translations
- Attachments?
- ...


You can list all forms of a SurveyCTO server using its API...

> Please note that this endpoint is not part of the official SurveyCTO API. It is not documented anywhere and is not officially supported. It was deduced from analysing traffic inside the browser while visiting SUrveyCTO
### Get submissions of a form

<!-- TODO -->

## CSV import

[Understanding the format of exported data](https://docs.surveycto.com/05-exporting-and-publishing-data/01-overview/09.data-format.html)

## SurveyCTO limitations

[Limitations of SurveyCTO](https://support.surveycto.com/hc/en-us/articles/360045646133-Limitations-of-SurveyCTO)

They strongly recommend, for the fields names, to keep them as short as possible
If too long, they can break integration with third-party integration or with SurveyCTO "Quality checks"

## Limitations when loading to SQL DBs

Special characters in names of tables and fields
Length of the table names and fields names


# Links

[Overview of SurveyCTO types](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03a.field-types-text.html)
