// import { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

// // Initial state
// const initialState = {
//   transactions: [],
// };

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Actions
//   const deleteTransaction = (id: string) => {
//     dispatch({
//       type: "DELETE_TRANSACTION",
//       payload: id,
//     });
//   };

//   const addTransaction = (transaction: any) => {
//     dispatch({
//       type: "ADD_TRANSACTION",
//       payload: transaction,
//     });
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         deleteTransaction,
//         addTransaction,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
