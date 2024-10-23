import { shallowMount } from '@vue/test-utils';
import DeleteConfirmModal from '@/components/DeleteConfirmModal.vue';

describe('DeleteConfirmModal', () => {
  const closeModalMock = jest.fn();
  const confirmDeleteStudentMock = jest.fn();
  const studentId = '123';
  const studentName = 'John Doe';

  const createWrapper = (isOpenModal = true) => {
    return shallowMount(DeleteConfirmModal, {
      props: {
        isOpenModal,
        closeModal: closeModalMock,
        studentId,
        studentName,
        confirmDeleteStudent: confirmDeleteStudentMock,
      },
    });
  };

  it('deve renderizar o modal quando "isOpenModal" for true', () => {
    const wrapper = createWrapper(true);
    expect(wrapper.find('.modal-overlay').exists()).toBe(true);
  });

  it('não deve renderizar o modal quando "isOpenModal" for false', () => {
    const wrapper = createWrapper(false);
    expect(wrapper.find('.modal-overlay').exists()).toBe(false);
  });

  it('deve exibir o nome do estudante corretamente', () => {
    const wrapper = createWrapper(true);
    expect(wrapper.find('strong').text()).toBe(`"${studentName}"`);
  });

  it('deve chamar "handleClose" e "closeModal" ao clicar no botão de cancelar', async () => {
    const wrapper = createWrapper(true);
    await wrapper.find('.cancel-button').trigger('click');
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('deve chamar "handleSave" e "confirmDeleteStudent" ao clicar no botão de apagar', async () => {
    const wrapper = createWrapper(true);
    await wrapper.find('.delete-button').trigger('click');
    expect(confirmDeleteStudentMock).toHaveBeenCalledWith(studentId);
  });
});
