import { getProductModel } from "../models/producto.models.js"
import { createProductModel } from "../models/producto.models.js";
import { deleteProductModel } from "../models/producto.models.js";
import { updateProductModel } from "../models/producto.models.js";

export const getProducto= async(req, res)=>{
    let data = await getProductModel();

    res.send(
        {
            succes: true,
            msg: "Producto aquì",
            data: data
        }
        )
}

export const createProducto = async (req, res) => {
    console.log("sadasd",   req.body);
    try {

      const nombre = req.body.nombre;
      const precio = req.body.precio;
  
     
      if (!nombre || !precio) {
        console.log(nombre, precio)
        return res.status(400).send({
          succes: false,
          msg: "Nombre y precio son campos obligatorios",
        });
      }
  
  
      const nuevoProducto = await createProductModel(nombre, precio);
  
      res.status(201).send({
        succes: true,
        msg: "Producto creado con éxito",
        data: nuevoProducto,
      });
    } catch (error) {
        console.log(error)
      res.status(500).send({
        succes: false,
        msg: "Error al crear el producto",
        error: error.message,
        
      });
    }
  };
  export const deleteProducto = async (req, res) => {
    try {
     
      const productId = req.params.id;
  
      if (!productId) {
        return res.status(400).send({
          success: false,
          msg: "ID de producto inválido",
        });
      }
  
    
      await deleteProductModel(productId);
  
      res.status(200).send({
        success: true,
        msg: "Producto eliminado con éxito",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error al eliminar el producto",
        error: error.message,
      });
    }
  };
  export const updateProducto = async (req, res) => {
    try {

      const productId = req.params.id;
      console.log(productId)

      const nombre = req.body.nombre;
      const precio = req.body.precio;


      if (!productId) {
        return res.status(400).send({
          success: false,
          msg: "ID de producto inválido",
        });
      }

      if (!nombre || !precio) {
        return res.status(400).send({
          success: false,
          msg: "Nombre y precio son campos obligatorios",
        });
      }

      const productoActualizado = await updateProductModel(productId, nombre, precio);

      if (!productoActualizado) {
        return res.status(404).send({
          success: false,
          msg: "Producto no encontrado",
        });
      }

      res.status(200).send({
        success: true,
        msg: "Producto actualizado con éxito",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error al actualizar el producto",
        error: error.message,
      });
    }
  };