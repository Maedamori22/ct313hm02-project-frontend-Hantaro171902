<script setup> 
defineProps({
    cf_drinks: { type: Array, default: () => []},
    selectedIndex: { type: Number, default: -1},
    drink: { type: Object, required: true },
});

const $emit = defineEmits(['update:selectedIndex']);
</script>

<template>
    <div class="list-group">
        <li 
            class="list-group-item px-3" 
            v-for="(drink, index) in cf_drinks" 
            :class="{ active: index === selectedIndex }" 
            :key="drink.dr_id" 
            @click="$emit('update:selectedIndex',index)"
        >
        </li>
        <div>
            <div class="p-1">
                <strong></strong>
                {{ drink.dr_img }}
            </div>
            <div class="p-1">
                <strong>Name of drink:</strong>
                {{ drink.dr_name }}
            </div>
            <div class="p-1">
                <strong>Price:</strong>
                {{ drink.dr_price }}
            </div>
        </div>
    </div>
</template>