import React from 'react';
import ScoresSection from '../../src/js/containers/ScoresSection';
import { DRAW, PLAYER_X, PLAYER_O, M_DASH } from '../../src/js/constants/constants';

describe('<ScoresSection />', () => {
    it('should render proper markup', () => {
        const props = {
            outcome: -1,
            playerTurn: 1,
        };
        const wrapper = shallow(<ScoresSection { ...props } />);
        const container = wrapper.find('section');

        expect(container).to.have.className('container');
        expect(container.children()).to.have.length(2);
    });

    it('should set active player when there is no outcome', () => {
        const props = {
            playerTurn: PLAYER_X,
        };
        const wrapper = shallow(<ScoresSection { ...props } />);
        const scorePlayerX = wrapper.children().get(0);
        const scorePlayerO = wrapper.children().get(1);

        expect(scorePlayerX.props.isActive).to.be.equal(true);
        expect(scorePlayerO.props.isActive).to.be.equal(false);
    });

    it('should set active player when outcome is draw', () => {
        const props = {
            outcome: DRAW,
            playerTurn: PLAYER_X,
        };
        const wrapper = shallow(<ScoresSection { ...props } />);
        const scorePlayerX = wrapper.children().get(0);
        const scorePlayerO = wrapper.children().get(1);

        expect(scorePlayerX)
            .to.have.property('props')
            .that.is.an('object')
            .that.have.property('isActive')
            .that.be.equal(false);
        expect(scorePlayerO)
            .to.have.property('props')
            .that.is.an('object')
            .that.have.property('isActive')
            .that.be.equal(false);
    });

    it('should set active player when there is outcome', () => {
        const props = {
            outcome: PLAYER_X,
            playerTurn: PLAYER_O,
        };
        const wrapper = shallow(<ScoresSection { ...props } />);
        const scorePlayerX = wrapper.children().get(0);
        const scorePlayerO = wrapper.children().get(1);

        expect(scorePlayerX)
            .to.have.property('props')
            .that.is.an('object')
            .that.have.property('isActive')
            .that.be.equal(true);
        expect(scorePlayerO)
            .to.have.property('props')
            .that.is.an('object')
            .that.have.property('isActive')
            .that.be.equal(false);
    });

    it('should handle incrementScore', () => {
        const props = {
            playerTurn: PLAYER_O,
        };
        const wrapper = shallow(<ScoresSection { ...props } />);

        wrapper.setProps({ outcome: PLAYER_X });
        expect(wrapper.state([PLAYER_X])).to.be.equal(1);
        expect(wrapper.state([PLAYER_O])).to.be.equal(M_DASH);

        wrapper.setProps({ outcome: PLAYER_X });
        expect(wrapper.state([PLAYER_X])).to.be.equal(2);
        expect(wrapper.state([PLAYER_O])).to.be.equal(M_DASH);

        wrapper.setProps({ outcome: PLAYER_O });
        expect(wrapper.state([PLAYER_X])).to.be.equal(2);
        expect(wrapper.state([PLAYER_O])).to.be.equal(1);
    });
});
