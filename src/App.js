import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
<>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Features />
      <Footer />
    
    </>
  );
}

export default App;
