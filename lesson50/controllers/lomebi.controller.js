export const getLomi = async () => {
  try {
    res.status(200).json({ name: "lomi", age: 10 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
