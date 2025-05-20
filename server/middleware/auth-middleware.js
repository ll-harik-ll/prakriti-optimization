const checkAuthMiddleware = (req, res, next) => {
    if (req.session?.userID)
        next();
    else
        res.status(401).json({ message: `Authentication Failure!` });
};

export default checkAuthMiddleware;