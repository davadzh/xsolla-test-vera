import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";

export type ActivityType = 'letter' | 'chatMessage' | 'ticket';

export interface ITicketValues {
  summary: string,
  description: string,
  assignee: string,
  reporter: string,
}

export interface ILetterValues {
  from: string,
  to: string,
  subject: string,
  text: string,
}

export interface IMessageValues {
  webhook: string,
  text: string,
}

type IActivityValues = ITicketValues | ILetterValues | IMessageValues;

// Define a type for the slice state
interface IActivityState {
  variables?: Array<string>;
  activityType?: ActivityType;
  submittedObject?: IActivityValues;
  submittedObjectType?: ActivityType;
  isSending: boolean;
}

// Define the initial state using that type
const initialState: IActivityState = {
  variables: undefined,
  activityType: undefined,
  submittedObject: undefined,
  submittedObjectType: undefined,
  isSending: false,
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setVariables: (state, {payload}: PayloadAction<Array<string>>) => {
      state.variables = payload;
    },
    setActivityType: (state, {payload}: PayloadAction<ActivityType | undefined>) => {
      state.activityType = payload;
    },
    setSubmittedObject: (state, {payload}: PayloadAction<IActivityValues>) => {
      state.submittedObject = payload;
    },
    setSubmittedObjectType: (state, {payload}: PayloadAction<ActivityType>) => {
      state.submittedObjectType = payload;
    },
    setIsTemplateSending: (state, {payload}: PayloadAction<boolean>) => {
      state.isSending = payload;
    }
  },
})

export const { setVariables, setActivityType, setSubmittedObject, setIsTemplateSending, setSubmittedObjectType } = activitySlice.actions

export const selectSubmittedObject = (state: RootState) => state.activity.submittedObject;
export const selectSubmittedObjectType = (state: RootState) => state.activity.submittedObjectType;

export default activitySlice.reducer