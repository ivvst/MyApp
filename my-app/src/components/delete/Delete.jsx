import React from 'react';
import "./delete.css";
import Button from 'react-bootstrap/Button';


const Delete = ({ onCancel, onConfirm }) => {
    const handleConfirm = () => {
        onConfirm();
        onCancel();
    };


    return (
        <div className="overlay">

            {console.log(onCancel)}
            <div className="confirm-container">
                <header className="headers">
                    <h2>Are you sure you want to delete this ship?</h2>
                    <Button onClick={onCancel} variant="success">Close</Button>


                </header>
                <div className="actions">
                    <div id="form-actions">
                        <button
                            id="action-save"
                            className="btn"
                            type="button"
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Delete;


