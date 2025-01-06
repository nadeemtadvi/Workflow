const users = [
  {
    id: 1,
    firstname: "Aarav",
    email: "a@a.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a modern, responsive homepage design.",
        date: "2025-01-07",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve issue with user login on mobile devices.",
        date: "2025-01-06",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Documentation",
        description: "Add recent project changes to the user guide.",
        date: "2025-01-05",
        category: "Documentation",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Documentation",
        description: "Add recent project changes to the user guide.",
        date: "2025-01-05",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    firstname: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Payment Gateway",
        description: "Ensure all payment methods work correctly.",
        date: "2025-01-08",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Marketing Plan",
        description: "Draft a plan for the Q1 marketing strategy.",
        date: "2025-01-04",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    firstname: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Set Up Analytics",
        description: "Integrate Google Analytics into the website.",
        date: "2025-01-09",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Research Competitors",
        description: "Compile a report on competitors' features.",
        date: "2025-01-07",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy Staging Server",
        description: "Prepare the staging server for client testing.",
        date: "2025-01-03",
        category: "DevOps",
      },
    ],
  },
  {
    id: 4,
    firstname: "Vivaan",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize Database",
        description: "Improve database performance and reduce query time.",
        date: "2025-01-10",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Redesign Logo",
        description: "Create a new logo to match the brand guidelines.",
        date: "2025-01-05",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    firstname: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Conduct User Interviews",
        description: "Gather feedback from 10 key users about the product.",
        date: "2025-01-11",
        category: "User Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Issue",
        description: "Resolve the sticky navbar problem on mobile.",
        date: "2025-01-06",
        category: "Development",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  const admins = JSON.parse(localStorage.getItem("admins"));
  return { users, admins };
};
