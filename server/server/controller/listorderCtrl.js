import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const listorder = await req.context.models.listorder.findAll();
    return res.send(listorder);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const listorder = await req.context.models.listorder.create({
      table_num: req.body.table_num,
      o_food_name: req.body.o_food_name,
      o_food_qty: req.body.o_food_qty,
      total_qty: req.body.total_qty,
      total_price: req.body.total_price,
    });
    return res.send(listorder);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findAll,
  create,
};
