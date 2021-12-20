// @ts-ignore
import {Input, Select} from 'xsolla-uikit';
import React, {ChangeEvent, useState} from 'react';
import {FormRow} from "../CustomUI/FormRow";
import {FieldWrapper} from "../CustomUI/FieldWrapper";


export const TriggerForm = () => {
  const [cronValue, setCronValue] = useState<string>('');
  const [timeZoneValue, setTimeZoneValue] = useState<string>('');

  return (
    <FormRow>
      <FieldWrapper label={'CRON Expression'}
                    input={<Input name="cron-expression"
                                  input={{
                                    value: cronValue,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => setCronValue(e.target.value)
                                  }}
                                  size={'sm'}
                                  placeholder={'NOT REALIZED'}
                    />}
      />

      <FieldWrapper label={'Time zone'}
                    input={<Select name="select"
                                   input={{
                                     value: timeZoneValue,
                                     onChange: (value: string) => setTimeZoneValue(value)
                                   }}
                                   options={[
                                     {label: 'Zone1', value: '1'},
                                     {label: 'Zone2', value: '2'},
                                     {label: 'Zone3', value: '3'},
                                   ]}
                                   placeholder={'NOT REALIZED'}
                    />}
      />
    </FormRow>
  );
};
