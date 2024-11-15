---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://commonmedia.asicentral.com/4440000/4441309/vandelayCoverPPT.jpg
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
layout: two-cols
---

<!-- Left Column with Centered Text -->

<div class="flex flex-col items-center justify-center h-full ">
  <p class="text-3xl font-semibold">Welcome to Our Product!</p>
  <div class="pt-12">
    <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
      Press Space for next page <carbon:arrow-right class="inline"/>
    </span>
  </div>
</div>

<!-- Right Column with Large Image -->
::right::

<div class="flex items-center justify-center h-full">
  <img src="https://www.filepicker.io/api/file/oTsv6mr1RKOdoocR0J0O" alt="Product Image" class="w-3/4 h-auto rounded-lg shadow-lg">
</div>

---
layout: center
---

# Hello,

I've included a presentation containing products I thought would be perfect for promoting and reinforcing your brand, as well as fitting within your budget.

After you review the presentation, let me know which products you think would be the best fit for your business. Feel free to contact me if you have any questions.

Thank you.

<!-- PRODUCT DETAILS TEMPLATE START  -->
---

<ProductDetails productId="__VAR_PRODUCT_ID__" />

<style>
.slidev-layout {
  padding: 0.5rem;
}
</style>

<!-- PRODUCT DETAILS TEMPLATE END  -->

---
layout: center
---
# Thank You for the Opportunity

Thank you for the opportunity to provide your company with ad specialties.

The pricing for these products is guaranteed for a limited time. After this period, we will need to check with our supplier for any updates. Further customization may incur additional charges. Shipping charges and applicable state & local taxes will also apply to your order.

Thank you in advance for your order.

---
layout: two-cols
---

# Presentation Name

<div class="flex flex-col h-3/6 justify-center">
  <strong>ASI Distributors</strong>
  <strong>Ryan Ryan</strong>
  <span>test@asicentral.com</span>
  <span>http://www.asicentral.com</span>
  <span>(215)555-1212</span>
</div>



