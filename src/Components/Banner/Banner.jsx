import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg?w=1800&t=st=1705486741~exp=1705487341~hmac=c32467229e543eef892f559bb04bd8b468a9204f79e341ed5c6a51dd8549a2d7)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold py-3 md:py-10 uppercase leading-tight">
            Ease Your Developer Life
          </h1>

          <Link to="/dashboard">
            <button className="btn bg-gray-500 text-white hover:bg-gray-700 border-0">
              Explore Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
