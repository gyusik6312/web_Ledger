import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState, useEffect } from 'react';
import ShowContent from "./ShowContent"

function Ledger()
{
  const [modalOpen, setModal] = useState(false);
  const [ledgerData, setData] = useState([]);
  function handleDateClick()
  {  
    setModal(true)
  }

  function closeModal()
  {
    setModal(false);
  }

  useEffect(()=>{
    fetch("http://localhost:5000/api/ledger")
      .then((res) => res.json())
      .then((data) => {setData(data)});
  }, [])

  return (
  <div style={{ width: "800px", margin: "0 auto" }}>
    <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      displayEventTime={false}
      events={ledgerData.map(item => ({
        title: `${item.ledger_title} - ${item.amount}`,
        date: item.ledger_date}))}> 
    </FullCalendar >

    <ShowContent modalOpen = {modalOpen} closeModal = {closeModal}></ShowContent>
  </div>
  );
}

export default Ledger;