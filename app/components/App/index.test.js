import React from 'react';
import App from './index';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App module', () => {
  const appVersion = 1.1;
  const appName = 'App Name';

  it('should render snapshot', () => {
    const component = renderer.create(<App appVersion={appVersion} appName={appName} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have 2 <mark> tags', () => {
    const component = render(<App appVersion={appVersion} appName={appName}/>);

    expect(component.find('mark')).toHaveLength(2);
  });
});
