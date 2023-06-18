# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket breakdown.:

Ticket 1: Update database schema

- Description: Modify the Agent model and database schema to include a new field for the custom ID assigned by facilities.

- Requirements:

- The Agent model should have a new field to store the custom ID.

- The database schema should be updated to include the new field.

- Existing Agents should retain their internal database IDs.

- Time Estimate: 2-4 hours

- Implementation details:

- Add a new column to the Agents table in the database to store the custom ID.fd

- Perform database migrations to apply the schema changes.

Ticket 2: Make UI to update the ids.

- Requirements:

- Facilities should be able to view and edit custom IDs for their assigned Agents.

- Facilities should be able to save changes to custom IDs. Basically all the crud options.

- Effort Estimate: 2 days.

- Implementation Details:

- Create a new page or section in the Facility's interface to manage Agent custom IDs.

- Retrieve the list of assigned Agents for the Facility.

- Implement functionality to save changes to the custom IDs and update the database accordingly.

Ticket 3: Update report generation function

- Requirements:

- User should be able to provide the custom ID instead of the internal database ID for each Agent.

- The generated report should display the custom IDs correctly.

- Effort Estimate: 1 day.

- Implementation Details:

- Retrieve the custom IDs for the Agents assigned to each Shift in the `getShiftsByFacility` function.

- Update the `generateReport` function to use the custom IDs when generating the report.

- Replace the internal database IDs with the custom IDs in the appropriate sections of the report generation code.

Ticket 4: Validate for custom id changes

- Requirements:

- Validate that custom ids are unique within a Facility.

- When a custom ID is changed, update it for all associated Shifts and reports.

- Effort Estimate: 1 day

- Implementation Details:

- Add validation checks to ensure that custom IDs are unique.

- Update the report generation code to reflect the updated custom IDs.

Note: The effort estimates provided are rough approximations and can vary based on the complexity of the existing codebase.
