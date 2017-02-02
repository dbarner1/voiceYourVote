// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS 
import '../dist/main.css';

//Routes
import routes from "./router";

// Render
render(routes, document.getElementById('globalContainer'));

