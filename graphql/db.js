export const people = [
  {
    id: "0",
    name: "lch",
    age: "26",
    gender: "male"
  },
  {
    id: "1",
    name: "ach",
    age: "25",
    gender: "female"
  },
  {
    id: "2",
    name: "bch",
    age: "24",
    gender: "male"
  },
  {
    id: "3",
    name: "cch",
    age: "23",
    gender: "female"
  },
  {
    id: "4",
    name: "dch",
    age: "22",
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
