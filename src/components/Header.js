import React from "react";

const Header = () => {
  return (
    <header className="px-4 pt-2">
      <div className="container mx-auto">
        {/* Mobile Navigation */}
        <div className="block md:hidden flex items-center justify-between">
          <button type="button" className="text-2xl text-slate-700 text-bold">
            <i className="fas fa-bars" />
          </button>

          <div>
            <a href="/" className="text-2xl text-slate-700 text-bold">
              <i className="fas fa-question-circle"></i>
            </a>
          </div>

          <div>
            <img
              src="https://source.unsplash.com/random/120x120/?avatar"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
