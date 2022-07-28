import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react'

import Checkbox from './Checkbox'

describe("Running Test for Marbella Input", () => {

  test("Check label in Checkbox", () => {
    render(<Checkbox label="Ox Checkbox" />)
    
    expect(screen.getByText('Ox Checkbox')).toHaveTextContent('Ox Checkbox');
  });

  //will fail.. needs work
  test("renders the Checkbox component", () => {
    render(<Checkbox id="tCheck" label="checkbox" checked={true}/>)
    const checkbox = screen.getByTitle('tCheck') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  });

});