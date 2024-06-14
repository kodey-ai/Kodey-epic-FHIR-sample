# kodey-epic-FHIR-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create express typescript api that uses external epic fhir apis.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Make sure you have dev branch. If not create one, kodey will be creating all the new branches against dev.
5. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
6. Execute the below prompt in the Kodey.ai chat UI
7. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - EPIC FHIR AllergyIntolerance.Search(R4) API Sample
```
    platform: github | bitbucket | azure | gitlab (choose one of these)
    
    repository-to-work-on: Kodey-epic-FHIR-sample
    
    branch name to create: feature/epic-fhir-sample

    Information to agent: Do as the steps below are defined one by one. You are working in <platform> repo so make sure to use tools related to <platform> repo. 
    NOTE: You should write the actual implementation of code not just comments.

    Scenario: You are working to develop an express typescript app which will make an api called "allergy_intolerance_search" which will request to an external api url and get the response back. Make sure to use typescript, express and other necessary libraries if necessary.
    
    Steps:

    step 1: Create a new branch with name and then do the steps below.

    step 2: Using knowledge base tool, Understand how to make request to the AllergyIntolerance.Search (R4) api endpoint , what are the parameters, headers, etc required to make the api call.

    step 3: Now create the express typescript app hat will actually run the server and expose an endpoint allergy_intolerance_search which when requested makes call the above mentioned external api to get the data. Make sure to read any credentials from env variables if required. Use axios library to make the request internally to the endpoint.
    Make sure to write properly formatted typescript code which is optimized and syntactically correct.

    step 4: Also in the same file as above, create a simple /index endpoint which returns "hello world" as response.

    step 5: Create package.json file which should include all the dependencies required . For your information use ts-node 10.9.2.

    step 6: Create tsconfig.js file with all necessary required configurations.

    step 7: Also create .gitignore file which will include the node_modules, env files and others.

    step 7: Update the readme file to include the detail about the app and also instruction on how to run the app.

    step 8: Create a new pull request from the above created branch with title "EPIC FHIR ALLERGY INTOLERANCE SEARCH".

    step 9: Update this issue to closed status
```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says step by step.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says step by step.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from jira and do as the description of the issue says step by step.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated.
