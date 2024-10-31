import MainPage from "./components/MainPage";
import { useState } from "react";

function App() {
  const [mortgage_details, set_mortgage_details] = useState({
    mortgage_amount: 0,
    mortgage_term: 0,
    interest_rate: 0,
    mortgage_type: "Repayment",
  });

  function saveData() {
    const output_text = `mortgage_details: ${JSON.stringify(mortgage_details)}`;
    alert(output_text);
  }

  function handleMortgageAmountChange(e) {
    set_mortgage_details({
      ...mortgage_details,
      mortgage_amount: e.target.value,
    });
  }
  function handleMortgageTermChange(e) {
    set_mortgage_details({
      ...mortgage_details,
      mortgage_term: e.target.value,
    });
  }
  function handleInterestRateChange(e) {
    set_mortgage_details({
      ...mortgage_details,
      interest_rate: e.target.value,
    });
  }
  function handleMortgageTypeChange(e) {
    set_mortgage_details({
      ...mortgage_details,
      mortgage_type: e.target.value,
    });
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-3 h-screen w-screen">
        <div className="p-3">
          <div className="mb-3 ">Mortgage Calculator</div>
          <text>Mortgage Amount</text>

          <form>
            <label>
              Name:
              <input
                type="text"
                name="mortgage_amount"
                className="bg-slate-300 m-3 p-1"
                value={mortgage_details.mortgage_amount}
                onChange={handleMortgageAmountChange}
              />
            </label>
          </form>

          <div className="grid grid-cols-2">
            <form>
              <label>
                Mortgage term:
                <input
                  type="text"
                  name="mortgage_term"
                  className="bg-slate-300 m-3 p-1"
                  value={mortgage_details.mortgage_term}
                  onChange={handleMortgageTermChange}
                />
              </label>
            </form>
            <form>
              <label>
                Interest rate:
                <input
                  type="text"
                  name="interest_rate"
                  className="bg-slate-300 m-3 p-1"
                  value={mortgage_details.interest_rate}
                  onChange={handleInterestRateChange}
                />
              </label>
            </form>
          </div>

          <form className="grid">
            <text className="mb-3">Mortgage type</text>
            <label>
              Repayment:
              <input
                type="radio"
                name="mortgage_type"
                value="Repayment"
                checked={mortgage_details.mortgage_type === "Repayment"}
                onChange={handleMortgageTypeChange}
                className="bg-slate-300 m-3 p-1"
              />
            </label>
            <label>
              Interest only:
              <input
                type="radio"
                name="mortgage_amount"
                value="Interest only"
                checked={mortgage_details.mortgage_type === "Interest only"}
                onChange={handleMortgageTypeChange}
                className="bg-slate-300 m-3 p-1"
              />
            </label>
          </form>

          <button className="bg-slate-300 p-3 flex gap-3" onClick={saveData}>
            <text>Test</text>
            <text>Test</text>
          </button>
        </div>
        <div className="bg-slate-500 p-3">Image</div>
      </div>
    </>
  );
}

export default App;
