import './App.css'

import { useState } from "react";
import ticketsData from "./data/tickets";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Add to Task Status
  const handleAddToTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warning("Ticket already added!");
      return;
    }

    setInProgress([...inProgress, ticket]);
    toast.success("Added to Task Status!");
  };

  // Complete Ticket
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    toast.success("Ticket marked as completed!");
  };

  return (
    <>
      <Navbar />

      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <TicketList
            tickets={tickets}
            handleAddToTask={handleAddToTask}
          />
        </div>

        <TaskStatus
          inProgress={inProgress}
          resolved={resolved}
          handleComplete={handleComplete}
        />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;