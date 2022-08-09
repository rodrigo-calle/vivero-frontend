import React, { useState } from "react";
import product from "../../../services/products";

const ProductForm: React.FC = () => {
    const [dataProduct, setDataProduct] = useState({
        name: "",
        description: "",
        category_id: 1,
        image: "",
    })

    const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any ) => {
        e.preventDefault();
        setDataProduct({
            ...dataProduct,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataProduct);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await product.createProduct(dataProduct);
            if(response.ok) 
                alert("Product created successfully");
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div className="product-form mt-5 container">
            <form onSubmit={handleSubmit}>
            <fieldset >
                <legend>Registar Producto</legend>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Nombre de Producto</label>
                    <input name="name" 
                        value={dataProduct.name}
                        autoComplete="off"
                        onChange={handleChangeProduct}
                        type="text"
                        id="" 
                        className="form-control"
                        placeholder=""
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción del Producto</label>
                    <textarea 
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder=""
                        rows={3}
                        name="description"
                        value={dataProduct.description}
                        onChange={handleChangeProduct}
                    />
                </div>

                <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">Categoría</label>
                <select id="disabledSelect" className="form-select">
                    <option>Selecciona la Categoría</option>
                </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Elegir image</label>
                    <input 
                        className="form-control" 
                        type="file"
                        id="image"
                        name="image"
                         />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </fieldset>
            </form>
        </div>
    );
}

export default ProductForm;