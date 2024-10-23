<template>
  <BoxComponent :title="isEditMode ? 'Editar aluno' : 'Cadastro de aluno'">
    <div class="student-registration-container">
      <div class="input-group">
        <div class="input-label">
          Nome
        </div>
        <input class="input-field" type="text" id="name" name="name" placeholder="Informe o nome completo" v-model="student.name" />
      </div>

      <div class="input-group">
        <div class="input-label">
          E-mail
        </div>
        <input class="input-field" type="text" id="email" name="email" placeholder="Informe apenas um e-mail" v-model="student.email" />
      </div>

      <div class="input-group">
        <div class="input-label">
          RA
        </div>
        <input :disabled="isEditMode" class="input-field" type="text" id="ra" name="ra" placeholder="Informe o registro acadêmico" v-model="student.academicRegistration" />
      </div>

      <div class="input-group">
        <div class="input-label">
          CPF
        </div>
        <input :disabled="isEditMode" class="input-field" type="text" id="cpf" name="cpf" placeholder="Informe o número do documento" v-model="student.cpf" />
      </div>

      <div class="button-group">
        <button class="button" @click="goToRegistrationList">Cancelar</button>
        <button 
          :disabled="student.name === '' || student.academicRegistration === '' || student.cpf === '' || student.email === ''" 
          class="button" 
          @click="saveStudent"
        >Salvar</button>
      </div>
    </div>
  </BoxComponent>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, inject } from "vue";
import { useRouter, useRoute } from "vue-router";
import BoxComponent from "@/components/BoxComponent.vue";
import { StudentModel } from "@/model/StudentModel";
import { createStudent, getStudentById, updateStudent } from "@/services/StudentServices";
import './styles/studentRegistrationStyles.css';

export default defineComponent({
  components: {
    BoxComponent,
  },
  name: "StudentRegistration",
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

    const router = useRouter();
    const route = useRoute();
    
    const isEditMode = ref(false);

    const student: StudentModel = reactive<StudentModel>({
      name: "",
      email: "",
      academicRegistration: "",
      cpf: ""
    });

    const loadStudentData = async (academicRegistration: string) => {
      getStudentById(academicRegistration).then((data)=>{
        student.name = data.name;
        student.email = data.email;
        student.academicRegistration = data.academicRegistration;
        student.cpf = data.cpf;
      }).catch((error)=>{
        if(error.response.data.message){
          triggerError(error.response.data.message)
        }else{
          triggerError("Erro ao buscar cadastro do aluno")
        }
      })
    };

    const saveStudent = async () => {
      if (isEditMode.value) {   
        updateStudent(student).then(()=>{
          triggerSuccess("Cadastrado editado com sucesso")
          router.push({ name: "registrationList" });
        }).catch((error)=>{
          if(error.response.data.message){
          triggerError(error.response.data.message)
          }else{
            triggerError("Erro ao editar cadastro")
          }
        })
      } else {
        createStudent(student).then(()=>{
          triggerSuccess("Cadastrado criado com sucesso")
          router.push({ name: "registrationList" });
        }).catch((error)=>{
          if(error.response.data.message){
            triggerError(error.response.data.message)
          }else{
            triggerError("Erro ao criar cadastro")
          }
        })
      }
    };

    const goToRegistrationList = () => {
      router.push({ name: "registrationList" });
    };

    onMounted(() => {
      if (route.params.id) {
        isEditMode.value = true;
        student.academicRegistration = route.params.id as string;
        loadStudentData(student.academicRegistration);
      }
    });

    return {
      triggerSuccess,
      triggerError,
      student,
      isEditMode,
      saveStudent,
      goToRegistrationList,
    };
  },
});
</script>
