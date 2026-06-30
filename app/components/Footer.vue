<template>
  <footer class="w-full mt-20">
    <XDivider />

    <!-- Top : logo + tagline -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10 px-6 md:px-12"
    >
      <div class="flex flex-col items-center gap-4">
        <img
          src="/full-logo.png"
          alt="cm logo"
          class="object-contain w-30 h-30"
        />
        <div class="flex items-centenr gap-2">
          <a
            href="https://www.linkedin.com/company/107994649"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center w-8 h-8 border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Icon name="lucide:linkedin" class="w-4 h-4" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61588332898454"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center w-8 h-8 border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter / X"
          >
            <Icon name="lucide:facebook" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <p
        class="text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed"
      >
        <strong class="text-foreground font-medium"
          >La plateforme AI-native</strong
        >
        pour créer, publier et prospecter sur les réseaux sociaux — en pilote
        automatique.
      </p>
    </div>

    <XDivider />

    <!-- Grille -->
    <div class="grid grid-cols-1 md:grid-cols-3">
      <!-- Entreprise -->
      <div
        class="flex flex-col gap-4 p-6 md:p-8 border-b-3 md:border-b-0 md:border-r-3"
      >
        <p
          class="text-xs text-foreground uppercase tracking-widest font-extrabold"
        >
          Entreprise
        </p>
        <ul class="flex flex-col gap-3">
          <li>
            <a
              href="https://tech2work.tech/fr/about"
              target="_blank"
              rel="noopener"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >À propos</a
            >
          </li>
          <li>
            <a
              href="https://tech2work.tech/fr"
              target="_blank"
              rel="noopener"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >Tech2Work</a
            >
          </li>
        </ul>
      </div>

      <!-- Bloc Squares : pleine hauteur, col 1 sur md -->
      <div
        class="relative overflow-hidden min-h-48 md:min-h-full border-b-3 md:border-b-0 md:border-r-3"
      >
        <Galaxy
          :star-count="2000"
          :speed="0.5"
          :star-size="2"
          star-color="#333333"
        />
      </div>

      <!-- Contact -->
      <div class="flex flex-col gap-4 p-6 md:p-8 md:text-right">
        <p class="text-xs text-foreground uppercase tracking-widest">Contact</p>
        <ul class="flex flex-col gap-3">
          <li>
            <a
              href="mailto:contact@tech2work.tech"
              target="_blank"
              rel="noopener"
              class="text-sm text-muted-foreground"
              >contact@tech2work.tech</a
            >
          </li>
          <li>
            <a
              href="https://wa.me/2290162369889"
              target="_blank"
              rel="noopener"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >Support</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-3 border-t-3 border-border px-6 md:px-12 py-5"
    >
      <p class="text-xs text-muted-foreground">
        © {{ year }} Tech2Work. Tous droits réservés.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://tech2work.tech/fr/terms"
          class="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Mentions légales
        </a>
        <a
          href="https://tech2work.tech/fr/privacy"
          class="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Politique de confidentialité
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
import Galaxy from "~/components/ui/galaxy/Galaxy.vue";
</script>
