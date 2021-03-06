import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {expect as cexpect} from 'chai';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import ProductItem from '../components/ProductItem';

Enzyme.configure({ adapter: new Adapter() });


describe('<ProductItem/>', function() {
    const product = {
        name: "Test Item",
        email: "test@uw.edu",
        price: 12,
        description: "test description is correct",
        pid: 0,
        image: "test.png"
    }

    it('should have two image attached', function() {
        const wrapper = shallow(<ProductItem product={product}/>);
        cexpect(wrapper.find('img')).to.have.length(2);
    });

    it("should open modal state on click", function() {
        const wrapper = shallow(<ProductItem product={product}/>);
        wrapper.find(".card-image").simulate("click");
        expect(wrapper.find('Modal').prop('show')).toBeTruthy();
      });

    it("should close modal state after two clicks", function() {
        const wrapper = shallow(<ProductItem product={product}/>);
        wrapper.find(".card-image").simulate("click");
        wrapper.find(".card-image").simulate("click");
        expect(wrapper.find('Modal').prop('show')).toBeFalsy();
    });

    it("item fields are correct", function() {
        const wrapper = shallow(<ProductItem product={product}/>);
        expect(wrapper.find('b').text()).toBe("Test Item $12");
        expect(wrapper.find('Modal').prop('show')).toBeFalsy();
    });

    it("item fields are correct on Modal", function() {
        const wrapper = shallow(<ProductItem product={product}/>);
        wrapper.find(".card-image").simulate("click");
        expect(wrapper.find('ModalTitle[id="pName"]').text()).toBe("Test Item");
        expect(wrapper.find('div[id="pEmail"]').text()).toBe("test@uw.edu");
        expect(wrapper.find('div[id="pDescription"]').text()).toBe("test description is correct");
    });
})

