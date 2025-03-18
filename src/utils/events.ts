export const sendDataToGA = async (
  payload: Record<string, number | string>,
) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbzU7sWddpX_jP9VAsXfOuT0xH05KwEtuZRg2-aVGuExdmBqSmWzy9zKe06nvyYs4GBIjw/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, variant: "variant1", ...payload }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
