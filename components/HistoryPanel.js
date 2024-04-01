import React from "react";

const HistoryPanel = ({ history }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">History</h2>
      <ul className="list-decimal list-inside bg-white p-4 rounded-lg shadow-lg">
        {history.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
