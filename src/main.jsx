import React from 'react'
import ReactDOM from 'react-dom/client'

import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Container from "./Container.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
          <Container/>
        </DndProvider>

    </React.StrictMode>,
)
