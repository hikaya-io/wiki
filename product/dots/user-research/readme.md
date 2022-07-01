# Dots Use Cases

## Dots Use Cases

Use Cases:

![image.png](https://storage.googleapis.com/slite-api-files-production/files/d968c9e0-2ed0-4392-9e3f-96d7b784fc5d/image.png)

## Ona

**Tasks:**

1. Get\_projects\_from\_api\_task
   1. Python task to get projects from the Ona API
   2. Get project data from the Ona API using _invoke\_http function_ as JSON.
2. Get\_formdata\_task
   1. Python task to get the form submission of each project from the API and clean them.
   2. Get form submissions using HTTP request to API, then clean the data using the clean column function
3. Insert\_formdata\_task
   1. Insert the cleaned submissions to MongoDB database
   2. Get the data from the previous task and using pymongo connect to the database and insert it into connected MongoDB database.

## Kobo

## CommCare

## SurveyCTO
