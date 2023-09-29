import pgService from "../services/pg.services.js"
const con = new pgService();
export const getProductModel = async ()=>{


return await con.connection.query("SELECT * FROM producto");

}
export const createProductModel = async (nombre, precio) => {

  const query = {
    text: "INSERT INTO producto (nombre, precio) VALUES ($1, $2) RETURNING *",
    values: [nombre, precio],
  };
  const result = await con.connection.query(query);

  return query;
};
export const deleteProductModel = async (productId) => {
console.log(productId)
  const query = {
    text: "DELETE FROM producto WHERE id = $1",
    values: [productId],
  };
  await con.connection.query(query);
};
export const updateProductModel = async (productId, nombre, precio) => {

  const query = {
    text: "UPDATE producto SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *",
    values: [nombre, precio, productId],
  };

  const result = await con.connection.query(query);

  return result;
};