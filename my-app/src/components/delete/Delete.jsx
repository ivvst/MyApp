
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Delete = ({ onCancel, onConfirm }) => {
    const handleDeleteConfirmation = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          console.log('Result:', result); // Check the result in the console
          if (result.isConfirmed) {
            console.log('Confirmed!'); // Check if this log statement is reached
            onCancel();
            onConfirm();
          }
        });
      };

  return (
    <div className="overlay">
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
              onClick={handleDeleteConfirmation}
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
