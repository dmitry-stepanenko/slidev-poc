<template>
    <div v-if="attribute">
        <strong class="mr-1">{{ attribute.Name }}:</strong>
        <span>
            <template v-if="attribute.Values.length === 1">
                {{ attribute.Values[0].Value }}
            </template>
            <template v-else>
                {{ attribute.Values.map((value) => value.Value).join(", ") }}
            </template>
        </span>
    </div>
</template>

<script>
export default {
    name: "AttributeValue",
    props: {
        attribute: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
strong {
    font-weight: bold;
}
</style>
