import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://i.postimg.cc/RF6JtLz8/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artific.jpg)',
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