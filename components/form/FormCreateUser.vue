<script lang="ts" setup>
const props = defineProps<{
  refresh: () => Promise<void>;
}>();
const data = reactive({
  email: "",
  username: "",
});

const handleSubmit = async () => {
  try {
    await $fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify(data),
    });
    props.refresh();
  } catch (err) {
    // TODO cari tau create error
    console.log(err);
  }
};
</script>
<template>
  <div class="my-20">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="data.email"
          type="email"
          id="email"
          name="email"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700"
          >Username</label
        >
        <input
          v-model="data.username"
          type="text"
          id="username"
          name="username"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-4">
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
