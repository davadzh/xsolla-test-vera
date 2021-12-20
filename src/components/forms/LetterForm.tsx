// @ts-ignore
import {Input, Textarea} from 'xsolla-uikit';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {FieldWrapper} from "../CustomUI/FieldWrapper";
import {FormButtons} from "../CustomUI/FormButtons";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {
  ILetterValues,
  setActivityType,
  setSubmittedObject,
  setSubmittedObjectType
} from "../../store/reducers/activityReducer";


export const LetterForm = () => {
  const dispatch = useAppDispatch();
  const variables = useAppSelector(state => state.activity.variables);
  const [letterValues, setLetterValues] = useState<ILetterValues>({
    from: '',
    to: '',
    subject: '',
    text: '',
  });

  const onSubmit = () => {
    const objectForSend: any = {}
    for (const [key, value] of Object.entries(letterValues)) {
      objectForSend[key] = value.replace('<var>', '{{')
                                .replace('</var>', '}}')
    }

    dispatch(setSubmittedObjectType('letter'))
    dispatch(setSubmittedObject(objectForSend))
  }

  //TODO take out the logic
  useEffect(() => {
    if (variables && variables.length !== 0) {
      let hasChanges: boolean = false;
      let newValues: any = {}
      for (const [key, value] of Object.entries(letterValues)) {
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
        setLetterValues(newValues)
    }
  }, [letterValues])

  return (
    <>
      <FieldWrapper label={'From'}
                    input={<Input name="letter-from"
                                  input={{
                                    value: letterValues.from,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setLetterValues({...letterValues, from: e.target.value})
                                  }}
                                  size={'sm'}
                                  type={'email'}
                    />}
      />

      <FieldWrapper label={'To'}
                    input={<Input name="letter-to"
                                  input={{
                                    value: letterValues.to,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setLetterValues({...letterValues, to: e.target.value})
                                  }}
                                  size={'sm'}
                                  type={'email'}
                    />}
      />

      <FieldWrapper label={'Subject'}
                    input={<Input name="letter-subject"
                                  input={{
                                    value: letterValues.subject,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setLetterValues({...letterValues, subject: e.target.value})
                                  }}
                                  size={'sm'}/>}
      />

      <FieldWrapper label={'Text'}
                    input={<Textarea name="letter-text"
                                     input={{
                                       value: letterValues.text,
                                       onChange: (e: ChangeEvent<HTMLTextAreaElement>) => setLetterValues({...letterValues, text: e.target.value})
                                     }}
                                     size={'sm'}
                    />}
      />

      <FormButtons onSubmit={onSubmit} onCancel={() => dispatch(setActivityType(undefined))}/>
    </>
  );
};
