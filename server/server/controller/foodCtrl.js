import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const food = await req.context.models.food.findAll()
        return res.send(food)
    } catch (error) {
        return res.status(404).send(error)
    }
}
export default {
  findAll,

}