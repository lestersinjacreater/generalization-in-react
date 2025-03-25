// filepath: c:\Users\User\Desktop\final year\predictions frontend\crop-yield-frontend\src\App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, SignIn, SignUp } from "@clerk/clerk-react";
import HomePage from './pages/landingpage/Home';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header>
      <SignedOut>
        {isHomePage && <SignInButton />}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}