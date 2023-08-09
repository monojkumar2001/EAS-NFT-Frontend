import React from "react";
import TicketNewModel from "./TicketNewModel";
import "../../Style/ticket.css"
const Ticket = () => {
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <div className="ticket-header-item">
          <div className="ticket-header-left-item">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="ticket-create-new-item">
              <TicketNewModel />
            </div>
          </div>
        </div>
        <div className="ticket-item-content">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ticket ID</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Ticket Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
         
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
