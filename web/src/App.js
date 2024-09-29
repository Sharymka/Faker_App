import './App.css';
import {useEffect} from "react";
import SelectorComponent from "./components/SelectorComponent";
import {Card} from "@mui/material";
import FakerProvider from "./components/FakerContext";
import ErrorComponent from "./components/ErrorComponent";
import SeedComponent from "./components/SeedComponent";
import TableComponent from "./components/TableComponent";
import ButtonComponent from "./components/ButtonComponent";
import PaginationComponent from "./components/PaginationComponent";

function App() {
  return (
      <FakerProvider>
          <Card className=" mt-5 p-4 container">
              <div className="row gap-5 justify-content-center">
                  <SelectorComponent/>
                  <ErrorComponent/>
                  <SeedComponent/>
                  <ButtonComponent/>
              </div>
              <TableComponent/>
              <PaginationComponent/>
          </Card>
      </FakerProvider>
  );
}

export default App;
