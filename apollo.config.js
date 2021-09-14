module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagname: "gql",
    service: {
      name: "motion-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
