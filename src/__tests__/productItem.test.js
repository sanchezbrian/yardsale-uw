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
        price: 0,
        description: "test",
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
})

