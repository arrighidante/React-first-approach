import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
describe('Test on <CounterApp />', () => { 
    
    const initialValue= 10;

    test('should match the snapshot', () => { 
        const { container }= render( <CounterApp value={initialValue} /> );
        expect(container).toMatchSnapshot();
     })

    test('should have <CounterApp value={100} />', () => { 
        render( <CounterApp value={100} /> );
        expect(screen.getByText('100')).toBeTruthy();
     })

    test('should increment with the button +1', () => { 
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
     })

    test('should decrement with the button -1', () => { 
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
     })
    
     test('should reset the value with the reset button', () => { 
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        expect(screen.getByText('10')).toBeTruthy();
     })
 })