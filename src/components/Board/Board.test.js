import React from 'react';
import Board from '../../src/js/containers/Board';
import { CSS_CLASSES, NUM_OF_CELLS } from '../../src/js/constants/constants';

describe('<Board />', () => {
    it('should render proper markup', () => {
        const props = {
            boardStatus: [0, 2, 1, 0, 0, 0, 0, 0, 0],
            handleCellClick: () => {},
        };
        const wrapper = shallow(<Board { ...props } />);

        expect(wrapper.hasClass('container')).to.equal(true);
        expect(wrapper.type()).to.equal('section');
        const board = wrapper.find('.container');
        const items = board.children();

        expect(items).to.have.length(NUM_OF_CELLS);

        items.forEach((item, idx) => {
            expect(item.props().status).to.be.equal(props.boardStatus[idx]);
            expect(item.props().id).to.be.equal(idx);
            expect(item.props().handleCellClick).to.be.equal(props.handleCellClick);
            expect(item.props().cssClasses).to.be.equal(CSS_CLASSES[idx]);
        });
    });
});
