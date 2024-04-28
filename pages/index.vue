<script lang="ts" setup>
useSeoMeta({
  title: "Home",
  description: "Home page",
  keywords: "home, page",
});

const { data, error } = useFetch("/api/yey", {
  lazy: false,
});
watchEffect(() => {
  console.log(data.value);
  console.log(error.value);
});
</script>
<template>
  <div>
    <p>index</p>
    {{ JSON.stringify(data) }}
  </div>
</template>

<style></style>
