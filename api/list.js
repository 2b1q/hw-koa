const userList = [{ userId: 1, name: "Todar" }, { userId: 2, name: "Zooloo" }];

module.exports = {
  get: id =>
    new Promise((resolve, reject) => {
      if (id) {
        id = parseInt(id);
        const result = userList.filter(({ userId }) => userId === id);
        result.length > 0
          ? resolve(...result)
          : reject({ error: `UserId: ${id} not found`, status: 404 });
      }
      resolve(userList);
    })
};
