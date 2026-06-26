<template>
  <div class="relative overflow-x-hidden">
    <main
      class="w-full py-4 mx-auto max-w-330 space-y-8 border-r-3 border-l-3 px-6"
    >
      <Header />
      <Intro />
      <XDivider />

      <div class="-mx-6 py-14">
        <Number />
      </div>
      <XDivider />

      <!-- <Features /> -->
      <div class="py-12">
        <Features2 />
      </div>
      <XDivider />

      <div class="pt-18 pb-8 -mx-6">
        <XDivider />
        <End />
        <XDivider />
      </div>

      <div class="-mx-6">
        <Footer />
      </div>
    </main>
  </div>
</template>
