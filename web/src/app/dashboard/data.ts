// Define the type for a project
export type ProjectType = {
  projectName: string;   // Name of the project
  status: 'In Progress' | 'Completed' | 'On Hold'; // Project status
  membersCount: number;   // Number of team members
  dueDate: string;          // Due date for the project
  priority: 'High' | 'Medium' | 'Low'; // Priority level
  tasksDone: {
      completed: number;  // Number of completed tasks
      total: number;      // Total number of tasks
  };
};

// Sample data array
export const projects: ProjectType[] = [
  {
      projectName: 'Project Alpha',
      status: 'In Progress',
      membersCount: 5,
      dueDate: ('2024-11-05'),
      priority: 'High',
      tasksDone: {
          completed: 3,
          total: 10,
      },
  },
  {
      projectName: 'Project Beta',
      status: 'Completed',
      membersCount: 4,
      dueDate: ('2024-10-15'),
      priority: 'Medium',
      tasksDone: {
          completed: 10,
          total: 10,
      },
  },
  {
      projectName: 'Project Gamma',
      status: 'On Hold',
      membersCount: 3,
      dueDate: ('2024-12-01'),
      priority: 'Low',
      tasksDone: {
          completed: 5,
          total: 15,
      },
  },
];
