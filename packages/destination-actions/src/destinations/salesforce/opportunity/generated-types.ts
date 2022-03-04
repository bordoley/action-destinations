// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The Salesforce operation performed. The available operations are Create, Update or Upsert Lead records in Salesforce.
   */
  operation: string
  /**
   * The fields used to find Salesforce Lead records for updates. This is required if the operation is Update or Upsert.
   *
   *   Any field can function as a matcher, including Record ID, External IDs, standard fields and custom fields. On the left-hand side, input the Salesforce field API name. On the right-hand side, map the Segment field that contains the value.
   *
   *   If multiple records are found, no updates will be made. Please use fields that result in unique records.
   */
  traits?: {
    [k: string]: unknown
  }
  /**
   * Estimated total sale amount
   */
  amount?: string
  /**
   * Date when the opportunity is expected to close. This is required to create an opportunity.
   */
  close_date?: string
  /**
   * A text description of the opportunity.
   */
  description?: string
  /**
   * A name for the opportunity. This is required to create an opportunity.
   */
  name?: string
  /**
   * Current stage of the opportunity. This is required to create an opportunity. The Stage Name value must match available picklist values in the OpportunityStage object.
   */
  stage_name?: string
  /**
   *
   *   Additional fields to send to Salesforce. On the left-hand side, input the Salesforce field API name. On the right-hand side, map the Segment field that contains the value.
   *
   *   This can include standard or custom fields. Custom fields must be predefined in your Salesforce account and the API field name should have __c appended.
   *
   */
  customFields?: {
    [k: string]: unknown
  }
}