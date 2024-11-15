<template>
    <div>
        <div v-if="loading" class="loader">Loading...</div>
        <div v-else-if="product">
            <div class="flex flex-col p-4">
                <div class="flex justify-between">
                    <h1>{{ product.Name }}</h1>
                    <!-- Product Image -->
                    <div class="w-36">
                        <img
                            v-bind:src="product.DefaultMedia?.Url"
                            alt="Product Image"
                            class="w-full mx-auto rounded-md shadow-md"
                        />
                    </div>
                </div>

                <!-- Product Information -->
                <div class="text-left my-1 space-y-1">
                    <p class="text-sm !leading-5 !mb-2">
                        {{ product.Description }}
                    </p>
                    <p class="text-sm !leading-5">
                        <AttributeValue :attribute="getAttributeByName('Material')" />
                    </p>
                    <p class="text-sm !leading-5">
                        <AttributeValue :attribute="getAttributeByName('Imprint Color')" />
                    </p>
                    <p class="text-sm !leading-5">
                        <AttributeValue :attribute="getAttributeByName('Imprint Method')" />
                    </p>
                    <p class="text-sm !leading-5">
                        <AttributeValue :attribute="getAttributeByName('Imprint Size & Location')" />
                    </p>
                </div>

                <!-- Pricing Table -->
                <div class="overflow-x-auto text-xs">
                    <table class="table-auto border-collapse border border-gray-400 w-full text-center">
                        <thead>
                            <tr>
                                <th class="!text-center border border-gray-300 !py-1">Quantity</th>
                                <th class="!text-center border border-gray-300 !py-1" v-for="item in product.PriceGrids[0].Prices">{{ item.Quantity.From }}-{{ item.Quantity.To }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 !py-1 font-semibold">Price</td>
                                <td class="border border-gray-300 !py-1" v-for="item in product.PriceGrids[0].Prices">{{ getFormattedPrice(item.Price) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Product not found.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetails",
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            product: null,
            error: null,
        };
    },
    watch: {
        productId: {
            immediate: true,
            handler(newProductId) {
                this.loadProduct(newProductId);
            },
        },
    },
    methods: {
        async loadProduct(productId) {
            if (!productId) {
                this.product = null;
                return;
            }

            this.loading = true;
            this.product = null;
            this.error = null;

            try {
                const response = await fetch(
                    `https://asiservice.uat-asicentral.com/neptune-public/api/products/${productId}`,
                    { headers: { websitedomain: "esp-uat.tikaro.net" } }
                );
                if (!response.ok) {
                    throw new Error(`Failed to load product: ${response.statusText}`);
                }
                this.product = await response.json();
            } catch (err) {
                this.error = err.message;
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        getAttributeByName(name) {
            return this.product.Attributes.find((attr) => attr.Name === name);
        },
        getFormattedPrice(price) {
            return Intl.NumberFormat('en-US', { style: "currency", currency: "USD" } ).format(price)
        }
    },
};
</script>

<style scoped>
.loader {
    font-size: 1.2em;
    font-weight: bold;
    color: #555;
}
h1 {
    background-color: #2b90b6;
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
