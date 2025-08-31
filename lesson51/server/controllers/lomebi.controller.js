export const getLomi = async (req, res) => {
  try {
    res.status(200).json({ name: "lomi", age: 10 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postLomi = async (req, res) => {
  try {
    const lomebi = await Lomi.create(req.body);
    res.status(201).json({ data: "post updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};