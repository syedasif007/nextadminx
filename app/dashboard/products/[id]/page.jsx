import Image from "next/image";
import styles from "../../../ui/dashboard/products/viewProduct/viewProduct.module.css";

const ViewProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Gucci T-Shirt
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Product Name</label>
          <input type="text" name="productName" placeholder="Product Name" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Size" />
          <label>Description</label>
          <textarea name="description" placeholder="Description" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected>
              Kitchen
            </option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductPage;
