<template>
  <form novalidate @submit.prevent="submit" :class="[$style.form, {[$style['form-error']]: !isFormValid}]">
    <p :class="[$style['form-error-authorization']]" v-if="!ifUserInValid?.success">{{ ifUserInValid.error }}</p>
    <validation-observer
      ref="provider"
      tag="div"
      :class="$style['form__body']"
    >
      <BaseInput
        v-model="form.email"
        label="Email Address"
        name="Email address"
        required
        rules="required|email"
        vid="email"
      />
      <BaseInput
        v-model="form.password"
        label="Password"
        name="Password"
        type="password"
        required
        rules="required|password"
        vid="password"
        autocomplete="new-password"
      />
      <BaseButton type="submit" :disabled="!isFormValid">Login</BaseButton>
    </validation-observer>
  </form>
</template>

<script>
import BaseInput from "~/src/feature/BaseInput";
import BaseButton from "~/src/feature/BaseButton";
import {defineComponent, reactive, ref, useContext, watch} from "@nuxtjs/composition-api";
import {useUserStore} from "~/src/entities/app.userStore";

export default defineComponent({
  name: 'LoginForm',
  components: {BaseInput,BaseButton},
  setup() {
    const userStore = useUserStore()
    const { redirect } = useContext();

    const form = reactive({
      email: '',
      password: '',
      isLoading: false,
    });
    let isFormValid = ref(true);
    let ifUserInValid = ref(false);

    const provider = ref(null);

    watch( () => form,  async (newValue) => {
        isFormValid.value = await provider.value.validate();
    }, { deep: true });

    const submit = async() => {
      if (isFormValid) {
        const { isLoading, ...payload } = form;
        form.isLoading = true;

        try {
          await userStore.login(payload);
          if(userStore.userResponse.success) {
            sessionStorage.setItem('user', JSON.stringify(payload));
            redirect('/auth/secret');
          } else {
            ifUserInValid.value = userStore.userResponse;
            form.password = '';
          }
        } finally {}
      }
    }

    return {
      form,
      submit,
      provider,
      isFormValid,
      ifUserInValid,
    }
  }
})
</script>

<style lang="scss" scoped module>
@import "assets/scss/variables";

.form {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 25px;
  transition: all 0.3s;
  flex-direction: column;

  &__body {
    width: 400px;
    margin: 0 auto;
  }

  &-error-authorization {
    text-transform: capitalize;
    color: $c-danger;
  }
}

.form-error {
  border-color: $c-danger;
}
</style>
