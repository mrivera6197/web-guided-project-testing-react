import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionsList from "./MissionsList";

test("renders without errors", ()=> {
    render(<MissionsList missions={[]}/>);
});

test("rerenders correctly when passing in new mission data", ()=>{
    const {rerender} = render(<MissionsList missions={[]}/>);
    let missionObjects = screen.queryAllByTestId("mission");
    expect(missionObjects).toStrictEqual([]);

    
});