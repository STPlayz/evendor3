import React, {useEffect} from 'react';
import './App.css';
// import { client } from "./ApolloClient/client";
// import {ApolloProvider, gql} from "@apollo/client";
import ForYou from "./Destinations/For-You";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddProduct from "./Destinations/AddProduct";
import Wishlist from "./Destinations/Wishlist";
import Search from "./Components/Search/Search";

function App() {

  // const getData = () => {
  //   client.query({
  //     query: gql`
  //               query GetLocations {
  //                   locations {
  //                       id
  //                       name
  //                       description
  //                       photo
  //                   }
  //               }
  //           `,
  //   }).then((r: any) => console.log(r));
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
      <>
        {/*<ApolloProvider client={client}>*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ForYou />}/>
            <Route path="/add-product" element={<AddProduct />}/>
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
        {/*</ApolloProvider>*/}
      </>
  )
}

export default App;
