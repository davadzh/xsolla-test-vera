// @ts-ignore
import {Select} from 'xsolla-uikit';
import React from 'react';
import {FieldWrapper} from "../CustomUI/FieldWrapper";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {ActivityType, setActivityType} from "../../store/reducers/activityReducer";
import {ChatMessageForm} from "./ChatMessageForm";
import {LetterForm} from "./LetterForm";
import {TicketForm} from "./TicketForm";
import {FormSection} from "../CustomUI/FormSection";

export const ActivityForm = () => {
  const dispatch = useAppDispatch();
  const {activityType} = useAppSelector(state => state.activity);

  const changeActivityType = (value: ActivityType) => {
    dispatch(setActivityType(value));
  }

  return (
    <FormSection>
      <FieldWrapper label={'Type'}
                    input={<Select name="activity-type"
                                   input={{
                                     value: activityType,
                                     onChange: (value: ActivityType) => changeActivityType(value)
                                   }}
                                   options={[
                                     {label: 'Letter', value: 'letter'},
                                     {label: 'Message', value: 'chatMessage'},
                                     {label: 'Ticket', value: 'ticket'},
                                   ]}
                                   placeholder={'DnD doesn\'t realized, please, enter vars manually (vars temporary tagging instead of coloring)'}
                    />}
      />

      {activityType === 'chatMessage' && <ChatMessageForm />}
      {activityType === 'letter' && <LetterForm />}
      {activityType === 'ticket' && <TicketForm />}
    </FormSection>
  );
};