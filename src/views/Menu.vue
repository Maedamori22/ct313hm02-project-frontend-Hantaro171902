<script setup> defineProps({
  cf_drinks: { type: Array, default: () => [] }, 
	selectedIndex: { type: Number, default: -1 },
});
const $emit = defineEmits(['update:selectedIndex']);

</script>
<template>
  <div>
    <h1>Menu</h1>
    <div v-if="menuItems.length">
      <ul>
        <li
          class=""
          v-for="(drink, index) in cf_drinks"
          :class="{ active: index === selectedIndex }"
          :key="drink.dr_id"
		    >
			  {{ contact.name }}
		    </li>
      </ul>
    </div>

    <div v-else>
      <p>No items available in the menu.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Item 1', price: '$10.99' },
        { name: 'Item 2', price: '$8.99' }
        // Add more menu items as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
