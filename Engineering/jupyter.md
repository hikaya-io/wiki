# iPython/Jupyter Notebooks

# Useful libraries

This document summarizes recommended software libraries to be used for data analysis and visualization by the Hikaya team. While there may be cases where library selection needs to be context-dependent, every effort will be made to standardize libraries used across platforms for consistency of output and more efficient context-switching within team.

helper functions (py file): https://drive.google.com/file/d/1cLKwvVMt6fuY3ZwfMtHC2C0Th6crQiAZ/view?usp=sharing

## iPython/Jupyter libraries

    1. Analysis
        1. Pandas
            1. Very powerful library for creating and manipulating tables of data
            1. Can read/write data from many standard sources - CSV, Excel, JSON, SQL, etc.
            1. API reference: ![<u>http://pandas.pydata.org/pandas-docs/stable/api.html</u>](http://pandas.pydata.org/pandas-docs/stable/api.html)
        1. Numpy
            1. Library for array math and manipulation
            1. Many useful functions for performing operations on columns of Pandas dataframes
            1. API reference: ![<u>http://docs.scipy.org/doc/numpy-1.10.0/reference/</u>](http://docs.scipy.org/doc/numpy-1.10.0/reference/)
        1. Scikit-learn
            1. Library containing many machine learning algorithms
            1. May be useful down the line as we start working with bigger datasets and identify use cases for higher-level analysis and predictive modeling
            1. API reference: ![<u>http://scikit-learn.org/stable/modules/classes.html</u>](http://scikit-learn.org/stable/modules/classes.html)
        1. Requests
            1. Used for pulling data from Tola REST APIs or other REST APIs
            1. API reference: http://docs.python-requests.org/en/master/
    1. Visualization
        1. Bokeh
            1. Generates interactive HTML charts and graphs
            1. Large number of chart types supported by simple bokeh.charts API
            1. Like for the overall appearance of charts, zoom in/out/pan/resize capacity, and pop ups on hover over features
            1. API reference: ![<u>http://bokeh.pydata.org/en/latest/docs/reference.html</u>](http://bokeh.pydata.org/en/latest/docs/reference.html)
        1. Folium
            1. Mapping library build off of leaflet.js
            1. Creates nice interactive maps
            1. API reference: ![<u>https://folium.readthedocs.io/en/latest/</u>](https://folium.readthedocs.io/en/latest/)
        1. ggplot for python
            1. Ggplot

## JavaScript

    1. Analysis
    1. Visualization
        1. Chart.js
            1. API reference: ![<u>http://www.chartjs.org/docs/</u>](http://www.chartjs.org/docs/)
        1. Leaflet.js
            1. API reference: ![<u>http://leafletjs.com/reference.html</u>](http://leafletjs.com/reference.html)

## R

    1. Analysis
        1. Data.table
            1. For data transformation and merging
        1. Plyr
            1. For more data transformation
    1. Visualization
        1. ggplot2
            1. Used for most data visualizations in R (has a python equivalent: ![<u>https://github.com/yhat/ggplot</u>](https://github.com/yhat/ggplot))
        1. Hh
            1. Another common data viz package for more detailed chart types: ![<u>https://cran.r-project.org/web/packages/HH/index.html</u>](https://cran.r-project.org/web/packages/HH/index.html) 
        1. Lattice
            1. Focused on multivaries data viz: ![<u>https://cran.r-project.org/web/packages/lattice/index.html</u>](https://cran.r-project.org/web/packages/lattice/index.html) 
