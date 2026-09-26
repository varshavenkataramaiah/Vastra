const test = require('node:test');
const assert = require('node:assert/strict');

const { isAdminUserId } = require('../utils/admin');

test('admin access is granted only to configured user ids', () => {
  const originalAdminUserIds = process.env.ADMIN_USER_IDS;
  process.env.ADMIN_USER_IDS = '  507f1f77bcf86cd799439011, 507f1f77bcf86cd799439012 ';

  try {
    assert.equal(isAdminUserId('507f1f77bcf86cd799439011'), true);
    assert.equal(isAdminUserId('507f1f77bcf86cd799439013'), false);
    assert.equal(isAdminUserId(''), false);
  } finally {
    if (originalAdminUserIds === undefined) {
      delete process.env.ADMIN_USER_IDS;
    } else {
      process.env.ADMIN_USER_IDS = originalAdminUserIds;
    }
  }
});