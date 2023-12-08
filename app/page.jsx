import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      Home | Go to&nbsp;
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Homepage;
