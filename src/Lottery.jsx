import { useState } from "react";
import { genTiket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Ticket.css";

export default function Lottery({ n, winingsum }) {
   let [ticket, setTicket] = useState(genTiket(n));
   let isWining = sum(ticket) === 15;

   let buyTicket = () => {
      setTicket(genTiket(n));
   };

   return (
      <div className="lottery">
         <h1>Lottery Game</h1>
         <p className="p-text">You Win Lottery Game If Sum of Buy New Ticket is 15</p>
         <Ticket ticket={ticket} />
         <button onClick={buyTicket} className="btn-class">Buy New Ticket</button>
         <h3 className="win-text">{isWining && "Congratulations , you won!"}</h3>
      </div>
   )
}