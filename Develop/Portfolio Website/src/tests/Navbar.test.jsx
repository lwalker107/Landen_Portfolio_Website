import { render, screen } from '@testing-library/react';

import Navbar from '../components/Navbar';


describe(Navbar, () => {
    it('renders with navigation tabs on screen ', () => {
        render(<Navbar />);

        screen.debug();
    })
})