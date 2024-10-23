<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Deseja apagar o cadastro?</h2>
        <button class="close-button" @click="handleClose">&times;</button>
      </div>
      <div class="modal-body">
        <p>
          Ao confirmar estará deletando permanentemente o cadastro de
          <strong>"{{ studentName }}"</strong>.
        </p>
      </div>
      <div class="modal-footer">
        <button class="cancel-button" @click="handleClose">Cancelar</button>
        <button class="delete-button" @click="handleSave">Apagar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import "./styles/deleteConfirmModalStyles.css"

export default defineComponent({
  props: {
    isOpenModal: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    confirmDeleteStudent: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const showModal = ref(props.isOpenModal);

    watch(
      () => props.isOpenModal,
      (newVal) => {
        showModal.value = newVal;
      }
    );

    const handleClose = () => {
      showModal.value = false;
      props.closeModal();
    };

    const handleSave = () => {
      props.confirmDeleteStudent(props.studentId);
    };

    return {
      showModal,
      handleClose,
      handleSave,
    };
  },
});
</script>
