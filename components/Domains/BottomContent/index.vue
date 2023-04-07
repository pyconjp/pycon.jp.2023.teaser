<template>
  <div class="py-24 bottom-content">
    <div class="text-center">
      <p class="text-2xl en-title-font">Contact</p>
      <div class="mt-10">
        <div class="text-sm jp-regular-font">
          <p>ボランティアによる運営ですので、回答には1週間程度を要します。</p>
          <p>何卒お待ちいただけますようにお願いします。</p>
        </div>
        <div class="mt-4 text-sm en-regular-font">
          <p>PyCon APAC 2023 is organized by volunteers, so it may take a week for us to reply to inquiries.</p>
          <p>Thank you for your patience.</p>
        </div>
      </div>
      <div class="flex justify-center contact-button-area">
        <a
          href="mailto:pyconjp@pycon.jp"
          class="text-white bg-auto border border-white rounded-full en-regular-font hover:text-black hover:bg-white contact-button"
        >
          <span>pyconjp@pycon.jp</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bottom-content {
  height: 499px;
}
.contact-button {
  height: 50px;
  width: 280px;
  padding-top: 13px;
  padding-bottom: 13px;
}

.contact-button-area {
  margin-top: 30px;
}
</style>
