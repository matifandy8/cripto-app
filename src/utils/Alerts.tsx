import "./Alerts.css";

export const AlertSuccess = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className="success">
      <div className="alert-success">
        <strong>Success! </strong> {text}
      </div>
    </div>
  );
};
export const AlertError = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className="error">
      <div className="alert-error">
        <strong></strong> {text}
      </div>
    </div>
  );
};
