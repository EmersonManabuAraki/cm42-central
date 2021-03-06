import React from 'react';
import { mount } from 'enzyme';
import { StorySearch } from 'components/search/StorySearch';

describe('<StorySearch />',  () => {
  beforeEach(() => {
    const divPortal = global.document.createElement('div');
    divPortal.setAttribute('data-portal', 'search');
    const body = global.document.querySelector('body');
    body.appendChild(divPortal);
  });

  it('renders the component', () => {
    const wrapper = mount(
      <StorySearch 
        projectId={1}
        search={sinon.stub()}
        loading={false}
      />
    );

    expect(wrapper).toExist();
  });

  describe('loading', () => {
    describe('when loading is true', () => {
      let wrapper;
  
      beforeEach(() => {
        wrapper = mount(
          <StorySearch 
            projectId={1}
            search={sinon.stub()}
            loading={true}
          />
        );
      });
  
      it('renders the spinner', () => {
        const spinner = wrapper.find('[data-id="spinner-loading"]');
  
        expect(spinner).toBeTruthy();
      });
    });
  });
});
