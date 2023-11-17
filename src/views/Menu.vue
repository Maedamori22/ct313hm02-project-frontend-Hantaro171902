<script setup> 
import { ref, computed, onMounted, watch } from 'vue'; 
import { useRouter } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Pagination from '@/components/Pagination.vue'; 

const $router = useRouter();
const totalPages = ref(1); 
const currentPage =ref(1);
const drinks = ref([]); 
const selectedIndex =ref(-1); 
const searchText = ref('');

const searchableDrinks = computed(() =>
  drinks.value.map((drink) => {
    const { dr_img, dr_name, dr_price, cate_id} = drink; 
    return [dr_img, dr_name, dr_price, cate_id].join('');
  })
);

const filteredDrinks = computed(() => {
  if (!searchText.value) 
    return drinks.value; 
    return drinks.value.filter((drink, index)=> 
      searchableDrinks.value[index].includes(searchText.value)
  );
});

const selectedDrink= computed(() => {
  if (selectedIndex.value < 0) return null;
    return filteredDrinks.value[selectedIndex.value];
});

async function retrieveDrinks(page) {
  try {
    const chunk = await drinksService.getDrinks(page);
    totalPages.value = chunk.metadata.lastPage ?? 1; 
    drinks.value = chunk.drinks.sort((current, next) => 
      current.dr_name.localeCompare(next.dr_name));
      selectedIndex.value = -1;
  }catch (error) { 
    console.log(error);
  }
}

onMounted(() => retrieveDrinks(1));

watch(searchText, () => (selectedIndex.value = -1));

watchEffect(() => retrieveDrinks(currentPage.value));
</script>

<template>

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

</style>
