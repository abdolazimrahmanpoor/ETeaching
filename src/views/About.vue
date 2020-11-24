<template>
  <div class="about">
   <v-btn color="primary" @click="toggleModal">Open</v-btn>
   <!-- <transition name="fade"> -->
     <transition name="fade">
    <div v-if="isOpen" class="modal">
      <v-btn color="error" @click="toggleModal">Close</v-btn>
    </div>
     </transition>
   <!-- <transition> -->
   
 

  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>


