// @ts-ignore
import {Input} from 'xsolla-uikit';
import React, {ChangeEvent} from 'react';
import {FieldWrapper} from "../CustomUI/FieldWrapper";
import {FormRow} from "../CustomUI/FormRow";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setDwhLink} from "../../store/reducers/dataReducer";


export const DataForm = () => {
  const dispatch = useAppDispatch();
  const {dwhLink} = useAppSelector(state => state.data);

  const changeDwhLink = (value: string) => {
    dispatch(setDwhLink(value));
  }

  return (
    <FormRow>
      <FieldWrapper label={'DWH Link'}
                    input={<Input name="dwh-link"
                                  input={{
                                    value: dwhLink,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => changeDwhLink(e.target.value)
                                  }}
                                  size={'sm'}/>}
      />
    </FormRow>
  );
};
