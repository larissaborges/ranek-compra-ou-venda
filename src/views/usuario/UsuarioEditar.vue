<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm"
import {api} from "@/plugins/axios"

export default {
  nome: "UsuarioEditar",
  components: {
    UsuarioForm
  },
  methods: {
    atualizarUsuario() {
      api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario)
      .then(() => {
        this.$store.dispatch("getUsuario")
        this.$router.push({name: "usuario"})
      }).catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>

<style>

</style>