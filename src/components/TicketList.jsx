import TicketCard from "./TicketCard";

const TicketList = ({ tickets, handleAddToTask }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          handleAddToTask={handleAddToTask}
        />
      ))}
    </div>
  );
};

export default TicketList;