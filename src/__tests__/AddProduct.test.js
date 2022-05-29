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
        //const spy = spy();
        const wrapper = mount(<AddProduct />);
        const check = wrapper.find('form');
        check.simulate("click");
        const flash = wrapper.find("#flash");
        cexpect(flash).to.have.length(1);
        //console.log(wrapper.state('flash'));
        //cexpect(check.find('').equals("Please enter name and price")).toBeTruthy();
    });
})
