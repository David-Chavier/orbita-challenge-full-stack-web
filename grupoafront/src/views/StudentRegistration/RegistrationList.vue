<template>
  <BoxComponent title="Consulta de Alunos">
    <div class="header-container">
      <div class="search-container">
        <input
          class="search-input"
          type="text"
          id="name"
          name="name"
        />
        <button class="search-button">
          Pesquisar
        </button>
      </div>
      <button @click="goToStudentRegistration" class="register-button">
        Cadastrar alunos
      </button>
    </div>

    <div class="list-container">
      <ul class="header-list">
        <li>Registro Acadêmico</li>
        <li>Nome</li>
        <li>CPF</li>
        <li>Ações</li>
      </ul>

      <div class="student-list">
        <div v-for="(student, index) in students" :key="index">
          <ul
            :class="['student-row', { 'odd-row': index % 2 !== 0 }]"
          >
            <li>{{ student.academicRegistration }}</li>
            <li>{{ student.name }}</li>
            <li>{{ student.cpf }}</li>
            <li>
              <button @click="goToEditStudent(student.academicRegistration)" class="edit-button">Editar</button>
              <button @click="openModalDeleteStudent(student.academicRegistration, student.name)" class="delete-button">Excluir</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BoxComponent>
  <DeleteConfirmModal
    :isOpenModal="isModalOpenDeleteStudent" 
    :closeModal="closeModalDeleteStudent" 
    :studentId="selectedStudentId!" 
    :studentName="selectedStudentName!" 
    :confirmDeleteStudent="handleDeleteStudent"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject } from "vue";
import BoxComponent from "@/components/BoxComponent.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";
import { deleteStudent, getStudents } from "@/services/StudentServices";
import { StudentModel } from "@/model/StudentModel";
import router from "@/router";
import "./styles/registrationListStyles.css"

export default defineComponent({
  components: {
    BoxComponent,
    DeleteConfirmModal
  },
  name: "RegistrationList",
  setup() {
    const showSuccess = inject<((message: string) => void)>('showSuccess');
    const showError = inject<((message: string) => void)>('showError');
    
    const triggerSuccess = (message: string) => {
      if (showSuccess) {
        showSuccess(message);
      }
    };

    const triggerError = (message: string) => {
      if (showError) {
        showError(message);
      }
    };

    const isModalOpenDeleteStudent = ref(false);
    const selectedStudentId = ref<string | null>(null);
    const selectedStudentName = ref<string | null>(null);

    const openModalDeleteStudent = (id: string, name: string) => {
      selectedStudentId.value = id;
      selectedStudentName.value = name;
      isModalOpenDeleteStudent.value = true;
    };

    const closeModalDeleteStudent = () => {
      isModalOpenDeleteStudent.value = false;
      selectedStudentId.value = null;
      selectedStudentName.value = null;
    };

    const students = ref<StudentModel[]>([]);

    const goToEditStudent = (id: string) => {
      router.push({ name: "editStudentRegistration", params: { id } });
    };

    const goToStudentRegistration = () => {
      router.push({ name: "studentRegistration" });
    };

    const handleDeleteStudent = (id: string) =>{
      isModalOpenDeleteStudent.value = false;
      deleteStudent(id).then(()=>{
        getAllStudents()
        triggerSuccess("Cadastro deletado com sucesso.")
      }).catch(() => {
        triggerError("Erro ao deletar cadastro.")
      })
    }

    const getAllStudents = () =>{
      getStudents().then((response)=>{
        students.value = response;
      }).catch(()=>{
        triggerError("Erro ao buscar cadastros.")
      })
    }

    onMounted(() => {
      getAllStudents()
    });

    return {
      triggerSuccess,
      triggerError,
      selectedStudentName,
      selectedStudentId,
      isModalOpenDeleteStudent,
      goToEditStudent,
      openModalDeleteStudent,
      closeModalDeleteStudent,
      goToStudentRegistration,
      handleDeleteStudent,
      students,
    };
  },
});
</script>
