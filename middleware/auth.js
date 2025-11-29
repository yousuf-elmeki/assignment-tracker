export function ensureAuth(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
}

export function attachUser(req, res, next) {
  res.locals.user = req.user || null;
  next();
}

