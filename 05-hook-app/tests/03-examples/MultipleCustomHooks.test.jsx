import { render, screen } from "@testing-library/react";
import { MultipleCustomhooks } from "../../src/03-examples/MultipleCustomhooks";
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');

describe('Test on <MultipleCustomHooks />', () => { 
    
    test('should show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        });

        render( <MultipleCustomhooks />)
        expect( screen.getByText('Loading ...') );
        const buttonPrev = screen.getByRole('button', {name: 'Anterior'});
        const buttonNext = screen.getByRole('button', {name: 'Siguiente'});

        expect( buttonPrev ).toBeTruthy();
        expect( buttonNext ).toBeTruthy();
    });


 })