const TaskStatus = ({ inProgress, resolved, handleComplete }) => {
  return (
    <div className="space-y-6">
      <div className=" p-4 rounded-xl shadow-sm">
        <h3 className="text-lg text-black font-semibold">Task Status</h3>

        {inProgress.length === 0 ? (
          <p className=" text-gray-600 ">Select a ticket to add to Task Status.</p>
        ) : (
          inProgress.map((ticket) => (
            <div key={ticket.id} className="mb-3 flex justify-between text-gray-600">
              <span>{ticket.title}</span>
              <button
                className="btn btn-success btn-xs"
                onClick={() => handleComplete(ticket)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="shadow-sm p-4 rounded-xl">
        <h3 className="text-lg text-black font-semibold">Resolved Tasks</h3>

        {resolved.length === 0 ? (
          <p className="text-gray-600 ">No resolved tasks yet.</p>
        ) : (
          resolved.map((ticket) => <p className="text-gray-600" key={ticket.id}>{ticket.title}</p>)
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
