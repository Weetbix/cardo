/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  approved?: boolean | null,
  messageCategoryId: string,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  approved?: ModelBooleanInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  approved?: boolean | null,
  messageCategoryId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type CreateReportInput = {
  id?: string | null,
  reason: ReportReason,
  reportMessageId: string,
};

export enum ReportReason {
  INAPPROPRIATE = "INAPPROPRIATE",
  SPAM = "SPAM",
  OTHER = "OTHER",
}


export type ModelReportConditionInput = {
  reason?: ModelReportReasonInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
};

export type ModelReportReasonInput = {
  eq?: ReportReason | null,
  ne?: ReportReason | null,
};

export type UpdateReportInput = {
  id: string,
  reason?: ReportReason | null,
  reportMessageId?: string | null,
};

export type DeleteReportInput = {
  id?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  approved?: ModelBooleanInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  reason?: ModelReportReasonInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type SubmitMessageMutationVariables = {
  message: string,
  messageCategoryId: string,
};

export type SubmitMessageMutation = {
  submitMessage:  {
    __typename: "Message",
    id: string,
    message: string,
    approved: boolean | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        approved: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        approved: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        approved: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    message: string,
    approved: boolean | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    message: string,
    approved: boolean | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    message: string,
    approved: boolean | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport:  {
    __typename: "Report",
    id: string,
    reason: ReportReason,
    message:  {
      __typename: "Message",
      id: string,
      message: string,
      approved: boolean | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
      },
    },
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport:  {
    __typename: "Report",
    id: string,
    reason: ReportReason,
    message:  {
      __typename: "Message",
      id: string,
      message: string,
      approved: boolean | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
      },
    },
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport:  {
    __typename: "Report",
    id: string,
    reason: ReportReason,
    message:  {
      __typename: "Message",
      id: string,
      message: string,
      approved: boolean | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
      },
    },
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        approved: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      approved: boolean | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    message: string,
    approved: boolean | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport:  {
    __typename: "Report",
    id: string,
    reason: ReportReason,
    message:  {
      __typename: "Message",
      id: string,
      message: string,
      approved: boolean | null,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
      },
    },
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      reason: ReportReason,
      message:  {
        __typename: "Message",
        id: string,
        message: string,
        approved: boolean | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};
