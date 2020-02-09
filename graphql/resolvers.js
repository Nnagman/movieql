const lch = {
  name: "lch",
  age: "26",
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => lch
  }
};

export default resolvers;
