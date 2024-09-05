import React, { useState } from "react";

export const LandingPage = (onLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };
  return (
    <div>
      <div>
        <div>
          <h1>Agenda de contactos</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
