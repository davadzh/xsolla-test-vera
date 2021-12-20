import {all, takeLatest, call, select, put} from "redux-saga/effects";
import {API} from "../../API/API";
import {
  ActivityType,
  ILetterValues, IMessageValues, ITicketValues,
  selectSubmittedObject, selectSubmittedObjectType,
  setIsTemplateSending,
  setSubmittedObject,
} from "../reducers/activityReducer";

const generateTemplate = (templateObject: ILetterValues | IMessageValues | ITicketValues, type: ActivityType): string => {
  let template: any = {};

  switch (type) {
    case 'letter':
      templateObject = templateObject as ILetterValues;
      template = {
        recipients: {
          content: {
            type: 'text/html',
            value: 'body',
          },
          to: {
            email: templateObject.to,
            name: '',
            substitutions: {
              key: 'body',
              value: templateObject.to,
            }
          },
          from: {
            email: templateObject.from,
            name: ''
          },
          subject: templateObject.subject,
          is_multiple: true
        }
      }
      break;
    case 'chatMessage':
      templateObject = templateObject as IMessageValues;
      template = {
        messages: {
          webhook: templateObject.webhook,
          message: {
            text: templateObject.text
          }
        }
      }
      break;
    case 'ticket':
      templateObject = templateObject as ITicketValues;
      template = {
        issues: {
          fields: {
            summary: templateObject.summary,
            description: templateObject.description,
            reporter: {
              accountId: templateObject.reporter,
            },
            assignee: {
              accountId: templateObject.assignee,
            }
          }
        }
      };
      break;
    default:
      break;
  }

  return JSON.stringify(template);
}

function* sendTemplate() {
  yield put({type: setIsTemplateSending.type, payload: true});

  const submittedObject: ILetterValues | IMessageValues | ITicketValues = yield select(selectSubmittedObject);
  const submittedObjectType: ActivityType = yield select(selectSubmittedObjectType);

  const template: string = yield call(generateTemplate, submittedObject, submittedObjectType);

  alert(template)

  const {instruction_id, integrator_id} = yield call(API.sendInstruction, template);

  const {activites_id} = yield call(API.sendActivity, instruction_id, integrator_id, 1);

  alert('New activity_id is ' + activites_id)

  yield put({type: setIsTemplateSending.type, payload: false});
}

export function* activitySaga() {
  yield all([
    takeLatest(setSubmittedObject.type, sendTemplate)
  ]);
}