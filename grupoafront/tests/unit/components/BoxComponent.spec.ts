import { shallowMount } from '@vue/test-utils';
import BoxComponent from '@/components/BoxComponent.vue';

describe('BoxComponent', () => {
  it('deve renderizar corretamente o componente', () => {
    const wrapper = shallowMount(BoxComponent, {
      props: { title: 'Título de Teste' },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('deve renderizar o título corretamente', () => {
    const wrapper = shallowMount(BoxComponent, {
      props: { title: 'Título de Teste' },
    });
    const titleElement = wrapper.find('.box-title');
    expect(titleElement.text()).toBe('Título de Teste');
  });

  it('deve renderizar o conteúdo do slot corretamente', () => {
    const wrapper = shallowMount(BoxComponent, {
      props: { title: 'Título de Teste' },
      slots: {
        default: '<p>Conteúdo do slot</p>',
      },
    });
    expect(wrapper.html()).toContain('<p>Conteúdo do slot</p>');
  });
});
