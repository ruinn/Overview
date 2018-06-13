import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import Nav from '../../../client/components/Nav';

configure({ adapter: new Adapter() });

describe('Nav component', () => {
  let mountedNav;
  const nav = () => {
    if (!mountedNav) {
      mountedNav = mount(<Nav />);
    }
    return mountedNav;
  };

  beforeEach(() => {
    mountedNav = undefined;
  });

  it('should always render a section', () => {
    const sections = nav().find('section');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('should render without crashing', () => {
    shallow(<Nav />);
  });

  it('renders active Overview nav item', () => {
    const wrapper = shallow(<Nav />);
    const overview = <a className="nav-link active" href="#">Overview</a>;
    expect(wrapper.contains(overview)).toEqual(true);
  });
});
