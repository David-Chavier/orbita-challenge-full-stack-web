import { shallowMount } from '@vue/test-utils';
import SnackbarComponent from '@/components/SnackbarComponent.vue';
import { nextTick } from 'vue';

describe('SnackbarComponent', () => {
  let wrapper: any;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = shallowMount(SnackbarComponent);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('deve exibir a mensagem de sucesso e desaparecer após 3 segundos', async () => {
    wrapper.vm.showSuccess('Mensagem de sucesso');
    expect(wrapper.vm.snackbar.message).toBe('Mensagem de sucesso');
    expect(wrapper.vm.snackbar.color).toBe('snackbar--success');
    expect(wrapper.vm.snackbar.show).toBe(true);

    jest.advanceTimersByTime(3000);
    await nextTick();

    expect(wrapper.vm.snackbar.show).toBe(false);
  });

  it('deve exibir a mensagem de erro e desaparecer após 3 segundos', async () => {
    wrapper.vm.showError('Mensagem de erro');
    expect(wrapper.vm.snackbar.message).toBe('Mensagem de erro');
    expect(wrapper.vm.snackbar.color).toBe('snackbar--error');
    expect(wrapper.vm.snackbar.show).toBe(true);

    jest.advanceTimersByTime(3000);
    await nextTick();

    expect(wrapper.vm.snackbar.show).toBe(false);
  });

  it('deve esconder o snackbar ao clicar', async () => {
    wrapper.vm.showSuccess('Clique para fechar');
    await nextTick();
    
    await wrapper.find('.snackbar').trigger('click');
    
    expect(wrapper.vm.snackbar.show).toBe(false);
  });
});
