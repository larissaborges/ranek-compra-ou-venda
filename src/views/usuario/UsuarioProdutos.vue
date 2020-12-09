<template>
  <section>
    <h2>Adicionar produtos</h2>
    <ProdutoAdicionar/>
    <h2>Seus produtos:</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          {{produto.descricao}}
          <button class="deletar" @click="deletarProduto(produto.id)">Deletar</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue"
import ProdutoItem from "@/components/ProdutoItem.vue"
//import {mapState, mapActions} from 'vuex'
import {api} from "@/plugins/axios"
export default {
  name: "UsuarioProdutos",
  components: { 
    ProdutoAdicionar,
    ProdutoItem
  },
  data() {
    return {
      usuario_produtos: [
        {
      "id": "notebook",
      "nome": "Notebook",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "4999",
      "vendido": "false",
      "descricao": "Esse é um novo notebook",
      "fotos": null
    },
    {
      "id": "smartphone",
      "nome": "Smartphone",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "2000",
      "vendido": "false",
      "descricao": "Esse é um novo smartphone",
      "fotos": null
    },
    {
      "id": "smartphone",
      "nome": "Smartphone",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "2000",
      "vendido": "false",
      "descricao": "Esse é um novo smartphone",
      "fotos": null
    }
      ]
    }
  },
  computed:{
   // ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods: {
   // ...mapActions(["getProdutos"]),
    deletarProduto(id) {
      const confirmar = window.confirm("Deseja remover este produto?")
      if(confirmar) {
        api.delete(`/produto/${id}`)
        .then(() => {
          this.getProdutos()
        })
        .catch(error => {
          console.log(error.response)
        }) 
      }
    }
  },
  watch: {
    login() {
      this.getProdutos()
    }
  },
  created() {
    if(this.login) {
      this.getProdutos()
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all .3s
}
.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px; 
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>