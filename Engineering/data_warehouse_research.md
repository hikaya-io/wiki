# Data warehouse research

_Updated: 20190601_

A data warehouse is an electronic system that gathers data from a wide range of sources within a company and uses the data to support management decision-making.

Hikaya Data Warehouse (HDW) gathers data from various sources that are used by our clients, prepares, transforms and store this data in a form that is compatible with our Pipeline tools and processes. HDW is used as centralized data repository for **Hikaya Dots **(a set of analytical and reporting tools).

Some of these sources include:

1. Activity
2. CommCare
3. ONA
4. KoBo
5. SurveyCTO
6. Google Sheets
7. One Drive
8. CSV

**HDW** is a cloud-based data warehouse that utilizes **Google BigQuery** and unlike traditional on-premise setups. The benefits that come with a cloud-based data warehouse solution are:

1. Saves the cost of setting up a physical hardware.
2. Cost effective and quicker to set up and scale.
3. Due to their adoption of massively parallel processing (MPP) and columnar storage, cloud-based data warehouse architectures can perform complex analytical queries much faster.

## The Data warehouse has 3 basic functional units:

1. ETL (Extraction, Transform, and Load) Unit

This is the unit where all data importation from the external sources takes place. At this point there are 3 basic operations that takes place:

- Data is loading by our ETL applications (Pipeline: Apache NiFi workflow and/or Tables).
- Data cleaning, cleaning the data to conform to our BigQuery instance schema
- Data staging: This is where data is staged for pushing to BigQuery. We use relational DB or other forms like exporting the data as CSV to SFTP servers where BigQuery can pull in the data via scheduled tasks.

2. Data Store

        This is the Hikaya BigQuery instance, where all cleaned data is stored and replicated. From this point, our analytics pipeline receives the data

3. Hikaya Dots

        Dots is Hikaya’s analytics pipeline that acts as the UI for our data warehouse solution. Here we use various options, including:
        - Google Cloud Platform Supported Analytical and Reporting tools
        - Apache Superset
        - RMarkdown

## What is and why BigQuery?

At Hikaya, we acknowledge the fact that storing and querying massive datasets can be time consuming and expensive without the right hardware and infrastructure. It is for this reason that Hikaya chose a solution that addresses some of the most complicated and expensive requirements of an ideal data warehouse, including, speed, reliability, and security. Google BigQuery is an enterprise data warehouse that solve these problems by enabling super-fast SQL queries using the processing power of Google's infrastructure.

## Loading data

Before data can be loaded into BigQuery for analytical workloads, it is typically stored in a Cloud Storage product and in a format that is native to its origin. During the early stages of migration to GCP, the common pattern is to use existing extract, transform, and load (ETL) tools to transform data into the ideal schema for BigQuery. After data is transformed, it is transferred to Cloud Storage as CSV, JSON, or Avro files, and from there loaded into BigQuery by using load jobs or streaming. Alternatively, you can transfer files to Cloud Storage in the schema that is native to the existing on-premises data storage, loaded into a set of staging tables in BigQuery and then transformed into the ideal schema for BigQuery by using BigQuery SQL commands. These two approaches are visualized here:

## Data Warehouse Monitoring

We use stackdriver to monitor BigQuery resources, including creating charts and alerts for BigQuery metrics. The newer format, BigQueryAuditMetadata, represents a great view into BigQuery operations. BigQueryAuditMetadata provides detailed report logs on how resources are changed indirectly by other resources, particularly when reporting on asynchronous events and events that are not strongly coupled to a particular API call.

For example, the BigQueryAuditMetadata entries can report when BigQuery tables are removed because of a configured expiration time.

BigQuery automatically sends audit logs of user actions to Stackdriver Logging. Stackdriver Logging allows users to filter and export messages to other services

## Visibility of the Hikaya Data Warehouse

There are various ways to access your data from HDW as we support all the access features that are supported by BigQuery. These includes:

1. Google Cloud Platform (GCP) Console (read more here GCP Console)
2. Classic web UI (read more classic web UI)
3. Using the command-line-tool (read more command-line tool)
4. Finally, third party tools such as visualising or loading the data (third-party tools)
5. BigQuery REST API (Read more BigQuery REST API) by using some of the client libraries such as Java, Python or .NET

## Backup and recovery

BigQuery addresses backup and disaster recovery at the service level. Also, by maintaining a complete 7-day history of changes against your tables, BigQuery allows you to query a point-in-time snapshots of your data. You can easily revert changes without having to request a recovery from backups. However, when a table is explicitly deleted, its history is flushed after 2 days.

## Security

Data Security is one of Hikaya’s core concerns, and it is for this reason that we chose BigQuery as an ideal solution that addresses our security concerns:

Security is always important when working with sensitive data. GCP helps to keep your data safe, secure, and private in several ways, and all data is encrypted during transmission and at rest. GCP is also ISO 27001, ISO 27017, ISO 27018, SOC3, FINRA, and PCI compliant.

Hikaya gives access to data following a Role-Based Access mechanism that is supported out of the box by BigQuery. We control access to both your project and your data based on your business needs, such as giving others the ability to view or query your data depending on the business needs.

BigQuery provides predefined roles for controlling access to resources. You can also create custom Cloud IAM roles consisting of your defined set of permissions, and then assign those roles to users or groups. You can assign a role to a Google email address or to a G Suite Group.

## References:

https://cloud.google.com/solutions/bigquery-data-warehouse
