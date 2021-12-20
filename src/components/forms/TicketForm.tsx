// @ts-ignore
import {Input} from 'xsolla-uikit';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {FieldWrapper} from "../CustomUI/FieldWrapper";
import {setActivityType, setSubmittedObject, setSubmittedObjectType} from "../../store/reducers/activityReducer";
import {FormButtons} from "../CustomUI/FormButtons";

export const TicketForm = () => {
  const dispatch = useAppDispatch();
  const variables = useAppSelector(state => state.activity.variables);
  const [ticketValues, setTicketValues] = useState({
    summary: '',
    description: '',
    assignee: '',
    reporter: '',
  });

  const onSubmit = () => {
    const objectForSend: any = {}
    for (const [key, value] of Object.entries(ticketValues)) {
      objectForSend[key] = value.replace('<var>', '{{')
        .replace('</var>', '}}')
    }

    dispatch(setSubmittedObject(objectForSend))
    dispatch(setSubmittedObjectType('ticket'))
  }

  //TODO take out the logic
  useEffect(() => {
    if (variables && variables.length !== 0) {
      let hasChanges: boolean = false;
      let newValues: any = {}
      for (const [key, value] of Object.entries(ticketValues)) {
        let newValue = value;
        let words = value.split(' ');
        for (let word of words) {
          if (variables.includes(word)) {
            hasChanges = true;
            //TODO bug if there's more than 2 similar vars
            newValue = value.replace(word, `<var>${word}</var>`);
          }
        }
        newValues[key] = newValue
      }

      if (hasChanges)
        setTicketValues(newValues)
    }
  }, [ticketValues])

  return (
    <>
      <FieldWrapper label={'Summary'}
                    input={<Input name="ticket-summary"
                                  input={{
                                    value: ticketValues.summary,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setTicketValues({
                                      ...ticketValues,
                                      summary: e.target.value
                                    })
                                  }}
                                  size={'sm'}/>}
      />

      <FieldWrapper label={'Description'}
                    input={<Input name="ticket-description"
                                  input={{
                                    value: ticketValues.description,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setTicketValues({
                                      ...ticketValues,
                                      description: e.target.value
                                    })
                                  }}
                                  size={'sm'}/>}
      />

      <FieldWrapper label={'Assignee'}
                    input={<Input name="ticket-assignee"
                                  input={{
                                    value: ticketValues.assignee,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setTicketValues({
                                      ...ticketValues,
                                      assignee: e.target.value
                                    })
                                  }}
                                  size={'sm'}/>}
      />

      <FieldWrapper label={'Reporter'}
                    input={<Input name="ticket-reporter"
                                  input={{
                                    value: ticketValues.reporter,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setTicketValues({
                                      ...ticketValues,
                                      reporter: e.target.value
                                    })
                                  }}
                                  size={'sm'}/>}
      />

      <FormButtons onSubmit={onSubmit} onCancel={() => dispatch(setActivityType(undefined))}/>
    </>
  );
};
