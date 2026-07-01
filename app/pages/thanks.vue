<!-- pages/merci.vue -->
<template>
  <section
    class="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <Galaxy
        :star-count="2000"
        :speed="0.5"
        :star-size="2"
        star-color="#333333"
      />
    </div>

    <div
      class="relative z-10 flex flex-col items-center text-center max-w-md gap-6"
    >
      <h1
        class="text-2xl md:text-3xl font-medium text-foreground animate-[rise_0.4s_ease_0.15s_both]"
      >
        Inscription confirmée
      </h1>
      <p
        class="text-sm text-muted-foreground leading-relaxed animate-[rise_0.4s_ease_0.25s_both]"
      >
        Merci de votre intérêt pour CM Agent. Vous faites désormais partie de la
        liste d'attente.
      </p>
      <div class="w-10 h-px bg-border animate-[rise_0.4s_ease_0.3s_both]" />

      <div
        class="flex flex-col gap-2.5 w-full text-left animate-[rise_0.4s_ease_0.35s_both]"
      >
        <div
          class="flex items-center justify-center gap-2.5 text-xs text-muted-foreground"
        >
          <Icon name="lucide:rocket" class="w-4 h-4 mt-0.5 shrink-0" />
          <span>Vous serez parmi les premiers à tester CM Agent</span>
        </div>
      </div>

      <NuxtLink
        to="/"
        class="mt-2 inline-flex items-center gap-2 border border-border rounded-sm px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors animate-[rise_0.4s_ease_0.4s_both]"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        Retour à l'accueil
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
import Galaxy from "~/components/ui/galaxy/Galaxy.vue";

const url = useRequestURL();

useSeoMeta({
  title: "Inscription confirmée | CM Agent",
  description:
    "Merci pour votre intérêt pour CM Agent. Votre inscription à la liste d’attente est confirmée.",
  robots: "noindex,follow",
  ogTitle: "Inscription confirmée | CM Agent",
  ogDescription:
    "Merci pour votre intérêt pour CM Agent. Votre inscription à la liste d’attente est confirmée.",
  ogType: "website",
  ogUrl: url.href,
  ogImage: "/full-logo.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Inscription confirmée | CM Agent",
  twitterDescription:
    "Merci pour votre intérêt pour CM Agent. Votre inscription à la liste d’attente est confirmée.",
  twitterImage: "/full-logo.png",
});

useHead({
  link: [{ rel: "canonical", href: url.href }],
});
</script>
<style scoped>
@keyframes ring-pop {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  60% {
    transform: scale(1.08);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes ring-fade {
  0% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
