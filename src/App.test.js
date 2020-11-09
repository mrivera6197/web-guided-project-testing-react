import React from 'react';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from './App';

test("render without errors", ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async ()=> {
    render(<App/>);
    
});