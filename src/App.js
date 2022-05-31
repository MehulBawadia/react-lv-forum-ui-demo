import { useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-gray-100");
  }, []);

  return (
    <>
      <div className="bg-slate-700 h-2"></div>

      <Header />

      <main className="my-6 px-4">
        <section className="container mx-auto">
          <div className="w-full px-2 py-2 bg-white rounded border-b border-b-2 border-[#737373]">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex w-10 overflow-hidden">
                  <div className="text-base leading-normal text-gray-700">
                    24
                  </div>
                  <div className="text-gray-400 ml-1 -mt-0.5 flex flex-col">
                    <div className="h-1">
                      <i className="fas fa-caret-up"></i>
                    </div>
                    <div className="mt-0.5">
                      <i className="fas fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                <div className="flex w-10">
                  <div className="text-base leading-normal text-gray-700">
                    30
                  </div>
                  <div className="text-gray-400 text-xs ml-1 mt-1">
                    <i className="fas fa-comment"></i>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-sm text-slate-700 font-bold">
                  Why is Laravel Considered as one of the best PHP Framework?
                </div>

                <div className="flex mt-2 space-x-2">
                  <div className="px-2 text-xs rounded bg-gray-300">php</div>
                  <div className="px-2 text-xs rounded bg-gray-300">
                    laravel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
