import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  phoneNumber: string;
  email: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>Новий клієнт, {firstName}!</h1>
    <p>Номер телефону: {phoneNumber}</p>
    <p>Email: {email}</p>
    {message && <p>Повідомлення: {message}</p>}
  </div>
);
