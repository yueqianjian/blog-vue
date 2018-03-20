<template>
  <div class="home">
    <Carousel autoplay v-model="carouselValue" loop trigger='hover'>
      <CarouselItem v-for="(item,index) in photoList" :key="index">
        <div class="demo-carousel">
          <img :src="encodeURI(item)">
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselValue: 0,
      photoList: []
    };
  },
  methods: {
    init() {
      this.getPhotoList();
    },
    getPhotoList() {
      this.$axios
        .post("mock/photoList")
        .then(res => {
          console.log(res.data);
          this.photoList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #ffffff;
}
</style>


