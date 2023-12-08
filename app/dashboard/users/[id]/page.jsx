import Image from "next/image";
import styles from "../../../ui/dashboard/users/viewUser/viewUser.module.css";

const ViewUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Devon Conway
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="Phone" />
          <label>Address</label>
          <textarea name="address" placeholder="Address" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ViewUserPage;
