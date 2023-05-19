<template>
  <div class="flex flex-col sub-content__bg">
    <div
      class="flex content-center justify-center mt-16 mb-10 sm:mt-24 sm:mb-14"
    >
      <div class="custom-border"></div>
      <p class="mx-3">Latest Information</p>
      <div class="custom-border"></div>
    </div>

    <div class="flex content-center justify-center mb-20 sm:mb-32">
      <div class="w-4/6">
        <div
          class="grid items-center content-center grid-cols-1 sm:grid-cols-2 justify-items-center"
        >
          <div class="mt-10 sm:mt-0">
            <p class="pt-5 text-2xl text-center en-regular-font">
              Won't you be a speaker?
            </p>
            <p class="pt-2 text-sm text-center jp-title-font">登壇者募集</p>
            <p class="p t-1 text-sm text-center jp-title-font">
              詳しくは下のボタンから
            </p>
            <MyButton link="https://pretalx.com/pyconapac2023/cfp"
              >See More</MyButton
            >
          </div>
          <div class="mt-10 sm:mt-0">
            <p class="pt-5 text-2xl text-center en-regular-font">
              We need volunteers
            </p>
            <p class="pt-2 text-sm text-center jp-title-font">
              スタッフ募集中！
            </p>
            <p class="pt-1 text-sm text-center jp-title-font">
              詳しくは下のボタンから
            </p>
            <MyButton
              link="https://pyconjp.blogspot.com/2023/01/pycon-jp-2023.html"
              >See More</MyButton
            >
          </div>
          <div class="mt-10 sm:mt-0 sm:col-span-2">
            <p class="pt-5 text-2xl text-center en-regular-font">
              Please be our sponsor!
            </p>
            <p class="pt-2 text-sm text-center jp-title-font">
              スポンサー募集中！
            </p>
            <p class="pt-1 text-sm text-center jp-title-font">
              詳しくは下のボタンから
            </p>
            <MyButton
              link="https://forms.gle/vHW5TSeZFWY3rgKW9"
              >See More</MyButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '~/components/Elements/Button.vue'
export default {
  components: {
    MyButton,
  },
}
</script>

<style scoped>
.sub-content__bg {
  background: rgba(255, 255, 255, 0.2);
}

.custom-border {
  margin-top: 13px;
  width: 64px;
  height: 0;
  border: 1px solid #ffffff;
  background-color: #fff;
}
.custom-center {
  display: grid;
  place-items: center;
}
</style>
