import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProductsPage from './components/AllProductsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';
import NotFoundPage from './components/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/products" element={
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <AllProductsPage />
                </motion.div>
              } />
              <Route path="/product/:id" element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductDetails />
                </motion.div>
              } />
              <Route path="/login" element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <Login />
                </motion.div>
              } />
              <Route path="/register" element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <Register />
                </motion.div>
              } />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Dashboard />
                    </motion.div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Profile />
                    </motion.div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-product"
                element={
                  <PrivateRoute>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <AddProduct />
                    </motion.div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-product/:id"
                element={
                  <PrivateRoute>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <EditProduct />
                    </motion.div>
                  </PrivateRoute>
                }
              />
              <Route path="*" element={
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <NotFoundPage />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
          <Footer />
        </motion.div>
      </Router>
    </AuthProvider>
  );
};

export default App;