<template>
  <div class="flex justify-center w-full">
    <input
      type="text"
      class="bg-transparent border-2 search text-green-600 px-5 w-1/4 mt-10" style="border-radius:20px"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  border-color: #7263c9;
}
</style>
