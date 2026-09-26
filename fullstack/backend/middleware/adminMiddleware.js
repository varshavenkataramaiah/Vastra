const authMiddleware = require('./authMiddleware');
const { isAdminUserId } = require('../utils/admin');

const adminMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (!isAdminUserId(req.user?.id)) {
      return res.status(403).json({ message: 'Admin access is required' });
    }

    next();
  });
};

module.exports = adminMiddleware;
