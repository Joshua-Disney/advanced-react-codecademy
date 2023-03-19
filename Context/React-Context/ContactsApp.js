import React from "react";
import { ThemeContext } from "./ThemeContext"
import { ContactsSection } from "./ContactsSection";

const family = [
  {
    name: "Finn the Human"
  },
  {
    name: "Jake the Dog"
  }
];

const friends = [
  {
    name: "Marceline"
  },
  {
    name: "Princess Bubblegum"
  }
];

export const ContactsApp = () => {
  return (
    <ThemeContext.Provider value="light">
      <div>
        <h1>Contacts</h1>
          <ContactsSection contacts={family} name="Family" />
          <ContactsSection contacts={friends} name="Friends" />
      </div>
    </ThemeContext.Provider>
  );
};




// export const ContactsApp = () => {
//   return (
//     <div>
//       <h1>Contacts</h1>
//         <ThemeContext.Provider value="light">
//           <ContactsSection contacts={family} name="Family" />
//         </ThemeContext.Provider>
//         <ThemeContext.Provider value="dark">
//           <ContactsSection contacts={friends} name="Friends" />
//         </ThemeContext.Provider>
//     </div>
//   );
// };





// import React from "react";
// import { ContactsSection } from "./ContactsSection";
// import { ThemeArea } from "./ThemeContext";

// const family = [
//   {
//     name: "Finn the Human"
//   },
//   {
//     name: "Jake the Dog"
//   }
// ];

// const friends = [
//   {
//     name: "Marceline"
//   },
//   {
//     name: "Princess Bubblegum"
//   }
// ];

// export const ContactsApp = () => {
//   return (
//     <div>
//       <h1>Contacts</h1>
//       <ThemeArea initialTheme="light">
//         <ContactsSection contacts={family} name="Family" />
//       </ThemeArea>
//       <ThemeArea initialTheme="dark">
//         <ContactsSection contacts={friends} name="Friends" />
//       </ThemeArea>
//     </div>
//   );
// };
