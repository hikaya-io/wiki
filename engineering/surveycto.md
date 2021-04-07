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

### API usage

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
