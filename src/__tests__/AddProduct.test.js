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
        price: 100.0,
        description: "test",
        image: "test.png"
    }

    it('Failed submit, needs to include name and price', function() {
        const wrapper = shallow(<AddProduct />).dive().dive();
        const check = wrapper.find('form');
        check.simulate('submit', { preventDefault: () => {} });
        const flash = wrapper.find('.notification.is-danger');
        expect(flash.text()).toBe('Please enter name and price');
    });

    it('Successful submit, post was added correctly', function() {
        const wrapper = shallow(<AddProduct />).dive().dive();
        const name = 'Test Item';
        const price = 100.0;
        const check = wrapper.find('form');
        const nameCheck = check.find('input[id="testName"]');
        const priceCheck = check.find('input[id="testPrice"]');

        nameCheck.simulate('change', {
            target: {
              name: "name",  
              value: {name}
            }
          });

        priceCheck.simulate('change', {
            target: {
              name: "price",  
              value: {price}
            }
          });  
        
        // console.log(
        //     nameCheck.simulate('change', {
        //         target: {
        //           value: {name}
        //         }
        //       }).text()
        // );  
        //console.log(nameCheck.text());
          
        check.simulate('submit', { preventDefault: () => {} });
        const flash = wrapper.find('.notification.is-success');
        //expect(wrapper.find('.notification.is-danger').length).toEqual(1);
        expect(wrapper.find('.notification.is-success').length).toEqual(1);
        //expect(flash.text()).toBe('Product created successfully');
    });
})
