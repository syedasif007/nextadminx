import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search User..."} />
        <Link href="/dashboard/users/add">
          <button className={styles.btnNewUser}>New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Devon Conway
              </div>
            </td>
            <td>devon99@gmail.com</td>
            <td>12.08.2023</td>
            <td>Admin</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                active
              </span>
            </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Peter Parker
              </div>
            </td>
            <td>peter.parker@gmail.com</td>
            <td>12.08.2023</td>
            <td>Manager</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                active
              </span>
            </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/view">
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
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Cole Palmer
              </div>
            </td>
            <td>palmer89@gmail.com</td>
            <td>12.08.2023</td>
            <td>Employee</td>
            <td>
              <span className={`${styles.status} ${styles.inactive}`}>
                inactive
              </span>
            </td>
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

export default UsersPage;
