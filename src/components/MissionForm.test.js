import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

test("MissionFrom renders correctly", ()=>{
    render(<MissionForm />);
});

test("renders message when isFetchingData is true", ()=>{
    //arrange: get component
    render(<MissionForm isFetchingData={true}/>);

    //act: get text that should appear
    const fetchingText = screen.queryByText(/we are fetching data/i);

    //assert: text is what we expect it to be
    expect(fetchingText).not.toBeNull();
    expect(fetchingText).toBeInTheDocument();
});

test("renders button when isFetchingData is false", ()=> {
    render(<MissionForm isFetchingData={false}/>);

    const button = screen.queryByRole("button");
    expect(button).not.toBeNull();

});

test("calls getData when button is pressed", ()=>{

});