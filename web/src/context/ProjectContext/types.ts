export interface Task {
  id: string;
  name: string;
  status: string;
  assignedUser: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

export interface ProjectContextType {
  id: string;
  name: string;
  mode: "VIEW" | "EDIT";
  boards: Board[];
  // addBoard: (board: Board) => void;
  // updateName: (newName: string) => void;
}

export const defaultNewTask: Task = {
  id: "0",
  name: "Unnammed Task",
  status: "",
  assignedUser: "",
};

export const defaultNewColumn: Column = {
  id: "0",
  name: "Untitled Column",
  tasks: <Task[]>[],
};

export const defaultNewBoard: Board = {
  id: "0",
  name: "Untitled Board",
  columns: <Column[]>[{ ...defaultNewColumn }],
};

export const defaultNewProject: ProjectContextType = {
  id: "0",
  name: "Untitled Project",
  mode:"EDIT",
  boards: <Board[]>[{ ...defaultNewBoard }],
};
