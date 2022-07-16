import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

const getReturnToUrl = (host: string | null, url: string) => {
  if (!host) {
    throw new Error("Host is required");
  }

  let returnTo = `${host}/${url}`;

  if (host?.split(":")[0] === "localhost") {
    returnTo = "http://" + returnTo;
  } else {
    returnTo = "https://" + returnTo;
  }

  return returnTo;
};

export default handleAuth({
  async logout(req, res) {
    // You don't strictly need to sanitise `req.query.returnTo` because it has to be in Auth0's "Allowed Logout URLs"
    // But if you ever added a local logout option you should sanitise it, like we do with the login `returnTo`
    // eg https://github.com/auth0/nextjs-auth0/blob/beta/src/handlers/login.ts#L70-L72

    try {
      const host = req.headers?.host;

      await handleLogout(req, res, {
        returnTo: getReturnToUrl(host ?? null, "api/auth/login"),
      });
    } catch (error) {
      const err = error as any;
      console.log(error);
      res.status(err.status || 400).end(err.message);
    }
  },

  async login(req, res) {
    // You don't strictly need to sanitise `req.query.returnTo` because it has to be in Auth0's "Allowed Logout URLs"
    // But if you ever added a local logout option you should sanitise it, like we do with the login `returnTo`
    // eg https://github.com/auth0/nextjs-auth0/blob/beta/src/handlers/login.ts#L70-L72
    try {
      const host = req.headers?.host;

      await handleLogin(req, res, {
        returnTo: getReturnToUrl(host ?? null, "dashboard/home"),
      });
    } catch (error) {
      const err = error as any;
      res.status(err.status || 400).end(err.message);
    }
  },
});
