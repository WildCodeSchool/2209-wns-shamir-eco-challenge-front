import React from 'react';
import { render, screen } from "@testing-library/react"
import SignIn from "./SignIn"

describe('SignIn', ()=>{
    it('renders a button', ()=>{
        render(<SignIn />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})