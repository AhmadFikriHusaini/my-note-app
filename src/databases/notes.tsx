let notes = [
  {
    id: 1,
    title: "HTML",
    desc: "belajar html",
    completed: false,
  },
  {
    id: 2,
    title: "CSS",
    desc: "belajar css",
    completed: true,
  },
  {
    id: 3,
    title: "JavaScript",
    desc: "belajar js",
    completed: false,
  },
  {
    id: 4,
    title: "React",
    desc: "belajar react",
    completed: true,
  },
  {
    id: 5,
    title: "React Native",
    desc: "belajar react native",
    completed: false,
  },
];

const getNotes = () => notes;

const getUnDoneNotes = () => notes.filter((note) => !note.completed);

const getDoneNotes = () => notes.filter((note) => note.completed);

const setNoteCompleted = (id: number) => {
  notes = notes.map((n) => {
    if (n.id === id) {
      return { ...n, completed: !n.completed };
    }
    return n;
  });
};

const getNoteById = (id: number) =>
  getNotes().find((note) => note.id === Number(id));

const addNote = (title, desc) => {
  const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
  notes = [...notes, { id, title, desc, completed: false }];
};

const editNote = (id, title, desc) => {
  notes = notes.map((n) => {
    if (n.id === parseInt(id)) {
      return {
        id: n.id,
        title,
        desc,
        completed: n.completed,
      };
    }
    return n;
  });
};

const deleteNote = (id: number) => {
  notes = notes.filter((note) => note.id !== id);
};

export {
  getNotes,
  getNoteById,
  deleteNote,
  addNote,
  editNote,
  getUnDoneNotes,
  getDoneNotes,
  setNoteCompleted,
};
