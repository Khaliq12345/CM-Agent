<template>
  <div class="relative overflow-x-hidden px-4 md:px-0">
    <main
      class="w-full py-4 md:mx-auto max-w-330 space-y-18 border-r-3 border-l-3 px-6"
    >
      <div class="-mx-6">
        <Header />
        <XDivider />
        <Intro />
        <XDivider />
      </div>

      <div class="-mx-6">
        <Number />
      </div>

      <!-- <Features /> -->
      <div class="-mx-6">
        <XDivider />
        <Features2 />
        <XDivider />
      </div>

      <div class="-mx-6">
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

<script setup lang="ts">
const url = useRequestURL();

useSeoMeta({
  title: "CM Agent | Agent IA pour automatiser vos réseaux sociaux",
  description:
    "CM Agent automatise la publication, l’engagement et la prospection sur LinkedIn, Instagram, X et Facebook pour accélérer votre croissance.",
  keywords:
    "agent IA, réseaux sociaux, automatisation, publication automatique, prospection, marketing social",
  ogTitle: "CM Agent | Agent IA pour automatiser vos réseaux sociaux",
  ogDescription:
    "Automatisez la publication, l’engagement et la prospection sur les réseaux sociaux avec CM Agent.",
  ogType: "website",
  ogUrl: url.href,
  ogImage: "/full-logo.png",
  twitterCard: "summary_large_image",
  twitterTitle: "CM Agent | Agent IA pour automatiser vos réseaux sociaux",
  twitterDescription:
    "Automatisez la publication, l’engagement et la prospection sur les réseaux sociaux avec CM Agent.",
  twitterImage: "/full-logo.png",
  robots: "index,follow",
});

useHead({
  link: [{ rel: "canonical", href: url.href }],
});
</script>
