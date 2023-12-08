import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search Product..."} />
        <Link href="/dashboard/products/add">
          <button className={styles.btnNewProduct}>New Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Product</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Gucci T-Shirt
              </div>
            </td>
            <td>Gucci T-Shirt ( S | M | L | XL | XXL )</td>
            <td>$99</td>
            <td>12.09.2023</td>
            <td>100</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button
                    title="View"
                    className={`${styles.button} ${styles.btnView}`}
                  >
                    <MdOutlineRemoveRedEye size={20} />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="Edit"
                    className={`${styles.button} ${styles.btnEdit}`}
                  >
                    <MdOutlineEdit size={20} />
                  </button>
                </Link>
                <button
                  title="Delete"
                  className={`${styles.button} ${styles.btnDelete}`}
                >
                  <MdOutlineDelete size={20} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Gucci Trouser
              </div>
            </td>
            <td>Gucci Trouser ( S | M | L | XL | XXL )</td>
            <td>$99</td>
            <td>12.09.2023</td>
            <td>100</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button
                    title="View"
                    className={`${styles.button} ${styles.btnView}`}
                  >
                    <MdOutlineRemoveRedEye size={20} />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="Edit"
                    className={`${styles.button} ${styles.btnEdit}`}
                  >
                    <MdOutlineEdit size={20} />
                  </button>
                </Link>
                <button
                  title="Delete"
                  className={`${styles.button} ${styles.btnDelete}`}
                >
                  <MdOutlineDelete size={20} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Gucci Boxer
              </div>
            </td>
            <td>Gucci Boxer ( S | M | L | XL | XXL )</td>
            <td>$99</td>
            <td>12.09.2023</td>
            <td>100</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button
                    title="View"
                    className={`${styles.button} ${styles.btnView}`}
                  >
                    <MdOutlineRemoveRedEye size={20} />
                  </button>
                </Link>
                <Link href="/">
                  <button
                    title="Edit"
                    className={`${styles.button} ${styles.btnEdit}`}
                  >
                    <MdOutlineEdit size={20} />
                  </button>
                </Link>
                <button
                  title="Delete"
                  className={`${styles.button} ${styles.btnDelete}`}
                >
                  <MdOutlineDelete size={20} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
