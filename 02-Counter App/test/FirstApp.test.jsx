import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp />', () => { 
    
    test('Should show the title on a h1', () =>{
        const title = `Hi, I'm Dante`;

        const {container, getByText, getByTestId} = render( <FirstApp title={title} />);

        expect( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Should show the subtitle send by props', () => {
        const title = `Hi, I'm Dante`;
        const subTitle = 'This is a subtitle';

        const { getAllByText } = render( 
        <FirstApp   
            title={title} 
            subTitle={subTitle} />
        );

        expect(getAllByText(subTitle).length).toBe(2);
    
    });
});