
import { Home } from "../pages/Home"
import { Register } from "../pages/Registration"
import { Login } from "../pages/Login"
import { Contacts } from "../pages/Contacts"
import { Layout } from "./Layout"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import { PrivateRoute } from "./PrivateRoute"; 
import { RestrictedRoute } from "./RestrictedRoute"; 
import { refreshUser } from "../redux/auth/operationsAuth"; 


export function App() {
  const dispatch = useDispatch();
  const refreshing =  useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return ( refreshing ? (<b>Refreshing ...</b>
  ): (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  ))
    // <>
    //   {/* <Section title="Phonebook">
    //     <ContactForm />
    //     <Filter/>
    //   </Section>
    //   <Section title="Contacts">
    //     <ContactList />
    //   </Section> */}
    // </>
      
};
