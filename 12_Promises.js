let login = (userName, password) => {
  return new Promise((resolve, reject) => {
    if (userName === "ramesh" && password === "1234") {
      resolve("Login successfully");
    } else {
      reject("Username or password is wrong");
    }
  });
};
let repo = (repoName) => {
  return new Promise((resolve, reject) => {
    if (repoName === "simp_nodejs") {
      resolve("Repo Name in github:-" + repoName);
    } else {
      reject("repo is not avalibale in the github");
    }
  });
};
let commit = (commitId) => {
  return new Promise((resolve, reject) => {
    if (commitId === "123456") {
      resolve("your commit is avalbale");
    } else {
      reject("your commit is not avalable");
    }
  });
};

login("ramesh", "1234")
  .then(
    (success) => {
      console.log(success);
      return repo("simp_nodejs");
    },
    (error) => console.log(error)
  )
  .then(
    (success) => {
      console.log(success);
      return commit("123456");
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (success) => {
      console.log(success);
    },
    (error) => {
      console.log(error);
    }
  );
