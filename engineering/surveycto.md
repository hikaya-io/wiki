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

- Fetching wide JSON data from API
- Fetching data in CSV format
- Fetching encrypted forms
- Segmentation based on review status
- Username/Password authentication to the SurveyCTO API
- Date formats
- Rate limiting
- Some sample codes

A package [IDinsightsurveycto-python](https://github.com/IDinsight/surveycto-python/blob/master/pysurveycto/pysurveycto.py) is available. The package is aknowledged by SurveyCTO in their blog post [Python & SurveyCTO: we bring you pysurveycto](https://www.surveycto.com/blog/idinsight-phython-surveycto/).

You can find a minimalist class used in the SurveyCTO Airflow integration in [connectors/DAGs/helpers/surveycto.py](https://github.com/hikaya-io/connectors/blob/master/DAGs/helpers/surveycto.py).

### Get all form IDs

To get all form IDs, we are using a generic endpoint that returns a multitude of information about the SCTO server: its forms, groups, datasets...

**Request:** `GET https://{SERVER_NAME}.surveycto.com/console/forms-groups-datasets/get`

> This endpoint is not officially supported by SurveyCTO and is supposed to be queried by SurveyCTO frontend. This is why it requires a CSRF token to be passed in the `X-csrf-token` HTTP header.

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

When fetching list of forms, it is **strongly recommended** to filter the list of forms according to the following rules:

1. Non-test forms
2. Deployed forms
3. Has at least a single submission

This has the benefit of filtering out some forms that SurveyCTO uses internally (to manage drafts for example), and which raise `500 Internal Server` errors on the SurveyCTO side when trying to fetch their submissions.

Must also be noted that some of those forms had prefixes/suffixes with special characters in them. It appears that it is SurveyCTO's way of naming them.

### Get details of a form

Details of a form include, among others:

- Fields: names, captions in all supported languages, data types
- SurveyCTO Quality Checks implemented on the form
- Submissions counters
- Attached datasets

**Request:** `GET https://{SERVER_NAME}.surveycto.com/forms/{FORM_ID}/workbook/export/load`

> **Note:** This endpoint is not officially supported by SurveyCTO and is supposed to be queried by SurveyCTO frontend. This is why it requires a CSRF token to be passed in the `X-csrf-token` HTTP header.

<details>
    <summary>Sample JSON response :point_down:</summary>

```json
{
    "formStructureModel":{
        "title":"Title of the Form",
        "latestVersion":"2103041459",
        "encrypted":false,
        "reviewWorkflowEnabled":false,
        "defaultLanguage":"English",
        "summaryElementsPerLanguage":{
            "English":{
                "name":"airflow_sample_form",
                "caption":"None",
                "dataType":"group",
                "appearance":"None",
                "children":[
                   {
                       "name":"name_of_the_field",
                       "caption":"Long descriptive text displayed in the form to give details about the field",
                       "dataType":"type_of_field",
                       "appearance":"display_of_the_value",
                       "publishable":false
                   },
                   ...
                ],
                "allFieldsCount":27,
                "publishableFieldsCount":2,
                "notesCount":1,
                "empty":false
            },
            "Español":{
                ...
            },
            "Français":{
                ...
            }
        },
        "languages":[
            "English",
            "Español",
            "Français"
        ]
    },
    "dataView":"None",
    "qualityCheckModels":"None",
    "uuids":[
        ...
    ],
    "latestReviewDates":[
        ...
    ],
    "latestReviewStatuses":[
        ...
    ],
    "latestClassTags":[
       "None",
       "None"
    ],
    "qualityChecksWarnings":"None",
    "lastQCRunDate":"None",
    "submissionsCounters":{
        ...
    },
    "totalUUIDsToFetch":0,
    "attachedDatasets":"None"
}
```

</details>

### Get submissions of a form

<!-- TODO -->

## CSV import

[Understanding the format of exported data](https://docs.surveycto.com/05-exporting-and-publishing-data/01-overview/09.data-format.html)

## SurveyCTO limitations

[Limitations of SurveyCTO](https://support.surveycto.com/hc/en-us/articles/360045646133-Limitations-of-SurveyCTO)

They strongly recommend, for the fields names, to keep them as short as possible
If too long, they can break integration with third-party integration or with SurveyCTO "Quality checks".

## Limitations when loading to a PostgreSQL

Some limitations of PostgreSQL can be hit when trying to load data from SurveyCTO.
They can lead to conflicts in table/columns names:

- Identifiers (table and column names for examples) that are not doube-quoted in SQL statements are transformed to lowercase.
- Identifiers can not have special characters if they are not double-quoted.
- An identifier's length should not exceed 63 characters. If it is the case, it is truncated.

Partially because of these limitations, it is recommended to use [Pandas to-sql method](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_sql.html) to dump data into the DB.

For other operations, use [SQLAlchemy](https://docs.sqlalchemy.org/) and [SQLALchemy Core](https://docs.sqlalchemy.org/en/14/core/)

## Links

[Overview of SurveyCTO types](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03a.field-types-text.html)
