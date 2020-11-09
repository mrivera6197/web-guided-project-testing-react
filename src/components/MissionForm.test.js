import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

test("MissionFrom renders correctly", ()=>{
    render(<MissionForm />);
});

test("renders message when isFetchingData is true", ()=>{

});

test("renders button when isFetchingData is false", ()=>{

});

test("calls getData when button is pressed", ()=>{

});