# Jupyter

## iPython/Jupyter Notebooks

## Useful libraries

This document summarizes recommended software libraries to be used for data analysis and visualization by the Hikaya team. While there may be cases where library selection needs to be context-dependent, every effort will be made to standardize libraries used across platforms for consistency of output and more efficient context-switching within team.

helper functions \(py file\): [https://drive.google.com/file/d/1cLKwvVMt6fuY3ZwfMtHC2C0Th6crQiAZ/view?usp=sharing](https://drive.google.com/file/d/1cLKwvVMt6fuY3ZwfMtHC2C0Th6crQiAZ/view?usp=sharing)

### iPython/Jupyter libraries

1. Analysis
   1. Pandas
      1. Very powerful library for creating and manipulating tables of data
      2. Can read/write data from many standard sources - CSV, Excel, JSON, SQL, etc.
      3. API reference: ![&amp;lt;u&amp;gt;https://pandas.pydata.org/pandas-docs/stable/api.html&amp;lt;/u&amp;gt;](https://pandas.pydata.org/pandas-docs/stable/api.html)
   2. Numpy
      1. Library for array math and manipulation
      2. Many useful functions for performing operations on columns of Pandas dataframes
      3. API reference: ![&amp;lt;u&amp;gt;https://docs.scipy.org/doc/numpy-1.10.0/reference/&amp;lt;/u&amp;gt;](https://docs.scipy.org/doc/numpy-1.10.0/reference/)
   3. Scikit-learn
      1. Library containing many machine learning algorithms
      2. May be useful down the line as we start working with bigger datasets and identify use cases for higher-level analysis and predictive modeling
      3. API reference: ![&amp;lt;u&amp;gt;https://scikit-learn.org/stable/modules/classes.html&amp;lt;/u&amp;gt;](https://scikit-learn.org/stable/modules/classes.html)
   4. Requests
      1. Used for pulling data from Tola REST APIs or other REST APIs
      2. API reference: [https://docs.python-requests.org/en/master/](https://docs.python-requests.org/en/master/)
2. Visualization
   1. Bokeh
      1. Generates interactive HTML charts and graphs
      2. Large number of chart types supported by simple bokeh.charts API
      3. Like for the overall appearance of charts, zoom in/out/pan/resize capacity, and pop ups on hover over features
      4. API reference: ![&amp;lt;u&amp;gt;https://bokeh.pydata.org/en/latest/docs/reference.html&amp;lt;/u&amp;gt;](https://bokeh.pydata.org/en/latest/docs/reference.html)
   2. Folium
      1. Mapping library build off of leaflet.js
      2. Creates nice interactive maps
      3. API reference: ![&amp;lt;u&amp;gt;https://folium.readthedocs.io/en/latest/&amp;lt;/u&amp;gt;](https://folium.readthedocs.io/en/latest/)
   3. ggplot for python
      1. Ggplot

### JavaScript

1. Analysis
2. Visualization
   1. Chart.js
      1. API reference: ![&amp;lt;u&amp;gt;https://www.chartjs.org/docs/&amp;lt;/u&amp;gt;](https://www.chartjs.org/docs/)
   2. Leaflet.js
      1. API reference: ![&amp;lt;u&amp;gt;https://leafletjs.com/reference.html&amp;lt;/u&amp;gt;](https://leafletjs.com/reference.html)

### R

1. Analysis
   1. Data.table
      1. For data transformation and merging
   2. Plyr
      1. For more data transformation
2. Visualization
   1. ggplot2
      1. Used for most data visualizations in R \(has a python equivalent: ![&amp;lt;u&amp;gt;https://github.com/yhat/ggplot&amp;lt;/u&amp;gt;](https://github.com/yhat/ggplot)\)
   2. Hh
      1. Another common data viz package for more detailed chart types: ![&amp;lt;u&amp;gt;https://cran.r-project.org/web/packages/HH/index.html&amp;lt;/u&amp;gt;](https://cran.r-project.org/web/packages/HH/index.html) 
   3. Lattice
      1. Focused on multivaries data viz: ![&amp;lt;u&amp;gt;https://cran.r-project.org/web/packages/lattice/index.html&amp;lt;/u&amp;gt;](https://cran.r-project.org/web/packages/lattice/index.html) 

