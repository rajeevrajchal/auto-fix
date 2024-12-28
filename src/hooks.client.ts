import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.password = event.cookies.get("userpassword");
  const PUBLIC_PAGE_PASSWORD = "autofix";

  if (
    PUBLIC_PAGE_PASSWORD &&
    event.url.pathname !== "/login" &&
    event.locals.password !== PUBLIC_PAGE_PASSWORD
  ) {
    return new Response("Redirect", {
      status: 302,
      headers: { Location: `/login` },
    });
  }
  if (
    event.url.pathname === "/login" &&
    event.locals.password === PUBLIC_PAGE_PASSWORD
  ) {
    return new Response("Redirect", {
      status: 302,
      headers: { Location: `/` },
    });
  }

  return resolve(event);
};
