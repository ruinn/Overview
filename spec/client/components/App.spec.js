import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import App from '../../../client/components/App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    mountedApp = undefined;
  });

  it('should always render a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // it('should mount in a full DOM', () => {
  //   expect(mount(<App />).find('.app').length).toBe(1);
  // });

});
