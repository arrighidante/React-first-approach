import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Tests on <LoginPage />', () => { 
    const user = {
        id: 1,
        name: 'Dante'
    };

    
    test('should show the component without the user', () => {

        render( 
        <UserContext.Provider value={{ user: null}}>
            <LoginPage/>
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });
  
    test('should call setUser when btn clicked', () => {
        
        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
            );
            screen.debug();
            const btnElement = screen.getByRole('button');
            fireEvent.click(btnElement);
            expect(setUserMock).toHaveBeenCalledWith({ 
               email: "samuel@jackson.com",
               id: 123,
               name: "Samuel"
            });
    });

    
 })