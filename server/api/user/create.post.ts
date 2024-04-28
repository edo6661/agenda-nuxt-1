export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userExist = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (userExist) {
    // ! cari tau create error
    throw createError({
      statusCode: 400,
      message: "User already exists",
    });
  }
  await db.user.create({
    data: {
      ...body,
    },
  });
  return {
    statusCode: 201,
    body: JSON.stringify({ message: "User created" }),
  };
});
