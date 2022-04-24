import { Task } from './task';

const tmpDate = new Date();

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'First Task',
    description: 'This your first task to render',
    endDate: new Date(tmpDate.setDate(tmpDate.getDate() + 5)),
    isComplete: true,
  },
  {
    id: 2,
    title: 'Second Task',
    description: 'This your second task to render',
    endDate: new Date(tmpDate.setDate(tmpDate.getDate() + 5)),
    isComplete: false,
  },
  {
    id: 3,
    title: 'Third Task',
    description: 'This your third task to render',
    endDate: new Date(tmpDate.setDate(tmpDate.getDate() + 5)),
    isComplete: false,
  },
  {
    id: 4,
    title: 'Fourth Task',
    description: 'This your fourth task to render',
    endDate: new Date(tmpDate.setDate(tmpDate.getDate() + 5)),
    isComplete: false,
  },
  {
    id: 5,
    title: 'Fifth Task',
    description: 'This your fifth task to render',
    endDate: new Date(tmpDate.setDate(tmpDate.getDate() + 5)),
    isComplete: false,
  },
];
