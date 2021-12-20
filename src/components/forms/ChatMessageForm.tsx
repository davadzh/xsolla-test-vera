// @ts-ignore
import {Input, Textarea} from 'xsolla-uikit';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {FieldWrapper} from "../CustomUI/FieldWrapper";
import {FormButtons} from "../CustomUI/FormButtons";
import {setActivityType, setSubmittedObject, setSubmittedObjectType} from "../../store/reducers/activityReducer";

export const ChatMessageForm = () => {
  const dispatch = useAppDispatch();
  const variables = useAppSelector(state => state.activity.variables);
  const [chatMessageValues, setChatMessageValues] = useState({
    webhook: '',
    text: ''
  });

  const onSubmit = () => {
    const objectForSend: any = {}
    for (const [key, value] of Object.entries(chatMessageValues)) {
      objectForSend[key] = value.replace('<var>', '{{')
        .replace('</var>', '}}')
    }

    dispatch(setSubmittedObject(objectForSend));
    dispatch(setSubmittedObjectType('chatMessage'));
  }

  //TODO take out the logic
  useEffect(() => {
    if (variables && variables.length !== 0) {
      let hasChanges: boolean = false;
      let newValues: any = {}
      for (const [key, value] of Object.entries(chatMessageValues)) {
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
        setChatMessageValues(newValues)
    }
  }, [chatMessageValues])

  return (
    <>
      <FieldWrapper label={'Webhook'}
                    input={<Input name="message-webhook"
                                  input={{
                                    value: chatMessageValues.webhook,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setChatMessageValues({...chatMessageValues, webhook: e.target.value})
                                  }}
                                  size={'sm'}/>}
      />

      <FieldWrapper label={'Text'}
                    input={<Textarea name="message-text"
                                     input={{
                                       value: chatMessageValues.text,
                                       onChange: (e: ChangeEvent<HTMLTextAreaElement>) => setChatMessageValues({...chatMessageValues, text: e.target.value})
                                     }}
                                     size={'sm'}
                    />}
      />

      <FormButtons onSubmit={onSubmit} onCancel={() => dispatch(setActivityType(undefined))}/>
    </>
  );
};
