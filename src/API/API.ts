import axios from "axios";

const instance = axios.create({
  baseURL: 'https://localhost:8080',
});

export const API = {
  getVariables: (dwhLink: string) => {
    const reqData = {
      source: dwhLink
    }

    const mockedVariables = {
      col_name1: 'Значение переменной 1',
      col_name2: ['Значение переменной 1 из массива 2',
                  'Значение переменной 2 из массива 2',
                  'Значение переменной 3 из массива 2'],
      col_name3: 'Значение переменной 3',
    }

    return instance.post('/data', reqData)
      .then((data) => mockedVariables)
      .catch((error) => mockedVariables);
  },

  sendInstruction: (template: string) => {
    const reqData = {
      template: template,
    }

    const mockedVariables = {
      instruction_id: 1,
      integrator_id: 2,
    }

    return instance.post('/instruction', reqData)
      .then((data) => mockedVariables)
      .catch((error) => mockedVariables);
  },

  sendActivity: (instruction_id: number, integrator_id: number, priority: number) => {
    const reqData = {
      instruction_id: instruction_id,
      template: integrator_id,
      priority: priority,
    }

    const mockedVariables = {
      activites_id: 1,
    }

    return instance.post('/instruction', reqData)
      .then((data) => mockedVariables)
      .catch((error) => mockedVariables);
  },

  sendTrigger: (activites_id: number) => {
    const reqData = {
      activites_id: activites_id,
      value: "* 12 * * 1-5 Asia/Yekaterinburg" //TODO values from trigger form
    }

    const mockedVariables = {
      id: 10,
    }

    return instance.post('/instruction', reqData)
      .then((data) => mockedVariables)
      .catch((error) => mockedVariables);
  }
}