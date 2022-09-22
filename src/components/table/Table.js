import "./table.scss";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { Visibility } from "@material-ui/icons";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';

const ProductsTable = () => {

  const [ products, setProducts] = useState([]);

  useEffect(()=> {
    const fetchProducts = async() => {
      try {
      const res = await publicRequest.get("products/all")
      setProducts(res.data)
    } catch {}
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="productsContainer">
      <span className="productsTitle"> Our Products  </span>
      <div className="productsGrid">
        {products.map((product) => (
          <div className="productsFlex">
          <div className="productsInformations" key={product._id}>
            <p> {product._id.substring(1,8)} </p>
            <img
              src={product.img}
              className="productsImg"
            />
            <div className="productsName">
              <span className="productname">{product.title}</span>
            </div>
            <div className="productsButtons">
            <Button className="productsShow" variant="outlined" startIcon={<Visibility />}>
              Show
            </Button>
            <Button className="productsDelete" variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
