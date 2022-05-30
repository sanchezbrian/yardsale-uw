import { render, screen } from '@testing-library/react';
import App from '../App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddProduct from '../components/AddProduct';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {expect as cexpect} from 'chai';
//import { spy } from 'sinon';


Enzyme.configure({ adapter: new Adapter() });

describe('<AddProduct />', function() {
    const product = {
        name: "Test Item",
        price: 0,
        description: "test",
        image: "test.png"
    }

    it('Failed submit, should have name but no price', function() {
        const wrapper = shallow(<AddProduct />).dive().dive();
        const check = wrapper.find('form');
        check.simulate('submit', { preventDefault: () => {} });
        const flash = wrapper.find('.notification.is-danger');
        expect(flash.text()).toBe('Please enter name and price');
    });
})
