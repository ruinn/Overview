import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import Search from '../../../client/components/Search';

configure({ adapter: new Adapter() });

describe('Search component', () => {
  let mountedSearch;
  const search = () => {
    if (!mountedSearch) {
      mountedSearch = mount(<Search />);
    }
    return mountedSearch;
  };

  beforeEach(() => {
    mountedSearch = undefined;
  });

  it('should always render a div', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('should partially render on first render', () => {
    // shallow(<Search />);
  });

  it('should fully render after data is fetched and props are passed in', () => {
    // shallow(<Search />);
  });

});
