# R Markdown

## Use case

We would like to explore how R Markdown can help our clients develop data-driven narrative reports. These reports must:

- Be able to perform mail merge (using placeholders that can reference a data source to populate)
- Can create a word document or PDF that can be exported and shared by our clients
- Be able to replace Newdea reports (report builder)

## Definition

![**<u>Mail merge</u>**](https://en.wikipedia.org/wiki/Mail_merge) is a software operation describing the production of multiple (and potentially large numbers of) documents from a single template form and a structured data source. The letter may be sent out to many “recipients” with small changes, such as a change of address or a change in the greeting line.

Requirements:

- Ability to create document templates that can be reused/adapted for different clients
  - ![<u>https://www.reed.edu/data-at-reed/software/R/markdown_multiple_reports.html</u>](https://www.reed.edu/data-at-reed/software/R/markdown_multiple_reports.html)
  - ![<u>https://www.reed.edu/data-at-reed/resources/R/markdown_loop_example.html</u>](https://www.reed.edu/data-at-reed/resources/R/markdown_loop_example.html)
- Ability to generate Word and PDF documents
- Ability to perform “mail merge” for key data in the document:
  - ![<u>https://www.rostrum.blog/2018/06/26/mail-merge/</u>](https://www.rostrum.blog/2018/06/26/mail-merge/)
  - ![<u>https://github.com/matt-dray/mail-merge-2018</u>](https://github.com/matt-dray/mail-merge-2018)
  - ![<u>https://www.r-bloggers.com/mail-merge-with-rmarkdown/</u>](https://www.r-bloggers.com/mail-merge-with-rmarkdown/)
