import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./app/App.tsx";
import SearchPage from "./app/pages/SearchPage.tsx";
import ClientPage from "./app/pages/ClientPage.tsx";
import NewAccount from "./app/pages/NewAccount.tsx";
import { BulkAccountManagement } from "./app/pages/BulkAccountManager.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<SearchPage theme="dark" />} />
      <Route path="/client" element={<ClientPage />} />
      <Route path="/new-account" element={<NewAccount theme="dark" />} />
      <Route path="/account-management" element={<BulkAccountManagement />} />
    </Routes>
  </BrowserRouter>
);