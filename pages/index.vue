<script lang="ts" setup>
useSeoMeta({
  title: "Home",
  description: "Home page",
  keywords: "home, page",
});

const { data, error, refresh } = useFetch("/api/yey", {
  lazy: false,
});
const someErrorLogger = (err: unknown) => {
  console.log(err);
  console.log(JSON.stringify(err));
};
</script>
<template>
  <div>
    <p>index</p>
    {{ JSON.stringify(data) }}
  </div>

  <FormCreateUser :refresh="refresh" />
</template>

<style></style>
