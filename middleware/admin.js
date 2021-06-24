const cookie = process.server ? require("cookie") : require("js-cookie");

export default async function ({ redirect, req, store }) {
  let token = null;

  if (process.server) {
    if (req.headers.cookie) {
      let token = cookie.parse(req.headers.cookie);
    }
  } else {
    token = cookie.get("auth");
  }

  await store.dispatch("auth/refreshUserDetails", token);

  if (!$auth.user().admin) {
    redirect("/");
  }
}