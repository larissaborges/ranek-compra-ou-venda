<template>
  <section class="produtos-container">
    <transition mode="out-in">
    <div v-if="produtos && produtos.length" class="produtos" key="produtos">
      <div class="produto" v-for="(produto, index) in produtos" :key="index">
      <router-link :to="{name: 'produto', params: {id: produto.id}}">
        <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
        <h2 class="titulo">{{produto.nome}}</h2>
        <p class="preco">{{produto.preco}}</p>
        <p class="descricao">{{produto.descricao}}</p>
      </router-link>
    </div>
    <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/>
    </div>
    <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
     <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p> 
    </div>
    <div v-else key="carregando">
      <PaginaCarregando />
    </div>
    </transition>
  </section>
</template>

<script>
//import { api } from '../plugins/axios'
import {serialize} from '../helpers'
import ProdutosPaginar from './ProdutosPaginar'

  export default {
    name: 'ProdutosLista',
    components: {
      ProdutosPaginar,
      },
  data() {
    return {
      produtos: [
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
      "id": "camera",
      "nome": "Câmera",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "800",
      "vendido": "false",
      "descricao": "Essa é uma nova câmera",
      "fotos": null
    },
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
      "id": "camera",
      "nome": "Câmera",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "800",
      "vendido": "false",
      "descricao": "Essa é uma nova câmera",
      "fotos": null
    },
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
      "id": "camera",
      "nome": "Câmera",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "800",
      "vendido": "false",
      "descricao": "Essa é uma nova câmera",
      "fotos": null
    },
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
      "id": "camera",
      "nome": "Câmera",
      "usuario_id": "larissafurtado12@live.com",
      "preco": "800",
      "vendido": "false",
      "descricao": "Essa é uma nova câmera",
      "fotos": null
    }
      ],
      produtosPorPagina: 9,
      produtosTotal: 0
    }
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)
        return `/produto?_limit=${this.produtosPorPagina}${query}`
    }
  },
  methods: {
    // getProdutos() {
    //   this.produtos = null
    //   setTimeout(() => {
    //     api.get(this.url).then(response => {
    //       this.produtosTotal = Number(response.headers['x-total-count'])
    //      this.produtos = response.data
    //    })      
    //   }, 1500);
    // }
  },
  watch: {
    url() {
      this.getProdutos()
    }
  },
  // created() {
  //   this.getProdutos()
  // }
}
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 8px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  font-weight: bold;
  color: #e80;
}

.sem-resultados {
  text-align: center;
}


</style>