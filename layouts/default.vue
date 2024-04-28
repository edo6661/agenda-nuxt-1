<script lang="ts" setup>
const someErrorLogger = (err: unknown) => {
  console.log(err);
  console.log(JSON.stringify(err));
};
</script>

<template>
  <div>
    <p>default layout</p>

    <slot />
  </div>
</template>

<style></style>
