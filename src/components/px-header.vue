<template>
  <footer class="Footer">
    <div class="Footer--Container">
      <h1 class="Footer--Logo">Student Hub</h1>
      <div class="Footer--SocialMedia">
        <a class="Footer--IconContainer" href="">
          <img class="Footer--Icon" src="@/assets/fb.svg" alt="" />
        </a>
        <a class="Footer--IconContainer" href="">
          <img class="Footer--Icon" src="@/assets/ig.svg" alt="" />
        </a>
        <a class="Footer--IconContainer" href="">
          <img class="Footer--Icon" src="@/assets/tt.svg" alt="" />
        </a>
      </div>
      <p class="Footer--Text">help@studenthub.com</p>
    </div>
    <div class="Footer--Rights">©2021. All rights reserved</div>
  </footer>
</template>

<script>
export default {
  name: "px-header",
  props: ["login"],
  data() {
    return {
      buttonColor: "black",
    };
  },
};
</script>

<style scoped>
.Footer {
  height: 40vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 3fr 1fr;
  box-sizing: border-box;
  background-color: #4883BF;
}
.Footer--Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Footer--Logo {
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0;
  color: white;
}
.Footer--SocialMedia {
  display: flex;
  align-items: center;
  gap: 2.75rem;
  margin: 1rem 0;
}
.Footer--IconContainer {
  width: 3.6rem;
  height: 3.6rem;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.8rem;
  background-color: white;
}
.Footer--Icon {
  height: 1.5rem;
}
.Footer--Text {
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
}
.Footer--Rights {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
  color: white;
  background-color: black;
}
</style>