import { createContext, useState } from "react";

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);
  return (
    <UserType.Provider
      value={{
        userId,
        setUserId,
        selectedCourse,
        setSelectedCourse,
      }}
    >
      {children}
    </UserType.Provider>
  );
};

export { UserContext, UserType };
