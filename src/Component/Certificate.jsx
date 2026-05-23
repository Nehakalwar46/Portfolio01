import { useState } from "react";
import Quiz from "./image/Quiz.pdf";
import SV from "./image/SV.pdf";
import computer from "./image/computer.pdf";
import office365 from "./image/office365.pdf";

function Certi() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gray-700 text-white p-6">
      <h1 className="text-center text-3xl mb-6">Certificates</h1>

      <div className="flex flex-wrap justify-center gap-4">
       
        <div className="text-center">
          <button
            onClick={() => setOpen(open === "quiz" ? null : "quiz")}
            className="bg-black px-4 py-2 rounded"
          >
            Quiz Certificate
          </button>

          {open === "quiz" && (
            <iframe
              src={Quiz}
              title="Quiz Certificate"
              className="w-64 h-80 mt-2 border"
            ></iframe>
          )}
        </div>

       
        <div className="text-center">
          <button
            onClick={() => setOpen(open === "sv" ? null : "sv")}
            className="bg-black px-4 py-2 rounded"
          >
            SV Certificate
          </button>

          {open === "sv" && (
            <iframe
              src={SV}
              title="SV Certificate"
              className="w-64 h-80 mt-2 border"
            ></iframe>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => setOpen(open === "office365" ? null : "office365")}
            className="bg-black px-4 py-2 rounded"
          >
            Office365 Certificate
          </button>

          {open === "office365" && (
            <iframe
              src={office365}
              title="Office365 Certificate"
              className="w-64 h-80 mt-2 border"
            ></iframe>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => setOpen(open === "computer" ? null : "computer")}
            className="bg-black px-4 py-2 rounded"
          >
            Computer Certificate
          </button>

          {open === "computer" && (
            <iframe
              src={computer}
              title="Computer Certificate"
              className="w-64 h-80 mt-2 border"
            ></iframe>
          )}
        </div>

      </div>
    </section>
  );
}

export default Certi;