const validate = require("./validation.utill");

//Validate bus  data
test("Validate  budID  With Correct Data", () => {
  const data = {
    busNumber: "avs-2343",
    length: "45",
    departure: "wadduwa",
    destination: "colmbo",
    route: "galleroad",
    seats: "34",
  };
  expect(validate.BusSchema.validateAsync(data)).resolves.toEqual(data);
});
