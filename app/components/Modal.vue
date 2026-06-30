<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-[fadein_0.2s_ease]"
      @click="!loading && close()"
    />

    <!-- Modale -->
    <div
      class="relative w-full max-w-md bg-background border border-border rounded-xl p-6 md:p-8 animate-[modal-in_0.25s_cubic-bezier(0.16,1,0.3,1)]"
    >
      <!-- Bouton fermer -->
      <button
        type="button"
        :disabled="loading"
        class="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Fermer"
        @click="close"
      >
        <Icon name="lucide:x" class="w-4 h-4" />
      </button>

      <div class="flex flex-col gap-1 mb-6">
        <h3 class="text-xl font-medium text-foreground">
          Rejoindre la liste d'attente
        </h3>
        <p class="text-sm text-muted-foreground">
          Laissez-nous vos coordonnées, on vous recontacte rapidement.
        </p>
      </div>

      <form class="flex flex-col gap-4" @submit.prevent="submit" novalidate>
        <div class="flex flex-col gap-1.5">
          <label for="fullname" class="text-xs text-muted-foreground"
            >Nom & Prénoms</label
          >
          <input
            id="fullname"
            v-model.trim="form.fullname"
            type="text"
            :disabled="loading"
            placeholder="Jean Dupont"
            class="w-full h-10 px-3 border rounded-sm bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
            :class="fieldErrors.fullname ? 'border-red-500' : 'border-border'"
          />
          <p v-if="fieldErrors.fullname" class="text-xs text-red-500">
            {{ fieldErrors.fullname }}
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-xs text-muted-foreground">Email</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            :disabled="loading"
            placeholder="vous@entreprise.com"
            class="w-full h-10 px-3 border rounded-sm bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
            :class="fieldErrors.email ? 'border-red-500' : 'border-border'"
          />
          <p v-if="fieldErrors.email" class="text-xs text-red-500">
            {{ fieldErrors.email }}
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="phone" class="text-xs text-muted-foreground"
            >Téléphone</label
          >
          <input
            id="phone"
            v-model.trim="form.phone"
            type="tel"
            :disabled="loading"
            placeholder="+229 00 00 00 00"
            class="w-full h-10 px-3 border rounded-sm bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
            :class="fieldErrors.phone ? 'border-red-500' : 'border-border'"
          />
          <p v-if="fieldErrors.phone" class="text-xs text-red-500">
            {{ fieldErrors.phone }}
          </p>
        </div>

        <!-- Message d'erreur serveur -->
        <p v-if="errorMessage" class="text-xs text-red-500 -mt-1">
          {{ errorMessage }}
        </p>

        <div class="flex items-center gap-3 mt-2">
          <button
            type="button"
            :disabled="loading"
            class="flex-1 h-10 border border-border rounded-sm text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            @click="close"
          >
            Fermer
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="flex-1 h-10 bg-foreground text-background rounded-sm text-sm font-medium transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Icon
              v-if="loading"
              name="lucide:loader-2"
              class="w-4 h-4 animate-spin"
            />
            {{ loading ? "Envoi..." : "Envoyer" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true });

const form = reactive({
  fullname: "",
  email: "",
  phone: "",
});

const fieldErrors = reactive({
  fullname: "",
  email: "",
  phone: "",
});

const loading = ref(false);
const errorMessage = ref("");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s-]{8,15}$/;

function validate() {
  fieldErrors.fullname = "";
  fieldErrors.email = "";
  fieldErrors.phone = "";

  let valid = true;

  if (!form.fullname) {
    fieldErrors.fullname = "Ce champ est requis";
    valid = false;
  }

  if (!form.email) {
    fieldErrors.email = "Ce champ est requis";
    valid = false;
  } else if (!EMAIL_REGEX.test(form.email)) {
    fieldErrors.email = "Email invalide";
    valid = false;
  }

  if (!form.phone) {
    fieldErrors.phone = "Ce champ est requis";
    valid = false;
  } else if (!PHONE_REGEX.test(form.phone)) {
    fieldErrors.phone = "Numéro de téléphone invalide";
    valid = false;
  }

  return valid;
}

function resetForm() {
  form.fullname = "";
  form.email = "";
  form.phone = "";
  fieldErrors.fullname = "";
  fieldErrors.email = "";
  fieldErrors.phone = "";
  errorMessage.value = "";
}

function close() {
  if (loading.value) return;
  modelValue.value = false;
}

async function submit() {
  errorMessage.value = "";

  if (!validate()) return;

  loading.value = true;

  try {
    await $fetch("/api/waitlist", {
      method: "POST",
      body: { ...form },
    });

    resetForm();
    modelValue.value = false;
    navigateTo("/thanks");
  } catch (err: any) {
    errorMessage.value = "Une erreur est survenue, veuillez réessayer.";
  } finally {
    loading.value = false;
  }
}
</script>

<style>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes modal-in {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
