export const getMgeli = async (req, res) => {
  try {
    res.status(200).json({ name: "mgeli", age: 7 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postMgeli = async (req, res) => {
  try {
    res.status(201).json({ data: "post updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};