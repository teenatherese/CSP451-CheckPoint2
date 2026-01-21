/*
 WHY controllers exist:
 - Keeps logic out of route files
 - Makes code easier to test and maintain
*/

export const getUsers = (req, res) => {
  // Mock user data
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  res.status(200).json(users);
};

export const createUser = (req, res) => {
  const { name } = req.body;

  // Simple validation
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  // Mock user creation
  const newUser = {
    id: Date.now(),
    name,
  };

  res.status(201).json(newUser);
};
