import type { Task, Column, Board } from "@prisma/client";

export type LocalTask = Omit<Task, "columnId" | "taskId" | "id"> & {
  tasks?: LocalTask[];
};

export type LocalColumn = Omit<Column, "boardId" | "id"> & {
  tasks: LocalTask[];
};

export type LocalBoard = Omit<Board, "id"> & {
  columns: LocalColumn[];
};

export const board: LocalBoard = {
  name: "Testing Board",
  description: "This is a test board",
  columns: [
    {
      name: "To Do",
      order: 1,
      tasks: [
        {
          title: "Build UI for onboarding flow",
          description: null,
          order: 1,
        },
        {
          title: "Build UI for search",
          description: null,
          order: 2,
        },
        {
          title: "Build settings UI",
          description: null,
          order: 3,
        },
        {
          title: "QA and test all major user journeys",
          description: null,
          order: 4,
        },
      ],
    },
    {
      name: "Doing",
      order: 2,
      tasks: [
        {
          title: "Design settings and search pages",
          description: null,
          order: 1,
        },
        {
          title: "Add account management endpoints",
          description: null,
          order: 2,
        },
        {
          title: "Design onboarding flow",
          description: null,
          order: 3,
        },
        {
          title: "Add search endpoints",
          description: null,
          order: 4,
        },
        {
          title: "Add authentication endpoints",
          description: null,
          order: 5,
        },
        {
          title:
            "Research pricing points of various competitors and trial different business models",
          description: null,
          order: 6,
        },
      ],
    },
    {
      name: "Done",
      order: 3,
      tasks: [
        {
          title: "Conduct 5 wireframe tests",
          description: null,
          order: 3,
        },
        {
          title: "Create wireframe prototype",
          description: null,
          order: 4,
        },
        {
          title: "Review results of usability tests and iterate",
          description: null,
          order: 5,
        },
        {
          title:
            "Create paper prototypes and conduct 10 usability tests with potential customerss",
          description: null,
          order: 6,
        },
      ],
    },
  ],
};
