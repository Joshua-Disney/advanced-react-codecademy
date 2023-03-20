// import React from "react";
// import { ContactsList } from "./ContactsList";

// export const ContactsSection = ({ contacts, name }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ContactsList contacts={contacts} />
//     </div>
//   );
// };



import React from "react";
import { ContactsList } from "./ContactsList";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const ContactsSection = ({ contacts, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ThemeSwitcher />
      <ContactsList contacts={contacts} />
    </div>
  );
};
