"use client";

import { useContext } from "react";
import { contextProvider } from "../UserAuthentication/page";

export default function Child() {
  const user= useContext(contextProvider);
  if(!user)return null;
  const { isLoggedIn, username, login } = user;

  return (
    <main>
      {isLoggedIn ? (
        <h2>Welcome {username}!</h2>
      ) : (
        <>
          <h3>Please Login</h3> <button onClick={login}> Log In </button>
        </>
      )}
    </main>
  );
}
