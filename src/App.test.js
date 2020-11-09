import React from 'react';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from './App';

import { fetchMissions as mockFetchMissions} from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test("render without errors", ()=>{
    render(<App/>);
});

test('fetches and renders mission data', async ()=> {
    render(<App/>);
    mockFetchMissions.mockResolvedValueOnce({
        data:[
            {mission_name: "Mission 1", mission_id:1},
            {mission_name: "Mission 2", mission_id:2}
        ]
    });


    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(()=>{
        console.log(mockFetchMissions.mock);
        const missions = screen.getAllByTestId("mission");
        expect(missions).toHaveLength(2);
    });
});