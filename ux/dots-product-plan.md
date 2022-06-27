# Dots PRD

## Dots Product Plan

## Product Requirements Document

| **Target release** | v0.1 |
| :--- | :--- |
| **Title** | Dots |
| **Last Updated** | 24-Sep-2019 |
| **Document status** | Draft |
| **Document owner** | **Goals** |

We would like to develop a set of analytic tools that humanitarian organizations can use to gain deeper insight into their data for reflection and learning. By researching existing enterprise-grade open source tools, our aim to select, adapt, and white label tools for use with humanitarian organizations.

![https://storage.googleapis.com/slite-api-files-production/files/4f1a80e8-2ea3-487e-8b22-0a4e258ad364/null](https://storage.googleapis.com/slite-api-files-production/files/4f1a80e8-2ea3-487e-8b22-0a4e258ad364/null)

## **User Requirements**

| As a\(n\)... | I...be | able to | so that... |
| :--- | :--- | :--- | :--- |
| Editor | Must | Configure my own charts and display them on a dashboard | I can share with my colleagues |
| Editor | Must | Create my own SQL queries | I can customize the data view that I want to display my data in |
| Editor | Must | Able to import data using pre-defined processors | I can integrate data from two or more data sources |
| Editor | Should | Perform table joins and calculations | I can manipulate and prepare my data so that I can generate the chart/report of my choice |

## **Assumptions**

### Users

* Users are proficient and knowledgeable in working with business intelligence tools
* Know how their data is formatted and where certain data fields are stored

### Technical

**Business Intelligence Tool**

* Can only see my data tables including the charts and dashboards that are generated from them
* Requires database connection to connect data to Superset
* Do we need to create a new data warehouse for every organization since the data schema will likely be different from organization to organization?
* How do we design a data warehouse architecture that allows us to store data privately for each organization \(possibly in a single instance\).

**Integration Tool**

* Enterprise ready
* Multi-tenant model for multiple organizations in a single instance
* Be able to process large amounts of data
* Can integrate data between two API enabled systems \(I.e. Finance tool and M&E tool\)
* Documentation:![ ](https://nifi.apache.org/docs.html)![&amp;lt;u&amp;gt;https://nifi.apache.org/docs.html&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs.html)

### **Personas**

1. Viewer
2. Editor
3. Owner

## **Use Cases**

### **1\) Real-time monitoring from a data collection tool**

1. Data is collected in a mobile data collection tool such as CommCare that has an external REST API
2. Be able to query the REST API and pull in a form submission data from the tool and import it into Apache NiFi.
3. Once imported in Apache NiFi, perform transformations such as creating a new calculated field such as taking two fields from the form submission \(I.e. numerator and denominator\) and produce a % column.
4. Once completed with data transformations, export the data and store it in a new database that can be made accessible to a business intelligence tool
5. Set up protocols to schedule new updates to the form submission data and store it in the new database
6. Connect the new database to the business intelligence tool
7. Once connect, perform data cleaning procedures
   1. Check for duplicates, missing values, outliers
8. Create new charts and tables that can visualize the data
9. Add the charts and tables to a dashboard
10. Publish the dashboard so it can be shared publicly

### **2\) Data Cleaning Requirements**

As part of the data integration, our clients are requesting that we have the ability to support “data cleaning”. Data cleaning refers to the ability to consolidate sets of data together that do not have the same header names \(will require manual mapping\). In addition, we will need to support creating new calculated field based on data captured. Lastly, we will need to have some smart algorithms to allow for flagging duplicates and missing values or outliers.

Requirements

* Need to merge two data sets together
* Need to create new calculated columns based on other columns in a data set
* Need to search a data set and scrub/anonymize all sensitive \(personally identifiable information\) from the data set
* Need to perform simple excel functions like VLOOKUP, SUM, COUNT
* Need to check for null values, duplicate values, and flag for outliers

### 3\) Superset - Business Intelligence Use Cases

* Access control
  * Can organization A and organization B exist in the same instance but not see each other's data \(charts and dashboards\)?
  * When a user signs up, can we specify which "organization" they should be part of and superset can assign them to the correct organization?
    * Is there an approval process before they are accepted to the organization?
* Authentication
  * can we introduce Google single-sign on to make it easier for users to create a superset account?
* Hosting
  * Which cloud provider should we host Superset on? \(Based on cost and easy deployment\)
    * AWS
    * Digital Ocean
* Template dashboard
  * Is there a way to develop a template dashboard that we can adapt/customize for new organizations?
* Database connections
  * What is the best way to connect existing systems \(with external API\), excel datasets to Superset?
  * Can we connect it with NiFi?

### **3\) Integration Tool \(Nifi\) Use Cases**

1. Pull data from two CSV files and merge together on a unique ID and post merge file to Superset
2. Pull data from two Ona forms and merge data together and post data as a merged table

* Sign up for an Ona account \(![&amp;lt;u&amp;gt;https://ona.io&amp;lt;/u&amp;gt;](https://ona.io/)\) and I'll give you access our Hikaya org where there's 2 forms with data submitted to. Here's documentation on Ona's API:![ ](https://api.ona.io/static/docs/index.html)![&amp;lt;u&amp;gt;https://api.ona.io/static/docs/index.html&amp;lt;/u&amp;gt;](https://api.ona.io/static/docs/index.html)

1. Pull data from two Kobo forms and merge data together and post data as a merged table

* Sign up for a kobo account \(![&amp;lt;u&amp;gt;https://kf.kobotoolbox.org&amp;lt;/u&amp;gt;](https://kf.kobotoolbox.org/)\) and I'll give you access to forms that have submitted data. Kobo API documentation:![ ](http://support.kobotoolbox.org/managing-your-project-s-data/api-and-rest-services)![&amp;lt;u&amp;gt;http://support.kobotoolbox.org/managing-your-project-s-data/api-and-rest-services&amp;lt;/u&amp;gt;](http://support.kobotoolbox.org/managing-your-project-s-data/api-and-rest-services)

1. Pull data from CommCare and Excel and post data to PowerBI for joins and visualization \(Ninette's example\) documentation for CommCare API:![ ](https://confluence.dimagi.com/display/commcarepublic/CommCare+HQ+APIs)![&amp;lt;u&amp;gt;https://confluence.dimagi.com/display/commcarepublic/CommCare+HQ+APIs&amp;lt;/u&amp;gt;](https://confluence.dimagi.com/display/commcarepublic/CommCare+HQ+APIs)

* Ask Ninette for her credentials to get access data:![ ](https://www.dimagi.com/commcare/)![&amp;lt;u&amp;gt;https://www.dimagi.com/commcare/&amp;lt;/u&amp;gt;](https://www.dimagi.com/commcare/)
* Third-party logins \(sensitive\): ![&amp;lt;u&amp;gt;https://docs.google.com/spreadsheets/d/18DxBb7nVbDng9hGAUfZbYjcuXkRquZzR8fAyUAK7WNk/edit\#gid=0&amp;lt;/u&amp;gt;](https://docs.google.com/spreadsheets/d/18DxBb7nVbDng9hGAUfZbYjcuXkRquZzR8fAyUAK7WNk/edit#gid=0)

1. Pull data from CommCare, Excel, ![&amp;lt;u&amp;gt;Newdea&amp;lt;/u&amp;gt;](https://lutheranworld-my.sharepoint.com/personal/vibol_chan_lutheranworld_org/Documents/Forms/All.aspx?cid=76296ee3-a232-46c8-a676-c567a5460300&FolderCTID=0x0120004FB9D1F7BC6BA4408268ED88DD531D6E&id=%2Fpersonal%2Fvibol_chan_lutheranworld_org%2FDocuments%2FDataExport%2FSource%2FBkp) \(mysql database\), run joins and pivot table analysis. Show data in dashboard and also allow the export of data

Detailed use cases here: ![&amp;lt;u&amp;gt;https://docs.google.com/document/d/1GXBrxMk01xwhuFzpNjWz5l6OQU7YOlwxHp9p4wPLLF4/edit&amp;lt;/u&amp;gt;](https://docs.google.com/document/d/1GXBrxMk01xwhuFzpNjWz5l6OQU7YOlwxHp9p4wPLLF4/edit)

* Dashboard will pull collected data from Commcare and activity and indicator target data from either CSV or Newdea database
* Dashboard data will refresh automatically from source data from CommCare
* Dashboard will show the actual values for each activity and indicator taking data from both CommCare and CSV/Newdea
* Dashboard to be downloadable in Excel and Word

Analysis:

* Common formula supported are: SUM, AVERAGE, COUNT, COUNTIFS, IF, VLOOKUP, PivotTable
* Create new columns with custom formula
* Create maps from collected lat, long and display selected information on the map
* Identify records with duplicate ID
* Append tables
* Merge tables

### NiFi-Processors

Documentation:![ ](https://nifi.apache.org/docs.html)![&amp;lt;u&amp;gt;https://nifi.apache.org/docs.html&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs.html)

CSV operations:

* ![&amp;lt;u&amp;gt;ConvertCSVToAvro 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-kite-nar/1.9.2/org.apache.nifi.processors.kite.ConvertCSVToAvro/index.html)
* ![&amp;lt;u&amp;gt;ConvertExcelToCSVProcessor 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-poi-nar/1.9.2/org.apache.nifi.processors.poi.ConvertExcelToCSVProcessor/index.html) - bonus \(May be handy in future\)
* ![&amp;lt;u&amp;gt;ValidateCsv 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ValidateCsv/index.html)
* ![&amp;lt;u&amp;gt;CSVReader 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-record-serialization-services-nar/1.9.2/org.apache.nifi.csv.CSVReader/index.html)
* ![&amp;lt;u&amp;gt;CSVRecordLookupService 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-lookup-services-nar/1.9.2/org.apache.nifi.lookup.CSVRecordLookupService/index.html)
* ![&amp;lt;u&amp;gt;CSVRecordSetWriter 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-record-serialization-services-nar/1.9.2/org.apache.nifi.csv.CSVRecordSetWriter/index.html)
* ![&amp;lt;u&amp;gt;SimpleCsvFileLookupService 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-lookup-services-nar/1.9.2/org.apache.nifi.lookup.SimpleCsvFileLookupService/index.html)

HTTP Requests:

* ![&amp;lt;u&amp;gt;HandleHttpRequest 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.HandleHttpRequest/index.html)
* ![&amp;lt;u&amp;gt;HandleHttpResponse 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.HandleHttpResponse/index.html)
* ![&amp;lt;u&amp;gt;InvokeHTTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.InvokeHTTP/index.html)
* ![&amp;lt;u&amp;gt;ListenHTTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ListenHTTP/index.html)
* ![&amp;lt;u&amp;gt;PostHTTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.PostHTTP/index.html)
* ![&amp;lt;u&amp;gt;GetHTTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.GetHTTP/index.html)

Text Processing

* ![&amp;lt;u&amp;gt;CountText 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.CountText/index.html)
* ![&amp;lt;u&amp;gt;ExtractText 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ExtractText/index.html)
* ![&amp;lt;u&amp;gt;ReplaceText 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ReplaceText/index.html)
* ![&amp;lt;u&amp;gt;SplitText 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.SplitText/index.html)

JSON Data Processors

* ![&amp;lt;u&amp;gt;AttributesToJSON 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.AttributesToJSON/index.html)
* ![&amp;lt;u&amp;gt;ConvertAvroToJSON 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-avro-nar/1.9.2/org.apache.nifi.processors.avro.ConvertAvroToJSON/index.html)
* ![&amp;lt;u&amp;gt;ConvertJSONToAvro 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-kite-nar/1.9.2/org.apache.nifi.processors.kite.ConvertJSONToAvro/index.html)
* ![&amp;lt;u&amp;gt;ConvertJSONToSQL 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ConvertJSONToSQL/index.html)
* ![&amp;lt;u&amp;gt;EvaluateJsonPath 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.EvaluateJsonPath/index.html)
* ![&amp;lt;u&amp;gt;FlattenJson 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.FlattenJson/index.html)
* ![&amp;lt;u&amp;gt;JoltTransformJSON 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.JoltTransformJSON/index.html)
* ![&amp;lt;u&amp;gt;JsonQueryElasticsearch 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-elasticsearch-restapi-nar/1.9.2/org.apache.nifi.processors.elasticsearch.JsonQueryElasticsearch/index.html)
* ![&amp;lt;u&amp;gt;PutHBaseJSON 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-hbase-nar/1.9.2/org.apache.nifi.hbase.PutHBaseJSON/index.html)
* ![&amp;lt;u&amp;gt;SplitJson&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.SplitJson/index.html)

JSON Control Services:

* ![&amp;lt;u&amp;gt;JsonPathReader 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-record-serialization-services-nar/1.9.2/org.apache.nifi.json.JsonPathReader/index.html)
* ![&amp;lt;u&amp;gt;JsonRecordSetWriter 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-record-serialization-services-nar/1.9.2/org.apache.nifi.json.JsonRecordSetWriter/index.html)
* ![&amp;lt;u&amp;gt;JsonTreeReader 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-record-serialization-services-nar/1.9.2/org.apache.nifi.json.JsonTreeReader/index.html)

FTP / SFTP Processors

* ![&amp;lt;u&amp;gt;FetchFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.FetchFTP/index.html)
* ![&amp;lt;u&amp;gt;FetchSFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.FetchSFTP/index.html)
* ![&amp;lt;u&amp;gt;GetFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.GetFTP/index.html)
* ![&amp;lt;u&amp;gt;GetSFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.GetSFTP/index.html)
* ![&amp;lt;u&amp;gt;ListFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ListFTP/index.html)
* ![&amp;lt;u&amp;gt;ListSFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.ListSFTP/index.html)
* ![&amp;lt;u&amp;gt;PutFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.PutFTP/index.html)
* ![&amp;lt;u&amp;gt;PutSFTP 1.9.2&amp;lt;/u&amp;gt;](https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.9.2/org.apache.nifi.processors.standard.PutSFTP/index.html)
