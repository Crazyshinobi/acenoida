import React from "react";

const PriceList = () => {
  return (
    <>
      <h1 className="text-center font-body text-4xl font-bold mb-8">
        Price List
      </h1>

      <div className="overflow-x-auto m-14 p-4">
        <table className="table table-zebra text-center font-body">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Inventory Type</th>
              <th>Super Area</th>
              <th>Price*</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>3 BHK</td>
              <td>Coming Soon</td>
              <td>Price on Request</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>4 BHK</td>
              <td>Coming Soon</td>
              <td>Price on Request</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PriceList;
