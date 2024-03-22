// Defining a functional component named Modal, which destructures props into id, header, body, footer, and onClose.
export default function Modal({ id, header, body, footer, onClose }) {
  // Returning JSX to render the Modal component.
  return (
    // Rendering a div with id set to the provided id or defaulting to "Modal", and assigning the class "modal".
    <div id={id || "Modal"} className="modal">
      {/* Rendering the modal content */}
      <div className="modal-content">
        {/* Rendering the header section */}
        <div className="header">
          {/* Rendering a clickable span with an 'x' icon to close the modal, onClick triggers the onClose function */}
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          {/* Rendering the header text, if provided, otherwise using a default "Header" text */}
          <h2>{header ? header : "Header"}</h2>
        </div>
        {/* Rendering the body section */}
        <div className="body">
          {/* Rendering the body content if provided, otherwise rendering a default body */}
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        {/* Rendering the footer section */}
        <div className="footer">
          {/* Rendering the footer content if provided, otherwise rendering a default "Footer" text */}
          {footer ? footer : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
}
