# Dots Use Cases

Use Cases:

![image.png](https://storage.googleapis.com/slite-api-files-production/files/d968c9e0-2ed0-4392-9e3f-96d7b784fc5d/image.png)

# Ona

**Tasks:**

1. Get_projects_from_api_task
   1. Python task to get projects from the Ona API
   1. Get project data from the Ona API using* invoke_http function* as JSON.
1. Get_formdata_task
   1. Python task to get the form submission of each project from the API and clean them.
   1. Get form submissions using HTTP request to API, then clean the data using the clean column function
1. Insert_formdata_task
   1. Insert the cleaned submissions to MongoDB database
   1. Get the data from the previous task and using pymongo connect to the database and insert it into connected MongoDB database.

# Kobo

# CommCare

# SurveyCTO
