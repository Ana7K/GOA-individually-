export const getVefxvi = async (req, res) => {
  try {
    res.status(200).json({ name: "vefxvi", age: 5 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postVefxvi = async (req, res) => {
  try {
    res.status(201).json({ data: "post updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};