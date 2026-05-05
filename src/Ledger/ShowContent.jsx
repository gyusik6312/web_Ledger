import ReactModal from 'react-modal';
import {useState} from "react";
import "./ShowContent.css";

ReactModal.setAppElement("#root");
function ShowContent({modalOpen, closeModal, date, fetchedData, selectedItems})
{
    const [title, setTitle] = useState("title");
    const [amount, setAmount] = useState(0);
    const [content, setContent] = useState("content");
    
    function changetitle(e)
    {
        setTitle(e.target.value);
    }

    function changeAmount(e)
    {
        setAmount(e.target.value);
    }

    function changeContent(e)
    {
        setContent(e.target.value);
    }

    function handleOnClick()
    {
        fetch("http://localhost:5000/api/ledger", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ledger_date: date,
                ledger_title: title,
                ledger_content: content,
                amount: amount,
                user_ID: 1
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("추가 완료", data);
            fetchedData();
            closeModal();
        })
        .catch(err => {
            console.error("에러", err);
        });
    }

    function handleDelete(id) {
        fetch(`http://localhost:5000/api/ledger/${id}`, {
         method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
            fetchedData();
        })
        .catch(err => console.error(err));
    }

    return (
    <div>
        <ReactModal
            className="modalContent"
            overlayClassName="modalOverlay"
            isOpen={modalOpen}
            onRequestClose = {closeModal}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={false}>
            <h3>{date}</h3>

            {selectedItems.map(item => (
                <div key={item.ledger_ID}>
                    <p>제목: {item.ledger_title}</p>
                    <p>내용: {item.ledger_content}</p>
                    <p>금액: {item.amount}</p>

                    <button onClick={() => handleDelete(item.ledger_ID)}>삭제</button>
                    <hr />
                </div>
            ))}
            
            <input type="text" onChange={changetitle} placeholder = "title"/>
            <input type="text" onChange={changeAmount} placeholder = "amount"/>
            <input type="text" onChange={changeContent} placeholder = "content"/>
            <button onClick = {handleOnClick}>추가</button>
        </ReactModal>
    </div>
    )
}

export default ShowContent;