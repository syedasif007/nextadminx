"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const itemsPerPage = 3;

  const hasPrev = itemsPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemsPerPage * (parseInt(page) - 1) + itemsPerPage < count;

  const handlePagination = (cmd) => {
    cmd === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.btnPrev}`}
        disabled={!hasPrev}
        onClick={() => handlePagination("prev")}
      >
        Previous
      </button>
      <button
        className={`${styles.button} ${styles.btnNext}`}
        disabled={!hasNext}
        onClick={() => handlePagination("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
