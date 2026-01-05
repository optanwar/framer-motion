import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen p-6 w-full  bg-neutral-900" style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.25) 1px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        perspective: "1200px",
      }}>
      <h1 className="text-3xl font-bold mb-4 text-white">
        Hello, Framer Motion
      </h1>

      <ul className="list-disc pl-6 space-y-2 text-white">
        <li>
          <Link
            to="/basic"
            className="text-fuchsia-50 hover:underline"
          >
            Basic Button Example
          </Link>
        </li>
           <li>
          <Link
            to="/card"
            className="text-fuchsia-50 hover:underline"
          >
            Card Example
          </Link>
        </li>
            <li>
          <Link
            to="/card-advanced"
            className="text-fuchsia-50 hover:underline"
          >
            Advanced Card Example
          </Link>
        </li>
          <li>
          <Link
            to="/sidebar"
            className="text-fuchsia-50 hover:underline"
          >
            Sidebar Example
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
