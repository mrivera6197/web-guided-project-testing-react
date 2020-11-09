import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionList from "./MissionsList";

test("renders without errors", ()=> {
    render(<MissionsList/>);
})