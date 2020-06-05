# Testing Protocol

![image.png](https://storage.googleapis.com/slite-api-files-production/files/464978cc-fcfe-42a9-81c7-31f435bc8d4d/image.png)

## Test Coverage

We aim to maintain a high level of test coverage for all our source code. Our standards are:

* Over 95% for all backend code
* Over 90% for all frontend code

We will include all of the following tests as part of our coverage:

* Unit testing
* Integration testing
* Periodic load testing

## Automated Test Cases

We perform end-to-end testing on all our applications. The E2E automated test are written in [cypress](https://www.cypress.io/). The test are included as a check list in our CI/CD process; failure of tests results in a failure of the build. The test run also follow our dev cycle process.

* [Activity ATCs](https://github.com/hikaya-io/cypress-tests-activity):
  * _NB: We use mailsurp to test mail notification. Update the `mailslurp_inbox` env variable with our inbox id_
* Dots ATCs
* Circles ATCs

