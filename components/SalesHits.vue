<template>
<div class="container mt-5">
    <h1>Хиты продаж</h1>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-6">
                    <img src="~/assets/stillaga.png" />
                </div>
                <div class="col-6 p-5 description_blue text-center">
                    <h2>Костюм Stillaga</h2>
                    <br>
                    <p>2500р</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-6">
                    <img src="~/assets/tetris.png" />
                </div>
                <div class="col-6 p-5 description_blue text-center reorder">
                    <h2>Сарафан Tetris</h2>
                    <br>
                    <p>2500р</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
          <div class="col-md-6">
            <div class="row">
                 <div class="col-6 p-5 text-center description_violet ">
                    <h2>Платье Stillaga</h2>
                    <br>
                    <p>2500р</p>
                </div>
                <div class="col-6 reorder">
                    <img src="~/assets/stillaga_dress.png" />
                </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
                 <div class="col-6 p-5 text-center description_violet">
                    <h2>Платье Stillaga</h2>
                    <br>
                    <p>2500р</p>
                </div>
                <div class="col-6 ">
                    <img src="~/assets/stillaga_dress.png" />
                </div>
            </div>
          </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SalesHits',
}
</script>
<style scoped>
img{
    width: 100%;
    object-fit: cover;
    object-position: top;
    height: 60vh;
}
.description_blue{
    background: rgba(13, 61, 179, 0.5);
    color: #fff;
}
.description_violet{
    background: #0D2C48;
    color: #fff;
}
.col-6{
    padding: 0 
}
@media screen and (max-width: 768px) {
    .reorder{
         order: -1 !important;
    }

    
}
</style>
