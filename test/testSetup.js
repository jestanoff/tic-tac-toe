/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import chaiAsPromised from 'chai-as-promised';
import jsdom from 'jsdom';
import chaiEnzyme from 'chai-enzyme';
import 'mock-css-modules';

const exposedProperties = ['window', 'navigator', 'document'];

global.expect = expect;
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;

chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

global.document = jsdom.jsdom('<html><head></head><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};
