import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp />', () => { 
    const title = 'Hello World';
    const subTitle = 'This is a subtitle';

    test('should match with the snapshot', () => { 
        const container = render( <FirstApp title="Hello World" /> );
        expect(container).toMatchSnapshot();
    })

    test('should show the message "Hello World"', () => { 
        render( <FirstApp title={title} /> );
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('should show h1 title ', () => { 
        render( <FirstApp title={title} /> );
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    })

    test('should show the subtitle send by props', () => {
        render( <FirstApp title={title} subTitle={subTitle} /> );
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
});