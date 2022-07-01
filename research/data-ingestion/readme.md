# Integration Research

## Integration Research

## NiFi Research

Apache NiFi Deployment & Testing

20190418

### Overview

As part of the research agenda, it has been decided to explore the usage of Apache NiFi in order to manage the flow of data within the system.

### Goals

1. **Deploy Apache NiFi to DO Instance:** Apache NiFi is to be deployed to a DO droplet in accordance with best practices and in a secure manner \(accessible by a certain list of IP’s which are to be whitelisted\).
2. **Test Deployment and Flow Implemented:** A test flow can be used and run on the deployed NiFi instance. This flow must be thoroughly tested in order to ensure that it operates as intended within the production environment.

### Specifications

* Deployment must be easily scalable and secure
* Flows should be under version control
* The deployment environment and deployed flows should be tested thoroughly including error handling

### Milestones

### Whitelist IPs

Identify IPs that should be able to access the NiFi instance’s web UI, if any. Form a security policy and implement it with regards to the DO server.

### Install Docker

Install docker client on the DO

### Deploy Docker Image

Deploy the following image on the instance: [docker: apache/NiFi](https://hub.docker.com/r/apache/nifi/).

### Upload Flow

Upload FlowFile of Test flow and use it with NiFi.

### Collect Test Cases

Identify necessary aspects to test and the scope of each, summarise into test cases.

### Set up Testing Framework Using PyTest and `NiPy` API

Implement test cases using PyTest and [NiPy API](https://nipyapi.readthedocs.io/en/latest/readme.html) library.

### Proposed Extension Milestones

### Deploy NiFi Registry

[NiFi Registry](https://nifi.apache.org/registry.html) is a companion project to NiFi, aiming to add version control, storage and management of work flows along with easy integration with NiFi \(for easy consumption of the version controlled FlowFiles\).

Deploy NiFi registry making use of: [deploying a NiFi registry using docker](https://leanjavaengineering.wordpress.com/2018/07/26/quick-tip-using-git-with-nifi-registry-in-docker/)

To address:

“_A core feature of NiFi is that you can modify the live data flow without having to perform the traditional design and deploy steps. As a result, the idea of “deploying a flow” wasn’t really baked into the system from the beginning.” -_ [_Bryan Bende_](https://bryanbende.com/development/2018/01/19/apache-nifi-how-do-i-deploy-my-flow#Introduction)

### NiFi Flow CI/CD

Set up simple [CI/CD pipeline with Laminar](https://laminar.ohwg.net/docs.html#Introduction) for FlowFiles integrated with GitHub and using the tests set up in Milestone 6. If the test suite passes the FlowFile would be added to the NiFi Registry for consumption.

## Apache NiFi vs. Airflow

20191029

By Nijinsha Rahman

Apache Nifi is a visual data pipeline tool where developers/ business analysts can create data pipelines using components called _**processors**_. Each processor is pre-built, easily accessible and configured using\_ _\*\*\_expression language_\*\*_._ It is built for users who have mere knowledge of coding or programming.

**Examples of processors:** Invoke HTTP, Split Json, Evaluate Path, etc

* [https://www.freecodecamp.org/news/nifi-surf-on-your-dataflow-4f3343c50aa2/](https://www.freecodecamp.org/news/nifi-surf-on-your-dataflow-4f3343c50aa2/)

On the other hand, Apache Airflow is a tool used to author, monitor, and schedule workflows. These workflows can be jobs that periodically run like an email responder or a data flow model etc. Airflow uses DAGs to connect different tasks together which when scheduled to run on intervals like 5min, daily or yearly, etc. Tasks can be authored as _**BashScripts**_\_ _or_ _\*\*\_PythonScripts_\*\*. These tasks can be joined to run serially, parallelly, or conditionally. There is also an option to set up retry or fail when the whole job when on task on the DAG fails. Airflow is designed to be authored by someone with programming knowledge and operated by anyone using the visual UI which comes out of the box with airflow.

#### Task example

```text
**get_projects_from_api_task = PythonOperator(**

**    task_id='Get_projects_from_API',**

**    provide_context=True,**

**    python_callable=invoke_http,**

**    dag=dag,**

**)**
```

### Comparison

* Nifi uses a visual workflow to author the pipeline.
* Airflow needs to be programmatically as Bash Scripts or Python Scripts.
* Both are open source.
* Airflow has more community support than Nifi.
* Airflow will the easy to set up for someone with programming knowledge.
* Nifi uses a lot more resources than Airflow \(According to my research\).
* Airflow has a lot more features than Nifi when it comes to debugging since we will be able to see the logs of each task.
* Nifi UI seems to be more visually pleasing and easy to use for a beginner because of drag and drop features than Airflow.
* One thing that seems to be missing in Airflow UI is that it doesn’t have auto-refresh \(live UI\) like Nifi. There are better opensource UI for airflow.

### General workflow for Ona Data

#### Nifi workflow

```text
    Setting up Nifi is very easy since you just download and run it like any other program.
```

1. Get data from Ona endpoint

```text
This is done using the InovkeHttp processor where the URL of the Ona API is given as argument to the processor. It can be scheduled to run at any interval. This processor adds the response file to the generated flow file.
```

This is then passed to a JoltTransfromJSON processor which parses the JSON from the flow file. The array of JSON is split into single objects and the flow file is generated for each JSON.

1. Generate Hash of the JSON and check for duplicate

Since the API is called in intervals it returns all the data instead of just new data. So the JSON objects are hashed and check if there is duplicate already inserted using HashContentProcessor and DetectDuplicate processor. The unique files are only passed to the next processor.

1. Insert to mongo

The files are then inserted into the mongo DB using PutMongoRecord processor.

**Challenges Faced**

* Was not able to create databases dynamically for each form for both mongo and Postgres because Nifi controllers need database names in advance to connect to.
* Sometimes there is a need to use a lot of processors just to do a simple task.
* Cleaning data was hard and was not able to achieve.

```text
                                                                         | Apache provides basic [<u>documentation</u>](https://nifi.apache.org/docs.html) on the setup and usage of NiFi. But the best documentation comes from Hortonworks which has several [<u>articles</u>](https://hortonworks.com/apache/nifi/) on utilizing NiFi (since it is a key component of their offering). Additionally, since NiFi is an open source project, there are numerous [<u>threads</u>](https://stackoverflow.com/questions/tagged/apache-nifi) for different NiFi questions on Stack Overflow.                                                                                                                                     |
```

\| **Monitoring** \| OIC has a built in dashboard to see Integration job health and monitoring. Additionally, email alerting can be set up as well. \| NiFi does not have a built in monitoring dashboard for scheduled jobs. Error handling and email alerting needs to be set up and configured manually.
 Additionally, separate monitoring should be set up on the server that NiFi is hosted on to detect if the NiFi process ever goes down or if memory on the server fills up. \| \| **Team Needs** \| Low level of technical skills required due to the different UIs that OIC provides to obfuscate the technical implementation. Additionally, there are multiple video walkthroughs that can be followed for different integrations. \| Low to mid level of technical skills required. In particular, NiFi installation and setup on a server requires technical skills. NiFi processor configuration can offer a large amount of options which can also be technically intimidating at first. However, having pre-existing examples can make this easier. \| \| **Price** \| $1,000+ / month \| NiFi is free and open source. Minimal costs to host a cloud server with basic NiFi use cases.
