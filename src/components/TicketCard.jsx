import { toast } from "react-toastify";

const TicketCard = ({ ticket, handleAddToTask }) => {
  const getPriorityColor = (priority) => {
    if (priority === "High") return "text-red-500";
    if (priority === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  const getStatusBadge = (status) => {
    if (status === "Open")
      return (
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm flex items-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          Open
        </span>
      );

    if (status === "In-Progress")
      return (
        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          In-Progress
        </span>
      );
  };

  return (
    <div
      className="bg-white-500 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-md transition"
      onClick={() => {
        handleAddToTask(ticket);
        toast.success("Ticket added!");
      }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg text-black font-semibold">{ticket.title}</h2>
        {getStatusBadge(ticket.status)}
      </div>

      {/* Description */}
      <p className="text-gray-500 mb-4">{ticket.description}</p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex gap-4 items-center">
          <span>#{ticket.id}</span>
          <span
            className={`font-semibold ${getPriorityColor(ticket.priority)}`}
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>{ticket.customer}</span>
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
