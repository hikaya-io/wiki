# Superset

## Background

Looking for a tool which would help you visualize, analyse and explore your datasets with amazing Charts and Graphs? Superset Apache is the BI Tool we recommend. This data exploration platform is designed to be visual, intuitive and interactive.

Superset is open source and does not require any coding. You only need a few technical steps at the beginning, such as cloning the repository and connecting your database to Superset. Once it is done anyone can explore and analyze their datasets.

See what Superset can do for you and how to implement it.

![](https://lh6.googleusercontent.com/_PTYkyJ-iQHr8_oXco79hE54bQ1-_4g72vLxI7x31EoZNjJPgzgq4ZXrzb4ijn4wCHXyhab4hlww6L_F0qJUyey1VlBmaIm5x-Hyc2RBBZhoBeXB4sfuYSk9vTD4uVU8CBOQdTuU8M7k-OcExQ)

## Example

![](../assets/superset.png)

## What is Superset?

Superset is a modern, enterprise-ready business intelligence web application

Its main goal is to make it easy to slice, dice and visualize data. Its developer claims that Superset can perform analytics at the speed of thought, why don’t you check it out yourself?

Superset is our recommended tool for these reasons:

1. Superset is designed to be highly available. It is “cloud-native” as it has been designed scale out in large, distributed environments, and works well inside containers;
2. Superset is offering way more flexibility than other BI Tool and lets you choose your web server, your metadata database engine, your message queue, your results backend, your caching layer and has the ability to run analytic workloads against most popular database technologies;
3. Superset charts and graphs look appealing, modern and innovative through its wide types of visualizations \(maps, iFrame, Time Series, etc..\);
4. Superset Apache is the most used BI Tool by organizations such as Airbnb, Yahoo! and Twitter.

## Key Features

* An intuitive interface to explore and visualize datasets, and create interactive dashboards;
* A wide array of beautiful visualizations to showcase your data \(30 types of visualizations\);
* Easy, code-free, user flows to drill down and slice and dice the data underlying exposed dashboards;
* Deep integration with Druid allows for Superset to stay blazing fast while slicing and dicing large, realtime datasets;
* Accepts all the data sources that support SQL Alchemy;
* Configurable caching options for fast loading dashboards.

## Getting Started

### Step 1 :Download the Repository

**For Windows users:**

* Go to your research tab, type cmd and right click on it and choose “Open it as an administrator”.

![](https://lh5.googleusercontent.com/_oKkViR4wSl1-MogF8PGLJShwn9lWcMLYxD4APJSamuRl78QKsBfiMM0iCsJ6vD_O4JYVpj41DWjPPfleAisUFNl8AdtpckW6RrvLugrhAQkjPc2FP3b5dAYhbI2uVevKOJgzlfF5hQ3_f9X_Q)

* Type “cd” + the path to the folder where you want to have Superset. Ex: “cd Desktop”

![](https://lh3.googleusercontent.com/qdpVlWb1xIdI8Vef3r3HE1TT00DCMGoAGPGk5To6nkEiaOeDB0mLCkkoZKqJpQ_9eMYM4hWJGPAztP31w45Qn20FLNLfxetLWahMz3lK2kp_LQgBouQ6vM5bvtt4Drc7V3Zj9PBAAT_Kq3vKZw)

* Then to clone the repository type: “git clone [https://github.com/apache/incubator-superset”](https://github.com/apache/incubator-superset”) which is Superset’s official github repository.

**For Debian and Ubuntu users:**

* Go to the repository where you want to have Superset
* Right click and choose “Open in terminal”
* Then to clone the repository type: “git clone [https://github.com/apache/incubator-superset”](https://github.com/apache/incubator-superset”)

![](https://lh6.googleusercontent.com/3RQrQvRVuMkoJ9qa8WeKfTMGR69Iq9ULniH4cFNvP9cp5d3yhAp29nIf1Uu2vUBmDM2QoWZ4czYPNrimELEehtW4-c3JxKTrMu3hnAi0OL0sNj5ieqppMBBpYNoUNjuiyH4NJu5m7l9QF71_Yw)

**For Mac users:**

* Go to your Launchpad and search for Terminal or in the tabs on the top chose “Utilities” then Terminal.

![](https://lh3.googleusercontent.com/FWxSj4dvtd7FiDz29iXYG31E-CSu_c8i9espV9Se0jber5dewe6Xkm0wqvcHfSw1F6lA1pEirZTWxXaS-JHz-COkkk_g5BJBZtI0Cix9ZtQqCQVtUPRJwj4okBvlUhlP93Mth6dDw606LpUQcg)

* Type “cd” + the path to the folder where you want to have Superset. Ex: “cd Desktop”. You can type “pwd” to see where you are located and “ls” to list the folders and filters located in the current working directory.
* Type: “git clone [https://github.com/apache/incubator-superset”](https://github.com/apache/incubator-superset”)
* Instead of the official repository you can clone the repository amancevice/superset to deploy Superset via a Docker container: “git clone [https://github.com/amancevice/superset”](https://github.com/amancevice/superset”). If you do not have experience with Docker containers then you should use the official repository.

### Step 2 :Launch the server locally

* Install dependencies as explained on the official documentation under the section \([https://superset.apache.org/installation.html](https://superset.apache.org/installation.html)\). Only install the dependencies necessary for your operating system \(Windows, Mac etc.\).
* In that documentation, follow the steps :
* Python virtualenv
* Python’s setup tools and pip,
* Superset installation and initialization
* Configuration: In the research file tab typesuperset\_config.pyand open it to modify the SQLALCHEMY\_DATABASE\_URI which allows the connection between Superset and your Database:

You have to modify the values of the variables POSTGRES\_USER, POSTGRES\_PASSWORD, POSTGRES\_HOST, POSTGRES\_PORT and POSTGRES\_DB according to the values matching to your Database.

**Example:**

![](https://lh4.googleusercontent.com/Zy2ypR8q32MWNwnP3YSfK031CCcYjN_PxDh0QPnH05U-FTq4zpqvd03YPxWLzaAncvbNLf6fGIUj3QC8_FawdnXNIgO8oJgwXyjQgUzqQQTlB2g01dlx4eJbRK5Td-9Hq7XB3_LZEr2dreHqnA)

* Run Superset locally: [http://localhost:8088](http://localhost:8088), enter the username and the password of the account you have created.  

![](https://lh4.googleusercontent.com/9jdLGqt7JQoaD63E_bMWDxTAaKtHF8lT0a1FMY3tL5ijm-oabBEcmgSq-toYPD7OhrSrIbzba6K1KfpheTKH-4Iowk4vZKeEjqAWZ6bXujO4nPzd4VhenI7hC7HBujjLyo51MVzemoiYh3FbHA)

### Step 3 :Connect the DataBase to Superset

* Go to the section Sources and click on Databases.

![](https://lh5.googleusercontent.com/Cu1VdRRQc7COW_-LTJKWyra9BkccxxFw0Tn5BSx3rRifnp4ic-gH3Id1QA5UZou3PUp6xMCq2EpNzimCwPLTL7AvAOOfYEIO8W10pkRhfVZ6Nx_SZR4MRkOYHoazPlr3GE9TIOm_IRZd0fYc5w)

* Click on the “+” button next to Add Filter on the right.
* Choose a Database name and put the correct SQLAlchemy URI and save it.
* You will find the SQLAlchemy URI in the file “superset\_config.py”: SQL\_ALCHEMY\_URI = “ … “ Copy paste it and just replace the last word by the name of the database you want to connect to Superset.
* The SQLAlchemy URI in in the following form: Type of DataBase you use + “://” + your username + your password + “@” the port you use for the database + “/” + the name of the database you want to connect to superset.

![](https://lh5.googleusercontent.com/j0dfHWjmOKHNScL-sAS7ixt7hbZkKH_Ogd3ygfrZlBG3it8bIDk0mZ2zEElp4hw6PFgLd3bUVYiWgjl49nB-ZRiT4BrjisiiFwGxWjUrTIsteddSbCVFGqywe7jVXI6hd4hERPqSUessQqwkQw)

* Click on Test Connection to see if the the connection is established. You should receive the message “It seems OK”.

### Step 4 :Create a table

* Go to the section Sources and click on Tables.

![](https://lh4.googleusercontent.com/o8mU-mhm74hax6MjW_9PNYwJFitxAsQxXhnpdbkbAezC4dWmUC7-hw5UimdsQMshF5Uh-VmUlTTTwMapDSj_ILUxFhVhqUVgOTAFttRK9kGPjQrJIAnc9Uxh4rIJXW7GoU9qKlwGqlFcrFKwvg)

* Click on the “+” button.
* Choose the correct Database.

![](https://lh5.googleusercontent.com/Zj9-0pZHZig4wa0J7LuTlOBk5OcLAmsITkFsJ6j4Su4T54u141DN3ltHRAMH0P16Ef5mQlC0ctnqqL6gt7SPVkNgsPSRFZ9dEqOJfSW0daNCQZcnM4n_41cQ-OX5p3FO3PqYdlhRvURQTZU-aw)

* Write the correct table name and save it

![](https://lh6.googleusercontent.com/gC-tKihguqGuO2oeAVF7YxGpLD9lyhIVcxcZDAXA6KsZVp_3OlJvDOLRB-juEubt3CxpDUI7KSPe3Unl2MJYzBu3QVn3_iuJYE0a8FRSXOiSdEDL2vSUjKt80bUgUkFkt9pmurRV7wolbQ97mA)

### Step 5 :Create a chart

* Either go on chart section and click “+” button.
* Or go on Tables section and click on the table you want to make a chart from.
* Choose the datasource \(table\) and the chart Type \(Pie Chart, Table View, Histogram, etc.\).

![](https://lh5.googleusercontent.com/eb8kAo52QuK8HexaxWsD2fvz6aA-pJMLT-XCa3XGHzHjQLnDZ9TCf1PbbsOy2o1TcLqVL0-dhN8csKqOjQUPOD0tDljW4WY32kMX2jDL5dJ7ei_LQs0FIgnD_pDizGlVjhA4OjXXbLEPUP56Aw)

### Step 6 :Edit your chart

* Choose the attributes you would like to visualize under the subsectionGROUP BY and chose the metrics.

![](https://lh3.googleusercontent.com/aP_M60aeTci9nGghSI2rpxvmcuGco6sxHCjsYyv1h9mm0utrpboSzg7LuCVJFnnS60wSp6CCb972G8Q5RkMsMhG201WsOYAMCa5tTBbV-HH7-3k9vAXYhRZqS4VR945mQjnxpFy0V2LaDb827w)

![](https://lh3.googleusercontent.com/h-SHsV_Q-M1u82zcqbkiYrXIu9IE50vUiLcUzeBPL8nbSX-H7JIP2GaZNTqIXL7aQ0uLmQyAKY0QMSoN2twar-OL82PzFz2Z37PaCdxPL3KDK46ui-mWobtFtbhcRyY6L-T_3bkklgNnC8VSwQ)

* You can modify other aspects such as Colors in the section Style.
* Save it.

**Example:**![](https://lh3.googleusercontent.com/MHZRkK46cqR8xAj5sbWrJcdvWUFe5e0_Aj1MTaZ1oPO2w4T31sXSA9oGV5RfwbbkFADF5x1UnJMrLvLGQ6-qwVeOMeW48-DV0MUFGmOhk8m7s4DazGMXxBBOJkjehFcS_3w1RDLpcKaPwzDEPg)

### Step 7 :Create a Dashboard

* You can create a Dashboard while saving a chart.

![](https://lh5.googleusercontent.com/DbenfTb_Y0kTkY5KnlSsYOyMdO_JWAwJWlnhhIJj8QbmK-ckQFVYt_cgdlYnebqJRmSQbVuKBb7oqoip5Z0IuNFhw2xsor-nU-Of-ln3VyqCy8vubbkZpwVApzEs1SFYqHch0o7TgJR4eU1TYg)

* Or go to the Dashboards section and click the “+” button.
* Choose a name and fill in the necessary rows.
* Select all the charts you want to display on the subsection Charts.

![](https://lh3.googleusercontent.com/2q9Nf36dJ1lDG12043iob3hlgHBmwBQadDgdzh3PzDL-D3ByQt8-9SfiThZUjq9qK0RAyl3aFMKpNH_5VI0pPkE1ViIIhkrTp16Vbw37OP-dtv0s4HrRW4XrCr3a2AB9asPbSZ1jH6EKGy7r2Q)

* You can position and resize each charts in the subsection Position JSON:
* slice\_id which can be found by going on the Chart section and clicking on the Chart then at the end of the URL, you can find the id in the form: "slice\_id"%3AXXX
* size\_x and size\_y which are for the dimension of the chart you want to display col and row which are for the position of the chart in the dashboard.
* The position and size of each Chart depend on each other so it has to be positioned correctly otherwise the dashboard would not be as we want.

**Example of Position JSON for a dashboard with one chart :**

`[{`

`"slice_id":"85",`

`"size_x":8,`

`"col":9,`

`"size_y":8,`

`"row":0`

`}]`

To change the color of a chart:

`{
"label_colors": {
"Girls": "#FF69B4",
"Boys": "#ADD8E6"
}`

* After saving it you can edit it anytime in the Dashboards section.

![](https://lh3.googleusercontent.com/1Ks9T2dRbXlWpFck4ztBclL-EPegqY-mYUJD7zVcZmaJQd1tJs1NBFmIh1DO66fOHXZZudClQRJmyeBqZRyo3GDTCXL9b2mj-wiQ3hrmxv6O9eJcHW5uncJFUt0rgHBd4_7BAk0_gX1aGiXtMQ)

### Step 7 :Filter your Dashboard

* You can filter your dashboard using the chart Filter Box in your Dashboard.
* Create a chart of type Filter Box and chose the table to apply the filter

![](https://lh3.googleusercontent.com/WS6ZYRfoszq06p-hP2O6eRw8y15sDuIRWSqMMYvebfS-q2Fb95hDjrZU54JHM0Q35BsxVMcoCZEZd-9ltnisUgxknOOnxysL9oLh0A0qRfYLLgyc1iPYoMJi4GTnIEOPL_pv4JPRtP7QyNY3Pw)

* Select the right Table from the Database and the Attributes you want to filter in the subsection Filter controls and Metric.  

![](https://lh4.googleusercontent.com/oqqOFIS22MIagVrWU4PBRIrHkEs_f65AyIWqRQLphyCKlqzJI4QT6mC3JWK_LaIXB_BxWplwfnB1gzzxjb_D5I941sNZpDyvpa0eIZZceTKUwVGwbevt2CYa5Lo_s_2qNXMp2sxaYoNEkkcfrw)

* Add the Filter Box in the dashboard.
* You can even configure it in the JSON metadata section when you edit your dashboard if you want your filter to be applied on specifics charts and not all.

Example :

`{
"filter_immune_slices": [324, 65, 92],
"expanded_slices": {},
"filter_immune_slice_fields": {
"177": ["country_name", "__from", "__to"],
"32": ["__from", "__to"]
},
}`

The slices 324, 65 and 92 are not affected by any filter.

The slices 177 and 32 are not affected by the specified filters.

### Step 8 :Visualize the Dashboard

* Go to the Dashboards section and click on your dashboard.
* You can change the size of charts in the bottom right corner of each chart.

![](https://lh6.googleusercontent.com/PQ2LvDO86G9vgMD2UqacSHwlFXGiSLCmDg-JCnfvWAgsu3RkpVw8eTAAr61525sgOEy_4zUEf1RlY5WZJdeVi7RgTc43FqKzbgCdZqN3t9xKP65OqLPZ7eaqBm2ww5yZMHTcH_GH27enmjRyHw)

* You can also change directly on the dashboard the position of the charts.
* On the right, click on Edit the Dashboard

![](https://lh5.googleusercontent.com/_LRjzN7Afc7-TzcaXwoAfOJxIPOX6hwkJM6nzavDGa0Lou7TZnb2pjFqkmI-1vUDalxVQcn2a4vkOpIVNu_SkzWab02IOe6wQe0TDqxfE-2EGvTjA804Nm-COpLa_lgHfEnb_Xdkn1RzrVAFSQ)

* On the right of the chart you can now click the on icon “Move chart”

![](https://lh6.googleusercontent.com/BO17J_pkHUvR8SsfPiHvjzKcD0bezyT_8t4WauOt4HBmZpuz7r4Pkn4eMMBDzt9kS8ZGkFg8DI8Er_OCORqLK15z-AYH9X9puRcudzxWr5pjTL6Cj6j9nM0bb10KCrkdQg0ONLay5709K43lLw)

* After you have finished your edits, you can then save the dashboard on the Drop-down list “Actions” and then click on “Save”.

![](https://lh5.googleusercontent.com/_LRjzN7Afc7-TzcaXwoAfOJxIPOX6hwkJM6nzavDGa0Lou7TZnb2pjFqkmI-1vUDalxVQcn2a4vkOpIVNu_SkzWab02IOe6wQe0TDqxfE-2EGvTjA804Nm-COpLa_lgHfEnb_Xdkn1RzrVAFSQ)

## Security

Superset has the following default roles:

* **Admin**: Admins have all possible rights, including granting or revoking rights from other users and altering other people’s slices and dashboards.
* **Alpha**: The alpha role is for users who need permissions to add or alter tables in any databases. It is suitable for users who want to create new tables, charts, and dashboards
* **Gamma**: The gamma role is for users who need permissions to view and create charts and dashboards. These users will need customized roles that give them read permissions on data sources. Data source access only gives them view permissions on charts and dashboards, without any ability to alter them. But, they can create new charts for permitted data sources.
* **sql\_lab**: The sql\_lab role grants access to SQL Lab. Note that while `Admin` users have access to all databases by default, both `Alpha` and `Gamma` users need to be given access on a per database basis.
* **Public**: This role is used for unregistered users. By default, the public role has no permissions.
