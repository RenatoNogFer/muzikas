import { useState } from "react";
import { AddItem } from "../../../types/item";
import "./CreateProduct.css";

import Plus from "../assets/Plus.png"
import magnifyingGlass from "../assets/magnifying-glass.png"

export const CreateProduct = ({ createHandler }: any) => {
  const [formData, setFormData] = useState<Partial<AddItem>>({});

  const inputChangeHandler = (key: "picture" | "name" | "desc" | "price" | "inStock" | "supplierId" | "categories", value: any) => {
    const newValue = { ...formData };
    newValue[key] = value;

    setFormData(newValue);
  };

	return (
		<div className="createProduct-main-div">
      <div className="createProduct-right-header">
        <h2>Criar produto</h2>
        <div className="createProduct-line"/>
      </div>

      <div className="createProduct-content">
        <div className="createProduct-left-column">
          <label htmlFor="firstImg">
            <i>
              <img src={Plus}/>
            </i>
          </label>
          <input
            type="file" id="firstImg" accept=".png, .jpg, .jpeg"
            style={{ display: "none" }}
            onChange={(e) => inputChangeHandler("picture", e.target.value)}
            value={formData.picture}
          />
        </div>

        <div className="createProduct-right-column">
          <div className="createProduct-top">
            <div className="createProduct-input">
              <h4 className="createProduct-align-left">Nome do produto</h4>
              <input
                type="text"
                onChange={(e) => inputChangeHandler("name", e.target.value)}
                value={formData.name}
              />
            </div>
          </div>
          <div className="createProduct-bottom">
            <div>
              <h4 className="createProduct-align-left">Preço</h4>
              <input
                type="number"
                onChange={(e) => inputChangeHandler("price", e.target.value)}
                value={formData.price}
              />
            </div>
            <div>
              <h4 className="createProduct-align-left">Estoque</h4>
              <input
                type="number"
                onChange={(e) => inputChangeHandler("inStock", e.target.value)}
                value={formData.inStock}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="createProduct-last-content">
        <div className="createProduct-input">
          <h4 className="createProduct-align-left">Descrição</h4>
          <textarea
            placeholder="Insira aqui"
            onChange={(e) => inputChangeHandler("desc", e.target.value)}
            value={formData.desc}
          />
        </div>

        <div className="createProduct-insert-categories">
          <h4 className="createProduct-align-left">Inserir categorias</h4>
          <div className="createProduct-search-bar">
            <select
              onChange={(e) => inputChangeHandler("categories", e.target.value.split(",").map(Number))}
            >
              <option value={formData.categories?.join(",")}></option>
            </select>
          </div>

        </div>
      </div>

      <div className="createProduct-button">
        <button
          type="button"
          onClick={() => createHandler(formData)}
        >
          Cadastrar
        </button>
      </div>
    </div>
	);
};