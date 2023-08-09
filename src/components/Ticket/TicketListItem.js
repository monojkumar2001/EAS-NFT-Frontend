import React from "react";

const TicketListItem = () => {
  return (
    <>
      <tr>
        <td>
          <div className="ticket-id-item">
            <img src="/images/dashboard/ticket-id.svg" alt="" />
            <span>#SP_C5AE4</span>
          </div>
        </td>
        <td>Order Issue - Cancel Order</td>
        <td>
            <button className="ticket-pending-btn">
            Pending
            </button>
        </td>
        <td>@mdo</td>
      </tr>
    </>
  );
};

export default TicketListItem;
