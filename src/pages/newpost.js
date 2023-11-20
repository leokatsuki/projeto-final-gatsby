import React from 'react'
import Layout from '../components/layout'

function NewPostPage() {
  return (
    <Layout>
      <section class="container">
        <h3>Adicionar novo post</h3>
        <p class="mt-2">
          Preencha os campos abaixo para adicionar um novo post ao blog.
        </p>

        <div class=" grid-3">
            <h4 class="mb-1">Data</h4>
            <input type="date" name="data" id="" />
        </div>

        <div class="grid-6">
            <h4 class="mb-1">Título</h4>
            <input type="text" name="title" id="" />
        </div>

        <div className='grid-3'>
            <h4 class="mb-1">Adicionar imagem</h4>
            <input type="file" name="title" id="" />
        </div>

        <div class="grid-12">
            <h4 class="mb-1">Resumo do post</h4>
            <input type="text" name="title" id="" />
        </div>

        <div class="grid-12">
            <h4 class=" mb-1">Descrição</h4>
            <textarea name="description" id="" rows="8"></textarea>
        </div>

        <div className='grid-12 flex-end-row'>
            <button class="btn">Adicionar</button>
        </div>
      </section>
    </Layout>
  );
}

export default NewPostPage