<template>
  <div class="container mt-5">
    
    <div class="row">
      <div class="col-sm-3">
          <div class="sticky-nav">
   <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Каталог</a></li>
      <li class="breadcrumb-item active" aria-current="page">Платья</li>
    </ol>
        <ul class="nav flex-md-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Все модели</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Повседневные</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Праздничные</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Спортивные</a>
          </li>
        </ul>
          </div>
       
      </div>
      <div class="col-sm-9">
          <h2>Все модели</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryCatalog',
}
</script>
<style scoped>
.sticky-nav{
    position: sticky;
    top: 15vh;
}
</style>
