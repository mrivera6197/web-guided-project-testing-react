import React from 'react';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from './App';

import { fetchMission as mockFetchMissions } from './api/fetchMissions';

test("render without errors", ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async ()=> {
    render(<App/>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(()=>{
        const missions = screen.getAllByTestId("mission");
        expect(missions).toHaveLength(10);
    });
});