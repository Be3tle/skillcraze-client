import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://i.postimg.cc/bNXFcBwf/rm373batch13-085.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-4xl font-bold py-3 md:py-10 uppercase leading-tight">
            Weave Your Future with{' '}
            <span className="text-blue-400">SkillCraze!</span>
          </h1>

          <Link to="/#courses">
            <button className="btn bg-blue-500 text-white hover:bg-blue-700 border-0">
              Explore Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
