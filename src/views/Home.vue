<template>
  <div>
    <MemberCounter/>
    <PrivateCourse/>
  </div>
</template>


<style lang="scss">

</style>


<script>
// @ is an alias to /src

import PrivateCourse from "@/components/PrivateCourse.vue";
import MemberCounter from '@/components/MemberCounter.vue';
export default {
  name: "Home",
  components: {
    PrivateCourse,
    MemberCounter

  },
};
</script>
