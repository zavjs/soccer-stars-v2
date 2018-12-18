const findByParam = (req, res) => {};

const getPlayer = (req, res) => {
  res.send("retrieving player");
};

const getPlayerById = (req, res) => {
  const { id } = req.params;
  res.send(`retrieving player of id ${id}`);
};

export default () => {
  return { findByParam, getPlayer, getPlayerById };
};
