# Apache Airflow

[Apache Airflow](https://airflow.apache.org/) is an open-source tool for building complex computational workflows and data processing pipelines. It is helpful where one finds themselves  running cron tasks that execute longer scripts, or keeping track of big data processing batch jobs.

Airflow is written in Python

An Airflow workflow is designed as a directed acyclic graph (DAG). This means that when writing a workflow, you should think about how it could be split into smaller independent tasks which can be then executed independently. The independent tasks can then be merged into a logical whole by combining them into a graph.

## Key Concepts

- Airflow **DAGs **are composed of **Tasks**.
- Each **Task** is created by instantiating an **Operator** **class**. A configured instance of an **Operator** becomes a **Task**, as in:**_ my_task = MyOperator(...)._**
- When a DAG is started, Airflow creates a **DAG Run** entry in its database.
- When a **Task** is executed in the context of a particular **DAG Run**, then a **Task** **Instance** is created.
- **AIRFLOW_HOME** is the directory where you store your **DAG** definition files and **Airflow** **plugins**.

## Why Airflow?

1. Airflow allows you to build very complex workflows and pipelines with pure python scripts
2. It is easy to understand and get productive with Airflow
3. Airflow exposes API that allows building on top of it.
4. Multitenancy support

## Hikaya Data ETL Requirements Specifications

- Pull data from 3rd party tools, including:
    1. ONA
    2. Kobo
    3. ComCare

- Clean the data by performing the following operations:
    1. Renaming some of the columns (replacing ‘/’ with ‘_’)
    2. Removing unnecessary columns
    3. Merging data
    4. Adding fields

- Dump the data to database(s)
    1. Dump the data to MongoDB hosted on DigitalOcean
    2. Dump the cleaned data to Postgres database on Digital ocean

## Airflow API

[<u>https://airflow.apache.org/api.html](https://airflow.apache.org/api.html)

Airflow REST API is still under development, though working. It exposes most of the Airflow resources via API that can be accessed through various Http methods. These include:

1. dag_runs

a. Trigger `dag-runs` via POST request (passing dag-id)

```
POST /api/experimental/dags/<DAG_ID>/dag_runs
```
b. List all dag_runs for a given a dag-id

```
GET /api/experimental/dags/<DAG_ID>/dag_runs
```

2. Tasks

a. Get information about the task

```
GET /api/experimental/dags/<DAG_ID>/tasks/<TASK_ID>
```