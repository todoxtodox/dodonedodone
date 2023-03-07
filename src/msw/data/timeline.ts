export interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
  pinnedAt: string | null;
}

export interface TimeBlock {
  id: string;
  startTime: string; // 'HH:mm'
  endTime: string; // 'HH:mm'
  todoList: Todo[];
}

export interface Timeline {
  date: string; // 'YYYY-MM-DD'
  timeBlockList: TimeBlock[];
}

const TIMELINE = [
  ['10:00', '12:00'],
  ['13:00', '15:00'],
  ['16:00', '18:00'],
  ['19:00', '21:00'],
];

const TODO = [
  {
    id: '1',
    content: '커피 마시기',
    isCompleted: false,
    pinnedAt: '2',
  },
  {
    id: '2',
    content: '커피 마시기',
    isCompleted: false,
    pinnedAt: '1',
  },
  {
    id: '3',
    content: '커피 마시기',
    isCompleted: false,
    pinnedAt: null,
  },
];

export const timeline = (date: Date): Timeline => ({
  date: new Date(date).toISOString(),
  timeBlockList: TIMELINE.map(([startTime, endTime], index) => ({
    id: `${index}`,
    startTime,
    endTime,
    todoList: TODO.filter((todo) => todo.pinnedAt === `${index}`),
  })),
});
