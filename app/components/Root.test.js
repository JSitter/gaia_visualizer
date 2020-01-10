import Root from './Root.jsx';
import {shallow} from 'enzyme';
 // Jest is incompatible with Web Gl Sadly
test('Load without error', ()=>{
  expect(shallow(<Root/>).find('canvas').exists()).toBe(true);
});