import React from "react";

const Table = ({ title, headers, data }) => {
  return (
    <div className="overflow-x-auto p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-center text-accent">
        {title}
      </h2>
      <table className="table-auto w-full border-collapse">
        <thead className="bg-accent">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-secondary px-4 py-2 text-left font-semibold text-lightText"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-secondary">
              {Object.values(row).map((value, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-300 px-4 py-2 text-dark"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
