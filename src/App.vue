<template>
  <div @mouseup="mouseup">
    <Nav :navstates="navlink" @navevent="toggleNav" />
    <router-view></router-view>
    <Bottom />
  </div>
</template>

<script setup >
import Nav from './components/Nav.vue';
import { ref, defineAsyncComponent } from 'vue';
const Bottom = defineAsyncComponent(() => import('./components/Bottom.vue'));
const navlink = ref('mobile-navlink');
const navstates = ref(true);
/*
    This function is used to toggle the mobile navigation links
*/
function toggleNav() {
  console.log('navlink', navlink.value, navstates.value);
  if (navlink.value === 'mobile-navlink' && navstates.value) {
    navlink.value = 'mobile-navlink active';
  } else if (!navstates.value || navlink.value === 'mobile-navlink active') {
    navlink.value = 'mobile-navlink';
  }
}

function mouseup(e) {
  console.log(e.target.localName);
  if (e.target.className !== 'mobile-navlink active'
  ) {
    if (e.target.localName === 'svg') {
      if (e.target.className.baseVal === 'mobile-svg') {
        return;
      }
    }
    if (e.target.localName === 'path') {
      if (e.target.parentNode.className.baseVal === 'mobile-svg') {
        return;
      }
    }
    navlink.value = 'mobile-navlink';
  }

}
</script>

<style lang="scss" scoped></style>
