# R Markdown

## Use case

We would like to explore how R Markdown can help our clients develop data-driven narrative reports. These reports must:

* Be able to perform mail merge \(using placeholders that can reference a data source to populate\)
* Can create a word document or PDF that can be exported and shared by our clients
* Be able to replace Newdea reports \(report builder\)

## Definition

![\*\*&amp;lt;u&amp;gt;Mail merge&amp;lt;/u&amp;gt;\*\*](https://en.wikipedia.org/wiki/Mail_merge) is a software operation describing the production of multiple \(and potentially large numbers of\) documents from a single template form and a structured data source. The letter may be sent out to many “recipients” with small changes, such as a change of address or a change in the greeting line.

Requirements:

* Ability to create document templates that can be reused/adapted for different clients
  * ![&amp;lt;u&amp;gt;https://www.reed.edu/data-at-reed/software/R/markdown\_multiple\_reports.html&amp;lt;/u&amp;gt;](https://www.reed.edu/data-at-reed/software/R/markdown_multiple_reports.html)
  * ![&amp;lt;u&amp;gt;https://www.reed.edu/data-at-reed/resources/R/markdown\_loop\_example.html&amp;lt;/u&amp;gt;](https://www.reed.edu/data-at-reed/resources/R/markdown_loop_example.html)
* Ability to generate Word and PDF documents
* Ability to perform “mail merge” for key data in the document:
  * ![&amp;lt;u&amp;gt;https://www.rostrum.blog/2018/06/26/mail-merge/&amp;lt;/u&amp;gt;](https://www.rostrum.blog/2018/06/26/mail-merge/)
  * ![&amp;lt;u&amp;gt;https://github.com/matt-dray/mail-merge-2018&amp;lt;/u&amp;gt;](https://github.com/matt-dray/mail-merge-2018)
  * ![&amp;lt;u&amp;gt;https://www.r-bloggers.com/mail-merge-with-rmarkdown/&amp;lt;/u&amp;gt;](https://www.r-bloggers.com/mail-merge-with-rmarkdown/)
