const bcrypt = require("bcryptjs");

const plainPassword = "atikul";
const storedHash =
  "$2a$10$naMlRZrs/YhjH5o.gD.9JeEcB4fShWLRUNdx/hOji93sVrFZbtHHm";

const testPasswordHash = async () => {
  const salt = await bcrypt.genSalt(10);
  console.log("Generated Salt:", salt);

  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  console.log("Manually hashed password:", hashedPassword);

  const isValidPassword = await bcrypt.compare(plainPassword, storedHash);
  console.log("Password comparison result:", isValidPassword);
};

testPasswordHash();
