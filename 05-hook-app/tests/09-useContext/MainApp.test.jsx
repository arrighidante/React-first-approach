import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";


describe('Tests on <MainApp />', () => { 
    
    test('should show the homepage', async () => {
        
        // const router = createMemoryRouter(routes, { initialEntries: ['/'] })
        // render( <MemoryRouter>
        //     <UserContext.Provider value={{ user: {id:1, name:'Dante'}}}>
        //          <MainApp />
        //     </UserContext.Provider>
        // </MemoryRouter>
        // const RouterWrapper = ({ children }) => (
        //     <MemoryRouter initialEntries={['/']}>
        //       {children}
        //     </MemoryRouter>
        //   );
        // , { wrapper: BrowserRouter }

        render(<MemoryRouter >
                <MainApp/> 
                </MemoryRouter>);

        expect(screen.getByText('HomePage')).toBeTruthy();
        
    });

    test('should show the LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
            );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    })
   
 })