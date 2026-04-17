import { useState } from "react";
import Quiz from "./image/Quiz.pdf";
import SV from "./image/SV.pdf";
import computer from "./image/computer.pdf";
import office365 from "./image/office365.pdf";

function Certi() {
  const [open, setOpen] = useState(null);

  return (
    <section id="Certi" className="bg-gray-700 text-white p-6 space-y-6">
<h1 className="flex justify-center text-3xl md:text-4xl">Certificates</h1>
<div className="flex flex-wrap mx-40 gap-4">
      {/* Quiz */}
      <div>
        <button 
          onClick={() => setOpen(open === "quiz" ? null : "quiz")}
          className="bg-black px-4 py-2 rounded"
        >
          Quiz Certificate
        </button>

        {open === "quiz" && (
          <iframe src={Quiz} className="w-80 h-96 mt-2"></iframe>
        )}
      </div>

      {/* SV */}
      <div>
        <button 
          onClick={() => setOpen(open === "sv" ? null : "sv")}
          className="bg-black px-4 py-2 rounded"
        >
          SV Certificate
        </button>

        {open === "sv" && (
          <iframe src={SV} className="w-80 h-96 mt-2"></iframe>
        )}
      </div>

      {/* Office365 */}
      <div>
        <button 
          onClick={() => setOpen(open === "office365" ? null : "office365")}
          className="bg-black px-4 py-2 rounded"
        >
          Office365 Certificate
        </button>

        {open === "office365" && (
          <iframe src={office365} className="w-80 h-96 mt-2"></iframe>
        )}
      </div>

      {/* Computer */}
      <div>
        <button 
          onClick={() => setOpen(open === "computer" ? null : "computer")}
          className="bg-black px-4 py-2 rounded"
        >
          Computer Certificate
        </button>

        {open === "computer" && (
          <iframe src={computer} className="w-80 h-96 mt-2"></iframe>
        )}
      </div>
</div> 
    </section>
  );
}

export default Certi;