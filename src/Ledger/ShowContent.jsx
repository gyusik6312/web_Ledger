import ReactModal from 'react-modal';

function ShowContent({modalOpen, closeModal })
{
    return (
    <div>
        <ReactModal
            style = {{content: {width: "300px", height: "600px",  margin: "auto", backgroundColor: "rgba(142, 138, 191, 0.86)"}, overlay: {backgroundColor: "rgba(119, 116, 116, 0.5)"}}}
            isOpen={modalOpen}
            onRequestClose = {closeModal}
            shouldCloseOnOverlayClick={true}>
        </ReactModal>
    </div>
    )
}

export default ShowContent;