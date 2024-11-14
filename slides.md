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

---

<div class="flex flex-col p-4">
  <div class="flex justify-between">
    <h1>16 oz. Bistro Ceramic Mug</h1>
    <!-- Product Image -->
    <div class="w-36">
      <img src="https://www.filepicker.io/api/file/oTsv6mr1RKOdoocR0J0O" alt="Product Image" class="w-full mx-auto rounded-md shadow-md">
    </div>
  </div>

  <!-- Product Information -->
  <div class="text-left my-1 space-y-1">
    <p class="text-sm !leading-5 !mb-2">Get your business going with this 16 oz. wide ceramic bistro mug! Great for trade shows, gift shops, cafes and corporate events, this traditional coffee mug is perfect for everyday use with your favorite coffee or tea. It features a smooth rim, glossy finish, curved grip and tapered bottom. Available in several eye-catching colors options, have your company name or logo imprinted on the surface for maximum brand visibility!</p>
    <p class="text-sm !leading-5"><strong>Tradename:</strong> Mug America</p>
    <p class="text-sm !leading-5"><strong>Material:</strong> Ceramic</p>
    <p class="text-sm !leading-5"><strong>Colors:</strong> Blue, Orange, Pink, Red, White</p>
    <p class="text-sm !leading-5"><strong>Size:</strong> 16 oz</p>
    <p class="text-sm !leading-5"><strong>Imprint method:</strong> Imprint Method Charge: Decal - $0.45, Screen Charge: Silkscreen - $49.00</p>
    <p class="text-sm !leading-5"><strong>Imprint size:</strong> 2.5" x 1.75"</p>
    <p class="text-sm !leading-5"><strong>Additional Colors/Locations:</strong> Additional Colors/Locations. Run Charge: Additional imprint color. - $0.45</p>
  </div>

  <!-- Pricing Table -->
  <div class="overflow-x-auto text-xs">
    <table class="table-auto border-collapse border border-gray-400 w-full text-center">
      <thead>
        <tr>
          <th class="border border-gray-300 !py-1">Quantity</th>
          <th class="border border-gray-300 !py-1">36</th>
          <th class="border border-gray-300 !py-1">72</th>
          <th class="border border-gray-300 !py-1">144</th>
          <th class="border border-gray-300 !py-1">288</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 !py-1 font-semibold">Price</td>
          <td class="border border-gray-300 !py-1">$3.98</td>
          <td class="border border-gray-300 !py-1">$3.66</td>
          <td class="border border-gray-300 !py-1">$3.14</td>
          <td class="border border-gray-300 !py-1">$3.03</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs"><strong>Price Includes</strong> one color, one or two location imprint.</p>
</div>


<style>
.slidev-layout {
  padding: 0.5rem;
}
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

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



