interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #ddd",
      borderRadius: "5px",
    }}
  >
    <h1 style={{ color: "#333" }}>Welcome, {firstName}!</h1>
    <p style={{ fontSize: "16px", color: "#555" }}>{message}</p>
    <hr
      style={{ margin: "20px 0", border: "none", borderTop: "1px solid #ddd" }}
    />
  </div>
);
