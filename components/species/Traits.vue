<template>
    <v-card class="scroll-y" style="height: 100%;" data-simplebar>
        <v-card-title class="font-weight-bold pb-1">Traits</v-card-title>
        <v-divider class="ml-2 mr-2"></v-divider>
        <template v-for="t in traits">
            <v-card-text :key="t.name" class="font-weight-bold pb-0">{{t.name}}</v-card-text>
            <v-card-text :key="t.value" class="pt-0 pb-0">{{t.value}}</v-card-text>
        </template>
        <br />
    </v-card>
</template>

<script>
import "simplebar";
import "simplebar/dist/simplebar.css";

export default {
    props: ['traits']
}
</script>