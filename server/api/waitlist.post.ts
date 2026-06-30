export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { fullname, email, phone } = body;

  if (!fullname || !email || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: "Champs manquants",
    });
  }

  try {
    const response = await $fetch(
      "https://sheet.tech2work.tech/api/database/rows/table/879/?user_field_names=true",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${config.baserowApiToken}`,
          "Content-Type": "application/json",
        },
        body: {
          Name: fullname,
          Telephone: phone,
          Email: email,
        },
      },
    );

    return { success: true, data: response };
  } catch (err: any) {
    console.log("Error while adding to waitlist: ", err);
    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: "Erreur lors de l'envoi vers Baserow",
    });
  }
});
