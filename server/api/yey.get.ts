export default defineEventHandler(async (event) => {
  return await db.user.findMany();
});
