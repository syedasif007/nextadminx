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
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  // console.log(users);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>
                <span className={`${styles.status} ${styles.active}`}>
                  {user.isActive ? "active" : "inactive"}
                </span>
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
