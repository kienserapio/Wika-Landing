(async () => {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  try {
    const r = await prisma.pioneerApplication.create({
      data: {
        firstName: 'CI Test',
        lastName: 'User',
        email: `ci_test_${Date.now()}@example.com`,
        location: 'ncr',
        roles: ['tester'],
        agreedToTerms: true,
      },
    });
    console.log('created', r.id);
  } catch (e) {
    console.error('prisma error', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
