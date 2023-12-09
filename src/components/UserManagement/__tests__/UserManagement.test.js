import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockRootState } from '../../../../__mocks__/mockInitialState';
import { renderer, cleanup, fireEvent } from '../../../helpers/testHelper';
import { BrowserRouter } from "react-router-dom";
import UserManagement from '../UserManagement';

const middleware = [thunk];
const mockStore = configureStore(middleware);
afterEach(cleanup);
function renderComponent(prop, useCaseSpecificStore) {
    return renderer(
        <BrowserRouter>
            <UserManagement />
        </BrowserRouter> , mockStore(useCaseSpecificStore));
}

describe('User Management Page', () => {
    jest.mock('react-router-dom', () => ({
        useHistory: () => ({
          push: jest.fn(),
        }),
      }));
    test('Collection Pagqwe Render', () => {
                const wrapper = renderComponent({}, mockRootState);
                expect(wrapper).toBeTruthy();
    });

    test('check card box ', () => {
            const wrapper = renderComponent({}, mockRootState);
            const button=wrapper.getByTestId('card-div-um-0')      
            expect(button).toBeTruthy();
        });

    test('check acccount cirles', () => {
        const wrapper = renderComponent({}, mockRootState);
        const button=wrapper.getByTestId('AccountCircleIcon')      
        expect(button).toBeTruthy();
    });
    test('Check Swipe Roles', () => {

        const wrapper = renderComponent({}, mockRootState);
        const button=wrapper.getByTestId('AccountCircleIcon') 
        fireEvent.click(button)
        const changeSubmit = wrapper.getByText(/Swipe Role/i);
        fireEvent.click(changeSubmit)
        expect(changeSubmit).toBeTruthy();
    });
    test('Check change password', () => {

        const wrapper = renderComponent({}, mockRootState);
        const button=wrapper.getByTestId('AccountCircleIcon') 
        fireEvent.click(button)
        const changeSubmit = wrapper.getByText(/Change Password/i);
        fireEvent.click(changeSubmit)
        expect(changeSubmit).toBeTruthy();
    });    
});
