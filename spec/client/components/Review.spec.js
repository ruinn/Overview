import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import Review from '../../../client/components/Review';

configure({ adapter: new Adapter() });

describe('Review component', () => {
  let mountedReview;
  const review = () => {
    if (!mountedReview) {
      mountedReview = mount(<Review />);
    }
    return mountedReview;
  };

  beforeEach(() => {
    mountedReview = undefined;
  });

  it('should always render a div', () => {
    const divs = review().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('should render without crashing', () => {
    shallow(<Review />);
  });
});
