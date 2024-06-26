const menu = require("../../models/menu");

const createMenu = async (req, res) => {
  const { dish_code, name, category, description, unit, price, discount } =
    req.body;

  const newMenu = new MenuItem({
    dish_code,
    name,
    category,
    description,
    unit,
    price,
    discount,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  });

  try {
    await newMenu.save();
    res.status(201).send("Món ăn đã được tạo thành công!");
  } catch (err) {
    res.status(500).send(err);
  }
};

const menuList = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
    createMenu,
    menuList
}
